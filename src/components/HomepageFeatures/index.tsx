import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '全面收录',
    description: (
      <>
        收录全球主流 AI 计算卡，涵盖 NVIDIA、AMD、Intel、Google、Amazon、华为等厂商
        — 从 V100 到 B200，从 MI250 到 TPU v5p。
      </>
    ),
  },
  {
    title: '规格详实',
    description: (
      <>
        每张计算卡均提供架构、显存、算力、功耗、互联方式等核心指标的详尽参数表格，
        便于横向对比选型。
      </>
    ),
  },
  {
    title: '持续更新',
    description: (
      <>
        随新硬件发布持续更新，提供厂商官网、驱动下载、SDK 文档等实用资源链接，
        一站式解决信息查找需求。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
