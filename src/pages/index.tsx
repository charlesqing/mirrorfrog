import type { ReactNode } from 'react';
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { ZH_CONTENT, type HomeContent, type HotChip } from '../data/home-content.zh';
import { EN_CONTENT } from '../data/home-content.en';
import { rankScore, sortChips } from '../utils/chip-utils';

type Chip = {
  id: string;
  title: string;
  vendor: string;
  slug: string;
  description: string;
  keywords: string[];
  specs: {
    architecture?: string;
    process?: string;
    memory?: { type?: string; capacity?: string; bandwidth?: string };
    compute?: { fp8?: string; fp16?: string; fp32?: string; int8?: string };
    tdp?: string;
    release?: string;
  };
};

type News = {
  title: string;
  date: string;
  slug: string;
  url: string;
  description: string;
  tags: string[];
};

type Stats = { chips: number; vendors: number; pages: number };

function rankScore(c: HotChip, content: HomeContent): number {
  const vw = content.vendorWeight[c.vendor] ?? 0.7;
  const cw = content.categoryWeight[c.category] ?? 0.3;
  const releaseDate = new Date(c.released).getTime();
  const ref = new Date('2026-01-01').getTime();
  const yearsOld = Math.max(0, (ref - releaseDate) / (1000 * 60 * 60 * 24 * 365.25));
  const recency = Math.max(0.3, Math.pow(0.85, yearsOld));
  const importance = vw * cw * recency;
  const compute = Math.min(c.fp16Tflops, 5000) / 2000;
  return importance * 0.5 + compute * 0.5;
}

function sortChips(chips: HotChip[], content: HomeContent): HotChip[] {
  return [...chips].sort((a, b) => {
    const sa = rankScore(a, content);
    const sb = rankScore(b, content);
    if (Math.abs(sa - sb) > 0.001) return sb - sa;
    return b.released.localeCompare(a.released);
  });
}

function Bar({ ratio, color }: { ratio: number; color: string }) {
  const pct = Math.max(0, Math.min(100, Math.round(ratio * 100)));
  return (
    <span className={styles.barWrap}>
      <span
        className={styles.barTrack}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${pct}%`}
      >
        <span className={styles.barFill} style={{ width: `${pct}%`, backgroundColor: color }} />
      </span>
    </span>
  );
}

function SearchBox({ chips, content }: { chips: Chip[]; content: HomeContent }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Chip[]>([]);
  const [fuse, setFuse] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<number | null>(null);

  // 初始化 Fuse.js
  useEffect(() => {
    if (chips.length === 0) return;
    import('fuse.js').then(({ default: Fuse }) => {
      setFuse(new Fuse(chips, {
        keys: [
          { name: 'title', weight: 3 },
          { name: 'vendor', weight: 2 },
          { name: 'specs.architecture', weight: 2 },
          { name: 'specs.memory.type', weight: 1 },
          { name: 'specs.memory.capacity', weight: 1 },
          { name: 'keywords', weight: 1 },
          { name: 'description', weight: 0.5 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 1,
        includeScore: false,
      }));
    });
  }, [chips]);

  // 防抖搜索
  const debouncedQueryRef = useRef('');
  
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }
    
    debounceTimerRef.current = window.setTimeout(() => {
      if (fuse) {
        const r = fuse.search(query.trim()).slice(0, 8).map((x: any) => x.item);
        setResults(r);
        setSelectedIndex(r.length > 0 ? 0 : -1);
      }
    }, 200);
    
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query, fuse]);

  // 键盘导航
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!open || results.length === 0) return;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          e.preventDefault();
          const chip = results[selectedIndex];
          window.location.href = chip.slug;
        }
        break;
      case 'Escape':
        e.preventDefault();
        setOpen(false);
        setQuery('');
        setResults([]);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  }, [open, results, selectedIndex]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className={styles.searchWrap} ref={wrapRef}>
      <div className={styles.searchBox}>
        <span className={styles.searchIcon} aria-hidden>⌕</span>
        <input
          ref={inputRef}
          type="search"
          className={styles.searchInput}
          placeholder={content.searchPlaceholder}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          aria-label={content.searchLabel}
          aria-autocomplete="list"
          aria-expanded={open && query}
          aria-activedescendant={selectedIndex >= 0 ? `search-result-${selectedIndex}` : undefined}
        />
        {query && (
          <button
            type="button"
            className={styles.searchClear}
            onClick={() => { setQuery(''); setResults([]); }}
            aria-label={content.searchClear}
          >
            ×
          </button>
        )}
      </div>
      {open && query && (
        <div className={styles.searchResults}>
          {results.length === 0 ? (
            <div className={styles.searchEmpty}>
              {content.searchEmptyPrefix}{query}{content.searchEmptySuffix}
              <Link to="/docs/comparison" onClick={() => setOpen(false)}>{content.searchEmptyLink}</Link>
            </div>
          ) : (
            <ul className={styles.searchList} role="listbox" aria-label={content.searchLabel}>
              {results.map((chip, index) => (
                <li key={`${chip.vendor}-${chip.id}`} role="option" id={`search-result-${index}`} aria-selected={index === selectedIndex}>
                  <Link 
                    to={chip.slug} 
                    className={`${styles.searchItem} ${index === selectedIndex ? styles.searchItemSelected : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    <span className={styles.searchItemTitle}>{chip.title}</span>
                    <span className={styles.searchItemMeta}>
                      <span className={styles.searchVendor}>{chip.vendor}</span>
                      {chip.specs?.architecture && (
                        <span className={styles.searchTag}>{chip.specs.architecture}</span>
                      )}
                      {chip.specs?.memory?.type && (
                        <span className={styles.searchTag}>{chip.specs.memory.type}</span>
                      )}
                      {chip.specs?.memory?.capacity && (
                        <span className={styles.searchTag}>{chip.specs.memory.capacity}</span>
                      )}
                    </span>
                    <span className={styles.searchArrow}>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function HomepageHeader({ chips, content, stats }: { chips: Chip[]; content: HomeContent; stats: Stats }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {content.heroTitle || siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          {content.heroSubtitle}
        </p>
        <SearchBox chips={chips} content={content} />
        <div className={styles.heroStats}>
          <span className={styles.statItem}>
            <span className={styles.statValue}>{stats.chips}</span>
            <span className={styles.statLabel}>{content.statsChipLabel}</span>
          </span>
          <span className={styles.statDivider} />
          <span className={styles.statItem}>
            <span className={styles.statValue}>{stats.vendors}+</span>
            <span className={styles.statLabel}>{content.statsVendorLabel}</span>
          </span>
          <span className={styles.statDivider} />
          <span className={styles.statItem}>
            <span className={styles.statValue}>{stats.pages}</span>
            <span className={styles.statLabel}>{content.statsPagesLabel}</span>
          </span>
          <span className={styles.statDivider} />
          <span className={styles.statItem}>
            <span className={styles.statValue}>{content.statsUpdateLabel}</span>
          </span>
        </div>
      </div>
    </header>
  );
}

function HotChipsSection({ content }: { content: HomeContent }) {
  const sortedChips = useMemo(() => sortChips(content.hotChips, content), [content]);
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {content.hotChipsTitle}
        </Heading>
        <p className={styles.sectionDesc}>
          {content.hotChipsDesc}
        </p>
        <ul className={styles.chipList}>
          <li className={styles.chipHeader}>
            <span>{content.hotChipsHeader[0]}</span>
            <span>{content.hotChipsHeader[1]}</span>
            <span>{content.hotChipsHeader[2]}</span>
            <span>{content.hotChipsHeader[3]}</span>
            <span>{content.hotChipsHeader[4]}</span>
            <span>{content.hotChipsHeader[5]}</span>
            <span>{content.hotChipsHeader[6]}</span>
            <span>{content.hotChipsHeader[7]}</span>
          </li>
          {sortedChips.map((c) => {
            const color = content.categoryColors[c.category] || '#656d76';
            const uniqueKey = `${c.vendor}-${c.name}-${c.released}`;
            return (
              <li key={uniqueKey} className={styles.chipRow}>
                <Link to={c.slug} className={styles.chipLink}>
                  <span className={styles.chipName}>{c.name}</span>
                  <span className={styles.chipVendor}>{c.vendor}</span>
                  <span className={styles.chipArch}>{c.arch}</span>
                  <span className={styles.chipMem}>{c.mem}</span>
                  <span className={styles.chipBar}>
                    <Bar ratio={c.bwRatio} color={color} />
                    <code className={styles.chipBw}>{c.bw}</code>
                  </span>
                  <span className={styles.chipFp16}>{c.fp16}</span>
                  <span className={styles.chipTdp}>{c.tdp}</span>
                  <span
                    className={styles.chipTag}
                    style={{ backgroundColor: color }}
                    title={c.category}
                  >
                    {c.category}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className={styles.sectionFooter}>
          <Link to="/docs/comparison">{content.viewFullComparison}</Link>
        </p>
      </div>
    </section>
  );
}

function NewsSection({ news, content }: { news: News[]; content: HomeContent }) {
  if (news.length === 0) return null;
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          {content.latestNewsTitle}
        </Heading>
        <p className={styles.sectionDesc}>
          {content.latestNewsDescPrefix}
          <Link to="/blog" className={styles.sectionDescLink}>{content.latestNewsDescLink}</Link>
        </p>
        <ul className={styles.newsList}>
          {news.map((n) => (
            <li key={n.slug} className={styles.newsItem}>
              <Link to={n.url} className={styles.newsLink}>
                <time className={styles.newsDate}>{n.date}</time>
                <span className={styles.newsTitle}>{n.title}</span>
                {n.tags.length > 0 && (
                  <span className={styles.newsTags}>
                    {n.tags.slice(0, 2).map((t) => (
                      <span key={t} className={styles.newsTag}>#{t}</span>
                    ))}
                  </span>
                )}
                <span className={styles.newsArrow}>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTASection({ content }: { content: HomeContent }) {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <p className={styles.ctaTitle}>{content.ctaTitle}</p>
        <p className={styles.ctaSubtitle}>{content.ctaSubtitle}</p>
        <div className={styles.ctaRow}>
          <Link className={clsx('button button--primary button--lg', styles.ctaBtn)} to="/docs/comparison">
            {content.ctaFullComparison}
          </Link>
          <Link className={clsx('button button--secondary button--lg', styles.ctaBtn)} to="/docs/roadmap">
            {content.ctaRoadmap}
          </Link>
          <Link className={clsx('button button--outline button--lg', styles.ctaBtn)} to="/blog">
            {content.ctaBlog}
          </Link>
          <Link className={clsx('button button--outline button--lg', styles.ctaBtn)} to="/docs/tco-calculator">
            {content.ctaTco}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';
  const content: HomeContent = isEn ? EN_CONTENT : ZH_CONTENT;

  const [news, setNews] = useState<News[]>([]);
  const [chips, setChips] = useState<Chip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const stats: Stats = useMemo(() => {
    const vendorSet = new Set<string>();
    chips.forEach(c => vendorSet.add(c.vendor));
    return {
      chips: chips.length,
      vendors: vendorSet.size,
      pages: 386,
    };
  }, [chips]);

  useEffect(() => {
    Promise.all([
      fetch('/chips.json').then(r => {
        if (!r.ok) throw new Error('Failed to load chips data');
        return r.json();
      }),
      fetch('/news.json').then(r => {
        if (!r.ok) throw new Error('Failed to load news data');
        return r.json();
      }),
    ]).then(([chipsData, newsData]) => {
      setChips(Array.isArray(chipsData) ? chipsData : []);
      setNews(Array.isArray(newsData) ? newsData : []);
      setLoading(false);
    }).catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Layout title={isEn ? 'AI Compute Cards Wiki' : undefined} description={content.metaDescription}>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner} />
          <p className={styles.loadingText}>{content.loadingText || 'Loading...'}</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title={isEn ? 'AI Compute Cards Wiki' : undefined} description={content.metaDescription}>
        <div className={styles.errorContainer}>
          <p className={styles.errorText}>{content.errorText || 'Failed to load data'}: {error}</p>
          <button className={styles.retryButton} onClick={() => { setLoading(true); setError(null); window.location.reload(); }}>
            {content.retryText || 'Retry'}
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={isEn ? 'AI Compute Cards Wiki' : undefined}
      description={content.metaDescription}
    >
      <HomepageHeader chips={chips} content={content} stats={stats} />
      <main>
        <HotChipsSection content={content} />
        <NewsSection news={news} content={content} />
        <CTASection content={content} />
      </main>
    </Layout>
  );
}
