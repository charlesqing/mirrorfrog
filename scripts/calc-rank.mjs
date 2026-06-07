const vendorWeight = { 'NVIDIA': 1.0, 'AMD': 0.9, 'Google': 0.85, '华为': 0.85, 'Intel': 0.75, 'Cerebras': 0.7 };
const categoryWeight = { '训练': 1.0, '推理': 0.8, '消费': 0.6, '边缘': 0.5, '晶圆': 0.4, '神经形态': 0.3 };

function rankScore(name, vendor, category, released, fp16Tflops) {
  const vw = vendorWeight[vendor] ?? 0.7;
  const cw = categoryWeight[category] ?? 0.3;
  const releaseDate = new Date(released).getTime();
  const ref = new Date('2026-01-01').getTime();
  const yearsOld = Math.max(0, (ref - releaseDate) / (1000 * 60 * 60 * 24 * 365.25));
  const recency = Math.max(0.3, Math.pow(0.85, yearsOld));
  const importance = vw * cw * recency;
  const compute = Math.min(fp16Tflops, 5000) / 2000;
  return { 
    score: importance * 0.6 + compute * 0.4, 
    importance: importance * 0.6, 
    compute: compute * 0.4, 
    recency: recency 
  };
}

const chips = [
  { name: 'H100 SXM', vendor: 'NVIDIA', category: '训练', released: '2022-10-01', fp16: 989 },
  { name: 'H200 SXM', vendor: 'NVIDIA', category: '训练', released: '2024-06-01', fp16: 989 },
  { name: 'B200', vendor: 'NVIDIA', category: '训练', released: '2024-10-01', fp16: 2250 },
  { name: 'B300 Ultra', vendor: 'NVIDIA', category: '训练', released: '2025-10-01', fp16: 2700 },
  { name: 'MI300X', vendor: 'AMD', category: '训练', released: '2023-12-01', fp16: 1300 },
  { name: 'MI355X', vendor: 'AMD', category: '训练', released: '2025-10-01', fp16: 2600 },
  { name: 'TPU Ironwood', vendor: 'Google', category: '训练', released: '2025-11-01', fp16: 2400 },
  { name: '昇腾 910C', vendor: '华为', category: '训练', released: '2024-04-01', fp16: 320 },
  { name: '昇腾 920', vendor: '华为', category: '训练', released: '2025-09-01', fp16: 800 },
  { name: '昇腾 950DT', vendor: '华为', category: '训练', released: '2026-04-01', fp16: 1000 },
  { name: '昇腾 950PR', vendor: '华为', category: '推理', released: '2026-04-01', fp16: 1000 },
  { name: 'WSE-3', vendor: 'Cerebras', category: '晶圆', released: '2024-03-01', fp16: 125 },
];

const scored = chips.map(c => {
  const r = rankScore(c.name, c.vendor, c.category, c.released, c.fp16);
  return { ...c, ...r };
}).sort((a, b) => b.score - a.score);

console.log('当前排名（得分降序）：');
console.log('排名\t芯片\t\t厂商\t类别\tFP16\t总分\t重要性\t算力\t时效性');
scored.forEach((c, i) => {
  console.log(`${i+1}\t${c.name.padEnd(16)}\t${c.vendor.padEnd(8)}\t${c.category}\t${c.fp16}\t${c.score.toFixed(3)}\t${c.importance.toFixed(3)}\t${c.compute.toFixed(3)}\t${c.recency.toFixed(3)}`);
});
