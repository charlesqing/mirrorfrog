import { useEffect } from 'react';
import { useDocusaurusContext } from '@docusaurus/theme-common';

export default function I18nTitle(): JSX.Element | null {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  
  useEffect(() => {
    const titles: Record<string, string> = {
      'zh-Hans': 'AI 算力卡百科 | 100+ 款 AI 芯片规格对比',
      'en': 'AI Compute Cards Wiki | 100+ AI Chips Specs Compared',
    };
    
    // 避免覆盖页面自身的标题（由 frontmatter 设置）
    const currentTitle = document.title;
    const isDefaultTitle = 
      currentTitle.includes('AI Compute Cards Wiki') || 
      currentTitle.includes('AI 算力卡百科');
    
    if (isDefaultTitle) {
      document.title = titles[currentLocale] || titles['en'];
    }
  }, [currentLocale]);
  
  return null;
}
