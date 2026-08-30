import type { ReactNode } from 'react';
import { useEffect, useState, useMemo, useCallback } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './compare.module.css';
import { ZH_CONTENT } from '../data/home-content.zh';
import { EN_CONTENT } from '../data/home-content.en';
import LeadCapture from '../components/LeadCapture';

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

type CompareChip = {
  title: string;
  vendor: string;
  slug: string;
  architecture?: string;
  process?: string;
  memoryType?: string;
  memoryCapacity?: string;
  memoryBandwidth?: string;
  fp8?: string;
  fp16?: string;
  fp32?: string;
  int8?: string;
  tdp?: string;
  release?: string;
};

const MAX_CHIPS = 4;

export default function ComparePage(): ReactNode {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const isZh = locale.startsWith('zh');
  const content = isZh ? ZH_CONTENT : EN_CONTENT;

  const [chips, setChips] = useState<Chip[]>([]);
  const [selected, setSelected] = useState<(Chip | null)[]>(Array(MAX_CHIPS).fill(null));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadChips = useCallback(() => {
    setLoading(true);
    setError(null);
    fetch('/chips.json')
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(data => {
        setChips(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Failed to load chip data');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadChips();
  }, [loadChips]);

  const selectedChips: CompareChip[] = useMemo(() => {
    return selected
      .filter((c): c is Chip => c !== null)
      .map(c => {
        const specs = c.specs || {};
        return {
        title: c.title,
        vendor: c.vendor,
        slug: c.slug,
        architecture: specs.architecture,
        process: specs.process,
        memoryType: specs.memory?.type,
        memoryCapacity: specs.memory?.capacity,
        memoryBandwidth: specs.memory?.bandwidth,
        fp8: specs.compute?.fp8,
        fp16: specs.compute?.fp16,
        fp32: specs.compute?.fp32,
        int8: specs.compute?.int8,
        tdp: specs.tdp,
        release: specs.release,
      };
    });
  }, [selected]);

  // 留资报告的个性化段落：当前对比选择
  const getCompareContext = useCallback(() => {
    if (selectedChips.length === 0) return '';
    const lines = selectedChips.map(c =>
      `- **${c.title}**（${c.vendor}）— ${c.architecture ?? '—'} / ${c.memoryCapacity ?? '—'} / TDP ${c.tdp ?? '—'}`,
    );
    return `**当前对比芯片**\n${lines.join('\n')}`;
  }, [selectedChips]);

  // P1 性能：厂商分组/排序只在 chips 变化时计算一次，避免每次渲染重算 222 卡
  const chipGroups = useMemo(() => {
    const groups = chips.reduce((acc, c) => {
      const g = acc.find(x => x.vendor === c.vendor);
      if (g) g.chips.push(c);
      else acc.push({ vendor: c.vendor, chips: [c] });
      return acc;
    }, [] as { vendor: string; chips: Chip[] }[]);
    groups.sort((a, b) => a.vendor.localeCompare(b.vendor));
    groups.forEach(g => g.chips.sort((a, b) => a.title.localeCompare(b.title)));
    return groups;
  }, [chips]);

  const handleSelect = (index: number, chipId: string) => {
    const chip = chips.find(c => c.id === chipId) || null;
    const newSelected = [...selected];
    newSelected[index] = chip;
    setSelected(newSelected);
  };

  const handleClear = (index: number) => {
    const newSelected = [...selected];
    newSelected[index] = null;
    setSelected(newSelected);
  };

  const handleClearAll = () => {
    setSelected(Array(MAX_CHIPS).fill(null));
  };

  if (error) {
    return (
      <Layout title={isZh ? '芯片对比' : 'Chip Comparison'}>
        <main className={styles.errorWrap}>
          <div className={styles.errorBox}>
            <p className={styles.errorMessage}>
              {isZh ? '加载芯片数据失败' : 'Failed to load chip data'}: {error}
            </p>
            <button onClick={loadChips} className={styles.errorRetry}>
              {isZh ? '重试' : 'Retry'}
            </button>
          </div>
        </main>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout title="Chip Comparison">
        <div className={styles.loading}>
          {isZh ? '加载中...' : 'Loading...'}
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={isZh ? '芯片对比' : 'Chip Comparison'}>
      <main className={styles.main}>
        <Heading as="h1" className={styles.title}>
          {isZh ? '🔥 AI 算力卡对比工具' : '🔥 AI Compute Card Comparison'}
        </Heading>
        <p className={styles.subtitle}>
          {isZh
            ? '选择 2-4 款 AI 芯片，并排对比它们的关键规格参数。'
            : 'Select 2-4 AI chips to compare their key specifications side by side.'}
        </p>

        {/* 芯片选择区 */}
        <section className={styles.selectorSection}>
          <div className={styles.selectorGrid}>
            {selected.map((chip, i) => (
              <div key={i} className={styles.selectorItem}>
                <label className={styles.selectorLabel}>
                  {isZh ? `芯片 ${i + 1}` : `Chip ${i + 1}`}
                </label>
                <select
                  className={styles.selectorSelect}
                  value={chip?.id || ''}
                  onChange={e => handleSelect(i, e.target.value)}
                >
                  <option value="">
                    {isZh ? '— 选择芯片 —' : '— Select a chip —'}
                  </option>
                  {chipGroups.map(group => (
                    <optgroup key={group.vendor} label={group.vendor}>
                      {group.chips.map(c => (
                        <option key={c.id} value={c.id}>
                          {c.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {chip && (
                  <button
                    className={styles.clearButton}
                    onClick={() => handleClear(i)}
                    title={isZh ? '清除' : 'Clear'}
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
          <button className={styles.clearAllButton} onClick={handleClearAll}>
            {isZh ? '清空全部' : 'Clear All'}
          </button>
        </section>

        {/* 对比表格 */}
        {selectedChips.length >= 2 && (
          <section className={styles.tableSection}>
            <Heading as="h2" className={styles.tableTitle}>
              {isZh ? '📊 规格对比' : '📊 Specification Comparison'}
            </Heading>

            {/* 基本信息 */}
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.specHeader}>{isZh ? '规格' : 'Specification'}</th>
                  {selectedChips.map((c, i) => (
                    <th key={i} className={styles.chipHeader}>
                      <Link to={c.slug} className={styles.chipLink}>
                        {c.title}
                      </Link>
                      <br />
                      <span className={styles.vendorLabel}>{c.vendor}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.specName}>{isZh ? '厂商' : 'Vendor'}</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.vendor}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={styles.specName}>{isZh ? '架构' : 'Architecture'}</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.architecture || '—'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={styles.specName}>{isZh ? '制程' : 'Process'}</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.process || '—'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={styles.specName}>{isZh ? '发布时间' : 'Release Date'}</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.release || '—'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            {/* 算力性能 */}
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.specHeader}>{isZh ? '算力性能' : 'Compute Performance'}</th>
                  {selectedChips.map((c, i) => (
                    <th key={i} className={styles.chipHeader}>
                      {c.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.specName}>FP8</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.fp8 || '—'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={styles.specName}>FP16 / BF16</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.fp16 || '—'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={styles.specName}>FP32</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.fp32 || '—'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={styles.specName}>INT8</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.int8 || '—'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            {/* 内存系统 */}
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.specHeader}>{isZh ? '内存系统' : 'Memory System'}</th>
                  {selectedChips.map((c, i) => (
                    <th key={i} className={styles.chipHeader}>
                      {c.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.specName}>{isZh ? '内存类型' : 'Memory Type'}</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.memoryType || '—'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={styles.specName}>{isZh ? '内存容量' : 'Memory Capacity'}</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.memoryCapacity || '—'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={styles.specName}>{isZh ? '内存带宽' : 'Memory Bandwidth'}</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.memoryBandwidth || '—'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            {/* 功耗 */}
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.specHeader}>{isZh ? '功耗' : 'Power'}</th>
                  {selectedChips.map((c, i) => (
                    <th key={i} className={styles.chipHeader}>
                      {c.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.specName}>TDP</td>
                  {selectedChips.map((c, i) => (
                    <td key={i} className={styles.specValue}>
                      {c.tdp || '—'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {selectedChips.length < 2 && (
          <div className={styles.hint}>
            {isZh
              ? '👆 请选择至少 2 款芯片开始对比'
              : '👆 Please select at least 2 chips to start comparison'}
          </div>
        )}

        {selectedChips.length >= 2 && (
          <LeadCapture
            source="compare"
            lang={isZh ? 'zh' : 'en'}
            getExtraSections={getCompareContext}
          />
        )}
      </main>
    </Layout>
  );
}
