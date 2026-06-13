import React, { useState, useEffect, useMemo, useRef } from 'react';

interface Chip { id: string; name: string; vendor: string; tdp: number; }
interface PricingInfo { official_msrp?: number | null; market_price?: number | null; source: string; note?: string; }
interface PricingData { [vendor: string]: { [chipId: string]: PricingInfo }; }
interface CompareItem { chip: Chip; quantity: number; tco: number; procurement: number; electricity: number; dc: number; cooling: number; }

function flatPricing(p: PricingData) {
  const o: Record<string, PricingInfo> = {};
  Object.keys(p).forEach(v => Object.keys(p[v]).forEach(c => o[c] = p[v][c]));
  return o;
}
function parseTdp(s: string) {
  if (!s || s === 'Cancelled' || s === 'N/A' || s === 'TBD') return 0;
  // 替换各种破折号为普通破折号
  const cleaned = String(s).replace(/[–—~～]/g, '-');
  // 提取所有数字（含小数点）
  const matches = cleaned.match(/(\d+(?:[.,]\d+)?)/g);
  if (!matches) return 0;
  // 取最大数字
  const max = matches.reduce((m, v) => Math.max(m, parseFloat(v.replace(',', ''))), 0);
  // kW 转 W
  if (/kw/i.test(s)) return Math.round(max * 1000);
  return Math.round(max);
}
function fmt(n: number) {
  if (n >= 1e6) return '$' + (n/1e6).toFixed(1) + 'M';
  if (n >= 1e3) return '$' + (n/1e3).toFixed(0) + 'K';
  return '$' + n.toLocaleString(undefined,{maximumFractionDigits:0});
}
function fmtFull(n: number) { return '$' + n.toLocaleString(undefined,{maximumFractionDigits:0}); }

const COLORS = ['#3578e5','#e94b4b','#f5a623','#7ed321'];

// 厂商分组标签
const VENDOR_LABEL: Record<string, string> = {
  nvidia: '🟢 NVIDIA',
  amd: '🔴 AMD',
  intel: '🔵 Intel',
  huawei: '🔴 华为海思',
  google: '🟡 Google',
  aws: '🟠 AWS',
  cerebras: '🟣 Cerebras',
  meta: '🔵 Meta',
  microsoft: '🔵 Microsoft',
  apple: '⚫ Apple',
  qualcomm: '🔵 Qualcomm',
  mediatek: '🟢 MediaTek',
  others: '🟤 其它',
};

// 统一芯片中文名称映射
const ZH_NAMES: Record<string, string> = {
  'a100': 'NVIDIA A100', 'h100': 'NVIDIA H100 SXM', 'h100-nvl': 'NVIDIA H100 NVL',
  'h200': 'NVIDIA H200 SXM', 'h20': 'NVIDIA H20', 'h800': 'NVIDIA H800',
  'b100': 'NVIDIA B100', 'b200': 'NVIDIA B200', 'b300-ultra': 'NVIDIA B300 Ultra',
  'l2': 'NVIDIA L2', 'l4': 'NVIDIA L4', 'l40s': 'NVIDIA L40S',
  't4': 'NVIDIA T4',
  'rtx-4090': 'NVIDIA RTX 4090', 'rtx-5080': 'NVIDIA RTX 5080', 'rtx-5090': 'NVIDIA RTX 5090',
  'rtx-5090-d-v2': 'NVIDIA RTX 5090 D v2', 'rtx-6000-ada': 'NVIDIA RTX 6000 Ada',
  'rtx-pro-6000-blackwell': 'NVIDIA RTX Pro 6000 Blackwell',
  'rtx-spark': 'NVIDIA RTX Spark',
  'gb200': 'NVIDIA GB200', 'gb300': 'NVIDIA GB300',
  'rubin': 'NVIDIA Rubin', 'rubin-cpx': 'NVIDIA Rubin CPX', 'rubin-r200': 'NVIDIA Rubin R200',
  'drive-thor': 'NVIDIA DRIVE Thor', 'jetson-orin': 'NVIDIA Jetson Orin', 'jetson-thor': 'NVIDIA Jetson Thor',
  'vera-cpu': 'NVIDIA Vera CPU',
  'mi210': 'AMD Instinct MI210', 'mi250': 'AMD Instinct MI250', 'mi300a': 'AMD Instinct MI300A',
  'mi300x': 'AMD Instinct MI300X', 'mi325x': 'AMD Instinct MI325X',
  'mi350': 'AMD Instinct MI350X', 'mi355x': 'AMD Instinct MI355X', 'mi400': 'AMD Instinct MI400',
  'ryzen-ai-max': 'AMD Ryzen AI Max',
  'gaudi-1': 'Intel Gaudi 1', 'gaudi-2': 'Intel Gaudi 2', 'gaudi-3': 'Intel Gaudi 3', 'gaudi-4': 'Intel Gaudi 4',
  'max-series': 'Intel Max Series', 'flex-series': 'Intel Flex 系列',
  'arc-pro-b60': 'Intel Arc Pro B60', 'arc-pro-b50': 'Intel Arc Pro B50',
  'core-ultra-2': 'Intel Core Ultra Series 2', 'jaguar-shores': 'Intel Jaguar Shores',
  'crescent-island': 'Intel Crescent Island',
  'ascend-910b': '华为昇腾 910B', 'ascend-910c': '华为昇腾 910C', 'ascend-910d': '华为昇腾 910D',
  'ascend-920': '华为昇腾 920', 'ascend-950': '华为昇腾 950',
  'ascend-950dt': '华为昇腾 950DT', 'ascend-950pr': '华为昇腾 950PR',
  'tpu-v4': 'Google TPU v4', 'tpu-v5e': 'Google TPU v5e', 'tpu-v5p': 'Google TPU v5p',
  'tpu-v6e': 'Google TPU v6e', 'tpu-v6p': 'Google TPU v6p',
  'tpu-8i': 'Google TPU 8i', 'tpu-8t': 'Google TPU 8t', 'tpu-ironwood': 'Google TPU Ironwood',
  'edge-tpu': 'Google Edge TPU',
  'trainium': 'AWS Trainium', 'trainium-2': 'AWS Trainium 2', 'trainium-3': 'AWS Trainium 3',
  'inferentia': 'AWS Inferentia', 'inferentia-2': 'AWS Inferentia 2',
  'biren-br104': '壁仞 BR104', 'cambricon-mlu-590': '寒武纪 MLU590',
  'cambricon-mlu-370': '寒武纪 MLU370', 'cambricon-mlu-690': '寒武纪 MLU690',
  'kunlun-m100': '百度昆仑 M100', 'kunlun-m300': '百度昆仑 M300', 'kunlun-p800': '百度昆仑 P800',
  'metax-c600': '沐曦 C600', 'hygon-dcu-k100': '海光 DCU K100',
  'moore-threads-mtt-s5000': '摩尔线程 MTT S5000',
  'enflame-t20': '燧原 T20', 'furiosaai-rngd': 'FuriosaAI RNGD',
  'qualcomm-ai-100': '高通 AI 100', 'qualcomm-ai200': '高通 AI200', 'qualcomm-ai250': '高通 AI250',
  'qualcomm-snapdragon-x-elite': '骁龙 X Elite',
  'alibaba-hanguang-800': '阿里含光 800', 'alibaba-ppu': '阿里 PPU',
  'apple-a17-pro': 'Apple A17 Pro', 'apple-a18': 'Apple A18', 'apple-a18-pro': 'Apple A18 Pro',
  'apple-a19': 'Apple A19', 'apple-a19-pro': 'Apple A19 Pro',
  'apple-m1-pro': 'Apple M1 Pro', 'apple-m1-max': 'Apple M1 Max',
  'apple-m1-ultra': 'Apple M1 Ultra', 'apple-m2-max': 'Apple M2 Max', 'apple-m2-ultra': 'Apple M2 Ultra',
  'apple-m3-max': 'Apple M3 Max', 'apple-m3-ultra': 'Apple M3 Ultra',
  'apple-m4-pro': 'Apple M4 Pro', 'apple-m4-max': 'Apple M4 Max', 'apple-m4-ultra': 'Apple M4 Ultra',
  'apple-m5-ultra': 'Apple M5 Ultra',
  'mediatek-dimensity-9400': '联发科天玑 9400',
  'graphcore-ipu': 'Graphcore IPU', 'wse-2': 'Cerebras WSE-2', 'wse-3': 'Cerebras WSE-3', 'wse-4': 'Cerebras WSE-4',
  'groq-lpu': 'Groq LPU', 'groq-lpu-v2': 'Groq LPU v2', 'groq-3-lpx': 'Groq 3 LPX',
  'etched-sohu': 'Etched Sohu', 'd-matrix-corsair': 'D-Matrix Corsair',
  'sambanova-sn40l': 'SambaNova SN40L', 'sn50': 'SambaNova SN50',
  'tenstorrent-grayskull': 'Tenstorrent Grayskull', 'tenstorrent-wormhole': 'Tenstorrent Wormhole',
  'tenstorrent-blackhole': 'Tenstorrent Blackhole',
  'tesla-dojo': 'Tesla Dojo D1', 'tesla-dojo-v2': 'Tesla Dojo v2',
  'maia-200': 'Microsoft Maia 200', 'mtia-v1': 'Meta MTIA v1', 'mtia-v2': 'Meta MTIA v2', 'mtia-v3': 'Meta MTIA v3',
  'hailo': 'Hailo-8', 'hailo-15': 'Hailo-15',
  'lightelligence': '光子智能 Lightelligence', 'lightmatter-envise': 'Lightmatter Envise',
  'lighton': 'LightOn', 'mobilint': 'Mobilint', 'akida-2': 'BrainChip Akida 2',
  'blaize-xplorer': 'Blaze Xplorer', 'rebellions-rbln': 'Rebellions RBLN',
  'ibm-northpole': 'IBM NorthPole', 'hbm-pim': 'SK海力士 HBM-PIM',
};
function zhName(id: string, fallback: string): string { return ZH_NAMES[id] || fallback.replace(/\([^)]*\)/g,'').trim(); }
function vendorLabel(v: string): string { return VENDOR_LABEL[v] || v; }

// ===== 数字滚动动画 Hook =====
function useCountUp(target: number, duration = 500): number {
  const [val, setVal] = useState(target);
  const fromRef = useRef(target);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  useEffect(() => {
    fromRef.current = val;
    startRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const p = Math.min(1, (ts - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = fromRef.current + (target - fromRef.current) * eased;
      setVal(cur);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target]);
  return val;
}

// ===== 带动画的金额组件 =====
function AnimatedMoney({ value }: { value: number }) {
  const v = useCountUp(value);
  return <span style={{fontVariantNumeric:'tabular-nums',fontFamily:'monospace'}}>{fmtFull(Math.round(v))}</span>;
}

// ===== 自定义下拉框（搜索+分组） =====
function ChipSelect({ chips, value, onChange }: { chips: Chip[]; value: string; onChange: (v: string) => void; }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    if (!ql) return chips;
    return chips.filter(c =>
      zhName(c.id, c.name).toLowerCase().includes(ql) ||
      c.id.toLowerCase().includes(ql) ||
      c.vendor.toLowerCase().includes(ql)
    );
  }, [chips, q]);

  const grouped = useMemo(() => {
    const g: Record<string, Chip[]> = {};
    filtered.forEach(c => { (g[c.vendor] = g[c.vendor] || []).push(c); });
    return g;
  }, [filtered]);

  const current = chips.find(c => c.id === value);

  return (
    <div ref={ref} style={{position:'relative'}}>
      <div onClick={() => setOpen(!open)} style={{
        width:'100%',padding:'8px 10px',border:'1.5px solid #e9ecef',borderRadius:8,fontSize:'0.92rem',
        cursor:'pointer',background:'#fff',display:'flex',justifyContent:'space-between',alignItems:'center',
        userSelect:'none',minHeight:38,
      }}>
        <span style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
          {current ? `${zhName(current.id, current.name)} — ${current.tdp}W` : '— 请选择芯片 —'}
        </span>
        <span style={{color:'#888',fontSize:'0.8rem',transform:open?'rotate(180deg)':'none',transition:'transform 0.2s'}}>▼</span>
      </div>
      {open && (
        <div style={{
          position:'absolute',top:'calc(100% + 4px)',left:0,right:0,
          background:'#fff',border:'1.5px solid #e9ecef',borderRadius:10,
          boxShadow:'0 8px 24px rgba(0,0,0,0.12)',zIndex:1000,maxHeight:380,overflow:'hidden',
          display:'flex',flexDirection:'column',
        }}>
          <div style={{padding:8,borderBottom:'1px solid #e9ecef'}}>
            <input
              autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="🔍 搜索芯片名称或厂商…"
              style={{width:'100%',padding:'6px 10px',border:'1px solid #e9ecef',borderRadius:6,fontSize:'0.85rem',boxSizing:'border-box'}}
            />
          </div>
          <div style={{overflowY:'auto',flex:1,padding:4}}>
            {Object.keys(grouped).length === 0 ? (
              <div style={{padding:20,textAlign:'center',color:'#888',fontSize:'0.85rem'}}>未找到匹配的芯片</div>
            ) : Object.keys(grouped).sort().map(v => (
              <div key={v}>
                <div style={{padding:'6px 8px 4px',fontSize:'0.75rem',fontWeight:700,color:'#888',textTransform:'uppercase',letterSpacing:'0.04em',background:'#f7f8fa',borderRadius:4,marginTop:2}}>
                  {vendorLabel(v)} ({grouped[v].length})
                </div>
                {grouped[v].map(c => (
                  <div key={c.id} onClick={() => { onChange(c.id); setOpen(false); setQ(''); }}
                    style={{
                      padding:'7px 10px',cursor:'pointer',borderRadius:6,fontSize:'0.88rem',
                      background: c.id === value ? 'rgba(53,120,229,0.1)' : 'transparent',
                      color: c.id === value ? '#3578e5' : '#333',
                      fontWeight: c.id === value ? 600 : 400,
                      display:'flex',justifyContent:'space-between',alignItems:'center',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = c.id === value ? 'rgba(53,120,229,0.12)' : '#f7f8fa')}
                    onMouseLeave={e => (e.currentTarget.style.background = c.id === value ? 'rgba(53,120,229,0.1)' : 'transparent')}
                  >
                    <span>{zhName(c.id, c.name)}</span>
                    <span style={{fontSize:'0.75rem',color:'#888',fontFamily:'monospace'}}>{c.tdp}W</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{padding:'6px 10px',borderTop:'1px solid #e9ecef',fontSize:'0.72rem',color:'#888',textAlign:'right'}}>
            共 {filtered.length} 款芯片
          </div>
        </div>
      )}
    </div>
  );
}

// ===== 饼图（带 hover） =====
function Pie({ data, hoverIdx, setHover }: { data: {label:string;value:number;color:string}[]; hoverIdx: number | null; setHover: (i: number | null) => void; }) {
  const total = data.reduce((s,d)=>s+d.value,0);
  if (!total) return <div style={{textAlign:'center',padding:40,color:'#888'}}>暂无数据</div>;
  let acc=0;
  const segs = data.map(d=>{const s=(acc/total)*360;acc+=d.value;const e=(acc/total)*360;return{...d,s,e};});
  const cx=80,cy=80,r=70;
  function pol(a:number){const rad=(a-90)*Math.PI/180;return`${cx+r*Math.cos(rad)},${cy+r*Math.sin(rad)}`;}
  const active = hoverIdx !== null ? segs[hoverIdx] : null;
  const displayTotal = active ? active.value : total;
  const displayLabel = active ? active.label : '总计';
  return (
    <div style={{display:'flex',alignItems:'center',gap:16}}>
      <svg viewBox="0 0 160 160" width={140} height={140} style={{flexShrink:0}}>
        {segs.map((d,i)=>{
          const large = d.e-d.s>180?1:0;
          const isHover = hoverIdx===i;
          return (
            <path key={i} d={`M${cx},${cy} L${pol(d.s)} A${r},${r} 0 ${large},1 ${pol(d.e)} Z`}
              fill={d.color} opacity={hoverIdx===null||isHover?1:0.35}
              onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
              style={{cursor:'pointer',transition:'opacity 0.2s',transform:isHover?'scale(1.04)':'scale(1)',transformOrigin:`${cx}px ${cy}px`}}
            />
          );
        })}
        <circle cx={cx} cy={cy} r={52} fill="#fff"/>
        <text x={cx} y={cy-4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#888">{displayLabel}</text>
        <text x={cx} y={cy+14} textAnchor="middle" fontSize="14" fontWeight="800" fill="#3578e5">{fmt(displayTotal)}</text>
      </svg>
      <div style={{flex:1,minWidth:0}}>
        {segs.map((d,i)=> (
          <div key={i}
            onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
            style={{display:'flex',alignItems:'center',gap:6,marginBottom:5,fontSize:'0.8rem',cursor:'pointer',padding:'2px 0',borderRadius:4,
              background: hoverIdx===i ? 'rgba(53,120,229,0.06)' : 'transparent'}}
          >
            <span style={{width:10,height:10,borderRadius:3,background:d.color,flexShrink:0}}/>
            <span style={{flex:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{d.label}</span>
            <span style={{fontFamily:'monospace',fontWeight:600}}>{fmt(d.value)}</span>
            <span style={{fontSize:'0.75rem',color:'#888',minWidth:36,textAlign:'right'}}>{((d.value/total)*100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== 柱状图（带 hover） =====
function Bars({ data, hoverYear, setHover }: { data: {year:number;procurement:number;electricity:number;dc:number;cooling:number}[]; hoverYear: number | null; setHover: (y: number | null) => void; }) {
  const max = Math.max(...data.map(d=>d.procurement+d.electricity+d.dc+d.cooling),1);
  const c = {procurement:'#3578e5',electricity:'#e94b4b',dc:'#f5a623',cooling:'#7ed321'};
  const hoverEntry = hoverYear!==null ? data.find(d=>d.year===hoverYear) : null;
  return (
    <div>
      {hoverEntry && (
        <div style={{textAlign:'center',padding:'4px 0',fontSize:'0.78rem',color:'#3578e5',fontWeight:600}}>
          第 {hoverEntry.year} 年 TCO: {fmt(hoverEntry.procurement+hoverEntry.electricity+hoverEntry.dc+hoverEntry.cooling)}
        </div>
      )}
      <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-around',height:130,gap:6,padding:'4px 0 0'}}>
        {data.map(d=>{
          const t=d.procurement+d.electricity+d.dc+d.cooling;
          const h=(t/max)*100;
          const p1=(d.procurement/t)*100,p2=(d.electricity/t)*100,p3=(d.dc/t)*100;
          const grad=`linear-gradient(to top,${c.procurement} ${p1}%,${c.electricity} ${p1}%,${c.electricity} ${p1+p2}%,${c.dc} ${p1+p2}%,${c.dc} ${p1+p2+p3}%,${c.cooling} ${p1+p2+p3}%)`;
          const isHover = hoverYear===d.year;
          return (
            <div key={d.year} style={{display:'flex',flexDirection:'column',alignItems:'center',flex:1,maxWidth:55}}
              onMouseEnter={()=>setHover(d.year)} onMouseLeave={()=>setHover(null)}
            >
              <div style={{fontSize:'0.62rem',fontWeight:600,color:isHover?'#3578e5':'#888',marginBottom:3}}>{fmt(t)}</div>
              <div style={{width:'100%',height:90,display:'flex',alignItems:'flex-end',justifyContent:'center',borderBottom:'2px solid #e9ecef'}}>
                <div style={{width:'70%',height:`${h}%`,minHeight:4,borderRadius:'4px 4px 0 0',background:grad,
                  opacity: hoverYear===null||isHover ? 1 : 0.4, transition:'opacity 0.2s', cursor:'pointer'}}/>
              </div>
              <div style={{fontSize:'0.72rem',fontWeight:isHover?700:600,color:isHover?'#3578e5':'#888',marginTop:4}}>{d.year}年</div>
            </div>
          );
        })}
      </div>
      <div style={{display:'flex',justifyContent:'center',gap:12,marginTop:10,flexWrap:'wrap',fontSize:'0.72rem',color:'#888'}}>
        <span style={{display:'flex',alignItems:'center',gap:3}}><span style={{width:8,height:8,borderRadius:2,background:c.procurement,display:'inline-block'}}/>采购</span>
        <span style={{display:'flex',alignItems:'center',gap:3}}><span style={{width:8,height:8,borderRadius:2,background:c.electricity,display:'inline-block'}}/>电费</span>
        <span style={{display:'flex',alignItems:'center',gap:3}}><span style={{width:8,height:8,borderRadius:2,background:c.dc,display:'inline-block'}}/>租金</span>
        <span style={{display:'flex',alignItems:'center',gap:3}}><span style={{width:8,height:8,borderRadius:2,background:c.cooling,display:'inline-block'}}/>冷却</span>
      </div>
    </div>
  );
}

// ===== 导出 CSV =====
function exportCSV(chip: Chip, qty: number, years: number, usage: number, price: number, dcCost: number, coolRate: number, costs: {proc:number;elec:number;dc:number;cool:number;tco:number}, compare: CompareItem[]) {
  const rows: string[][] = [];
  rows.push(['AI 算力卡 TCO 计算报告']);
  rows.push(['生成时间', new Date().toISOString()]);
  rows.push([]);
  rows.push(['【参数】']);
  rows.push(['芯片', zhName(chip.id, chip.name)]);
  rows.push(['TDP (W)', String(chip.tdp)]);
  rows.push(['数量', String(qty)]);
  rows.push(['使用率', `${(usage*100).toFixed(0)}%`]);
  rows.push(['电价 ($/kWh)', String(price)]);
  rows.push(['使用年限', String(years)]);
  rows.push(['单卡年租金 ($)', String(dcCost)]);
  rows.push(['冷却占比', `${(coolRate*100).toFixed(0)}%`]);
  rows.push([]);
  rows.push(['【成本明细】']);
  rows.push(['项目', '金额 ($)', '占比']);
  const t = costs.tco || 1;
  rows.push(['采购成本', String(Math.round(costs.proc)), `${(costs.proc/t*100).toFixed(1)}%`]);
  rows.push(['电费成本', String(Math.round(costs.elec)), `${(costs.elec/t*100).toFixed(1)}%`]);
  rows.push(['数据中心租金', String(Math.round(costs.dc)), `${(costs.dc/t*100).toFixed(1)}%`]);
  rows.push(['冷却成本', String(Math.round(costs.cool)), `${(costs.cool/t*100).toFixed(1)}%`]);
  rows.push(['TCO 总计', String(Math.round(costs.tco)), '100.0%']);
  rows.push(['年均 TCO', String(Math.round(costs.tco/years)), '']);
  rows.push(['每卡年均', String(Math.round(costs.tco/qty/years)), '']);
  rows.push([]);
  if (compare.length > 0) {
    rows.push(['【多芯片对比】']);
    rows.push(['芯片', '数量', 'TCO ($)', '采购 ($)', '电费 ($)', '租金 ($)', '冷却 ($)']);
    compare.forEach(c => {
      rows.push([zhName(c.chip.id, c.chip.name), String(c.quantity), String(Math.round(c.tco)),
        String(Math.round(c.procurement)), String(Math.round(c.electricity)),
        String(Math.round(c.dc)), String(Math.round(c.cooling))]);
    });
  }
  const csv = '\uFEFF' + rows.map(r => r.map(c => `"${(c||'').replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `TCO_${chip.id}_${qty}卡_${years}年_${new Date().toISOString().slice(0,10)}.csv`;
  a.click(); URL.revokeObjectURL(url);
}

export default function TcoCalculator() {
  const [chips,setChips]=useState<Chip[]>([]);
  const [pricing,setPricing]=useState<Record<string, PricingInfo>>({});
  const [chipId,setChipId]=useState('');
  const [qty,setQty]=useState(8);
  const [usage,setUsage]=useState(0.9);
  const [price,setPrice]=useState(0.10);
  const [years,setYears]=useState(3);
  const [dcCost,setDcCost]=useState(500);
  const [coolRate,setCoolRate]=useState(0.15);
  const [compare,setCompare]=useState<CompareItem[]>([]);
  const [pieHover,setPieHover]=useState<number | null>(null);
  const [barHover,setBarHover]=useState<number | null>(null);
  const [toast,setToast]=useState('');

  useEffect(()=>{
    fetch('/chips.json').then(r=>r.json()).then((d:any[])=>setChips(d.map(c=>({id:c.id,name:c.title||c.id,vendor:c.vendor||'unknown',tdp:parseTdp(c.specs?.tdp||'0')}))));
    fetch('/pricing.json').then(r=>r.json()).then((d:PricingData)=>setPricing(flatPricing(d)));
  },[]);

  const chip = chips.find(c=>c.id===chipId);
  const chipPrice = chip ? (pricing[chipId]?.market_price ?? pricing[chipId]?.official_msrp ?? 0) : 0;
  const tdpKW = chip ? chip.tdp/1000 : 0;
  const proc = chipPrice*qty;
  const elec = tdpKW*qty*usage*price*8760*years;
  const dc = dcCost*qty*years;
  const cool = elec*coolRate;
  const tco = proc+elec+dc+cool;
  const costs = {proc,elec,dc,cool,tco};

  const pieData = useMemo(()=>[{label:'采购',value:proc,color:COLORS[0]},{label:'电费',value:elec,color:COLORS[1]},{label:'租金',value:dc,color:COLORS[2]},{label:'冷却',value:cool,color:COLORS[3]}].filter(i=>i.value>0),[proc,elec,dc,cool]);
  const barData = useMemo(()=>[1,2,3,4,5].map(y=>{
    const yec=tdpKW*qty*usage*price*8760*y;
    return {year:y,procurement:chipPrice*qty,electricity:yec,dc:dcCost*qty*y,cooling:yec*coolRate};
  }),[tdpKW,qty,usage,price,dcCost,coolRate,chipPrice]);

  const addCompare = () => {
    if (!chip || !tco) return;
    setCompare(prev=>[...prev.filter(p=>p.chip.id!==chip.id),{chip,quantity:qty,tco,procurement:proc,electricity:elec,dc,cooling:cool}].slice(-4));
    setToast(`✓ 已将 ${zhName(chip.id, chip.name)} 加入对比`);
    setTimeout(() => setToast(''), 2000);
  };
  const removeCompare = (id: string) => {
    setCompare(p => p.filter(x => x.chip.id !== id));
  };
  const clearCompare = () => setCompare([]);

  const CARD = {background:'#fff',border:'1px solid #e9ecef',borderRadius:12,padding:20,marginBottom:16};
  const LABEL = {display:'block',fontSize:'0.82rem',fontWeight:600,color:'#606770',marginBottom:6};
  const INPUT = {width:'100%',padding:'8px 10px',border:'1.5px solid #e9ecef',borderRadius:8,fontSize:'0.92rem',boxSizing:'border-box' as const};

  return (
    <div style={{maxWidth:900,margin:'0 auto',fontFamily:'system-ui,-apple-system,sans-serif',position:'relative'}}>
      {/* Toast 通知 */}
      {toast && (
        <div style={{position:'fixed',top:80,right:24,background:'#3578e5',color:'#fff',padding:'10px 18px',borderRadius:8,fontSize:'0.9rem',fontWeight:600,boxShadow:'0 4px 12px rgba(0,0,0,0.15)',zIndex:9999,animation:'tcoSlideIn 0.3s ease'}}>
          {toast}
        </div>
      )}
      <style>{`@keyframes tcoSlideIn{from{transform:translateX(20px);opacity:0}to{transform:translateX(0);opacity:1}}`}</style>

      {/* Parameters */}
      <div style={CARD}>
        <div style={{fontSize:'1.05rem',fontWeight:700,marginBottom:16,display:'flex',alignItems:'center',gap:8}}>⚙️ 参数设置</div>

        <div style={{marginBottom:14}}>
          <label style={LABEL}>选择芯片 <span style={{fontSize:'0.72rem',color:'#888',fontWeight:400,marginLeft:8}}>支持搜索 · 按厂商分组</span></label>
          <ChipSelect chips={chips} value={chipId} onChange={setChipId} />
          {chip && chip.tdp > 50000 && (
            <div style={{marginTop:8,padding:'8px 12px',background:'#fff3cd',borderRadius:8,borderLeft:'3px solid #fa9500',fontSize:'0.85rem',display:'flex',gap:8,alignItems:'center'}}>
              <span style={{fontSize:'1.1rem'}}>⚠️</span>
              <span style={{color:'#7a4d00'}}>
                <strong>整机系统</strong>：此芯片 TDP 为 {fmtFull(chip.tdp)}，是整套机柜功耗而非单卡。TCO 计算结果不适用。
              </span>
            </div>
          )}
          {chip && (
            <div style={{marginTop:8,padding:'8px 12px',background:'rgba(53,120,229,0.06)',borderRadius:8,borderLeft:'3px solid #3578e5',fontSize:'0.85rem',display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
              {pricing[chipId] ? (
                <>
                  <span style={{fontWeight:700,color:'#3578e5'}}>
                    {pricing[chipId].market_price!=null ? fmtFull(pricing[chipId].market_price!) : pricing[chipId].official_msrp!=null ? fmtFull(pricing[chipId].official_msrp!) : '暂无定价'}
                  </span>
                  {pricing[chipId].market_price!=null && pricing[chipId].official_msrp!=null && (
                    <span style={{fontSize:'0.75rem',color:'#888',textDecoration:'line-through'}}>指导价 {fmtFull(pricing[chipId].official_msrp!)}</span>
                  )}
                  <span style={{marginLeft:'auto',fontSize:'0.7rem',color:'#888',background:'#e9ecef',padding:'2px 6px',borderRadius:4}}>{pricing[chipId].source}</span>
                </>
              ) : <span style={{color:'#888',fontStyle:'italic'}}>暂无定价信息</span>}
            </div>
          )}
        </div>

        <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:14}}>
          <div style={{flex:'1 1 45%',minWidth:220}}>
            <label style={LABEL}>数量（张）</label>
            <div style={{display:'flex',gap:6,alignItems:'center'}}>
              <button onClick={()=>setQty(Math.max(1,qty-1))} style={{width:32,height:32,border:'1.5px solid #e9ecef',borderRadius:8,background:'#fff',fontSize:'1.1rem',fontWeight:700,cursor:'pointer'}}>−</button>
              <input type="number" style={{...INPUT,textAlign:'center',flex:1}} min={1} value={qty} onChange={e=>setQty(Math.max(1,Number(e.target.value)))}/>
              <button onClick={()=>setQty(qty+1)} style={{width:32,height:32,border:'1.5px solid #e9ecef',borderRadius:8,background:'#fff',fontSize:'1.1rem',fontWeight:700,cursor:'pointer'}}>+</button>
            </div>
            <div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>
              {[1,8,64,256].map(v=>(<button key={v} onClick={()=>setQty(v)} style={{padding:'4px 10px',border:`1px solid ${qty===v?'#3578e5':'#e9ecef'}`,borderRadius:6,background:qty===v?'#3578e5':'#fff',color:qty===v?'#fff':'#888',fontSize:'0.75rem',fontWeight:500,cursor:'pointer'}}>{v===1?'单卡':v+'卡'}</button>))}
            </div>
          </div>
          <div style={{flex:'1 1 45%',minWidth:220}}>
            <label style={LABEL}>数据中心使用率 <span style={{float:'right',color:'#3578e5',fontWeight:700}}>{(usage*100).toFixed(0)}%</span></label>
            <input type="range" style={{width:'100%',marginTop:4}} min={0.1} max={1} step={0.05} value={usage} onChange={e=>setUsage(Number(e.target.value))}/>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.7rem',color:'#888',marginTop:2}}><span>10%</span><span>50%</span><span>100%</span></div>
          </div>
        </div>

        <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:14}}>
          <div style={{flex:'1 1 45%',minWidth:220}}>
            <label style={LABEL}>电价（$/kWh）</label>
            <input type="number" style={INPUT} min={0.01} max={1} step={0.01} value={price} onChange={e=>setPrice(Number(e.target.value))}/>
            <div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>
              {[{l:'中国 $0.08',v:0.08},{l:'美国 $0.12',v:0.12},{l:'欧洲 $0.20',v:0.20},{l:'中东 $0.04',v:0.04}].map(p=>(
                <button key={p.l} onClick={()=>setPrice(p.v)} style={{padding:'4px 10px',border:`1px solid ${Math.abs(price-p.v)<0.001?'#3578e5':'#e9ecef'}`,borderRadius:6,background:Math.abs(price-p.v)<0.001?'#3578e5':'#fff',color:Math.abs(price-p.v)<0.001?'#fff':'#888',fontSize:'0.75rem',fontWeight:500,cursor:'pointer'}}>{p.l}</button>
              ))}
            </div>
          </div>
          <div style={{flex:'1 1 45%',minWidth:220}}>
            <label style={LABEL}>使用年限（年）<span style={{float:'right',color:'#3578e5',fontWeight:700}}>{years} 年</span></label>
            <input type="range" style={{width:'100%',marginTop:4}} min={1} max={5} step={1} value={years} onChange={e=>setYears(Number(e.target.value))}/>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.7rem',color:'#888',marginTop:2}}><span>1年</span><span>3年</span><span>5年</span></div>
          </div>
        </div>

        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <div style={{flex:'1 1 45%',minWidth:220}}>
            <label style={LABEL}>单卡年租金（$/年）</label>
            <input type="number" style={INPUT} min={0} max={5000} step={50} value={dcCost} onChange={e=>setDcCost(Number(e.target.value))}/>
            <small style={{fontSize:'0.75rem',color:'#888'}}>包含机柜、网络、维护等</small>
          </div>
          <div style={{flex:'1 1 45%',minWidth:220}}>
            <label style={LABEL}>冷却成本占比 <span style={{float:'right',color:'#3578e5',fontWeight:700}}>{(coolRate*100).toFixed(0)}%</span></label>
            <input type="range" style={{width:'100%',marginTop:4}} min={0.05} max={0.50} step={0.05} value={coolRate} onChange={e=>setCoolRate(Number(e.target.value))}/>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.7rem',color:'#888',marginTop:2}}><span>5%</span><span>25%</span><span>50%</span></div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div style={CARD}>
        <div style={{fontSize:'1.05rem',fontWeight:700,marginBottom:16,display:'flex',alignItems:'center',gap:8,flexWrap:'wrap'}}>
          📊 TCO 计算结果
          {chip && <span style={{marginLeft:'auto',fontSize:'0.8rem',fontWeight:400,color:'#888'}}>{zhName(chip.id, chip.name)} × {qty}，{years} 年</span>}
        </div>

        {!chip ? (
          <div style={{textAlign:'center',padding:'40px 16px',color:'#888'}}>
            <div style={{fontSize:'2.5rem',marginBottom:12}}>🖥️</div>
            <p style={{fontWeight:700,margin:'0 0 4px',color:'#333'}}>请在上方选择一款芯片开始计算</p>
            <small>支持 {chips.length} 款 AI 算力卡</small>
          </div>
        ) : tco===0 ? (
          <div style={{textAlign:'center',padding:'40px 16px',color:'#888'}}>
            <div style={{fontSize:'2.5rem',marginBottom:12}}>💰</div>
            <p style={{fontWeight:700,margin:'0 0 4px',color:'#333'}}>该芯片暂无定价信息</p>
            <small>您可以手动估算价格进行计算</small>
          </div>
        ) : (
          <>
            <div style={{textAlign:'center',padding:'20px 16px',background:'linear-gradient(135deg,rgba(53,120,229,0.06) 0%,rgba(53,120,229,0.02) 100%)',borderRadius:10,marginBottom:16,border:'1px solid rgba(53,120,229,0.1)'}}>
              <div style={{fontSize:'0.78rem',fontWeight:600,color:'#888',textTransform:'uppercase',letterSpacing:'0.04em',marginBottom:4}}>{years} 年 TCO 总计</div>
              <div style={{fontSize:'2.2rem',fontWeight:800,color:'#3578e5',lineHeight:1.2}}>
                <AnimatedMoney value={tco} big />
              </div>
              <div style={{fontSize:'0.78rem',color:'#888',marginTop:4}}>
                年均 <AnimatedMoney value={tco/years} /> · 每卡年均 <AnimatedMoney value={tco/qty/years} />
              </div>
            </div>

            {[{name:'采购成本',value:proc,color:COLORS[0]},{name:'电费成本',value:elec,color:COLORS[1]},{name:'数据中心租金',value:dc,color:COLORS[2]},{name:'冷却成本',value:cool,color:COLORS[3]}].map(item=>{
              const pct=tco>0?(item.value/tco)*100:0;
              return (
                <div key={item.name} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 12px',borderRadius:8,marginBottom:6,background:'#fff',border:'1px solid #e9ecef',position:'relative',overflow:'hidden'}}>
                  <div style={{position:'absolute',bottom:0,left:0,height:3,width:`${pct}%`,background:item.color,opacity:0.5}}/>
                  <span style={{width:10,height:10,borderRadius:'50%',background:item.color,flexShrink:0}}/>
                  <span style={{fontSize:'0.88rem',fontWeight:500,flex:1,color:'#333'}}>{item.name}</span>
                  <span style={{fontWeight:700,fontSize:'0.9rem',color:'#333'}}><AnimatedMoney value={item.value} /></span>
                  <span style={{fontSize:'0.78rem',color:'#888',minWidth:42,textAlign:'right'}}>{pct.toFixed(1)}%</span>
                </div>
              );
            })}

            <div style={{display:'flex',gap:16,flexWrap:'wrap',marginTop:16}}>
              <div style={{flex:'1 1 45%',minWidth:260,background:'#fff',border:'1px solid #e9ecef',borderRadius:10,padding:14}}>
                <div style={{fontSize:'0.82rem',fontWeight:700,textAlign:'center',marginBottom:12,color:'#888'}}>成本构成 <span style={{fontSize:'0.7rem',fontWeight:400}}>(hover 查看)</span></div>
                <Pie data={pieData} hoverIdx={pieHover} setHover={setPieHover} />
              </div>
              <div style={{flex:'1 1 45%',minWidth:260,background:'#fff',border:'1px solid #e9ecef',borderRadius:10,padding:14}}>
                <div style={{fontSize:'0.82rem',fontWeight:700,textAlign:'center',marginBottom:12,color:'#888'}}>TCO 随年限变化 <span style={{fontSize:'0.7rem',fontWeight:400}}>(hover 查看)</span></div>
                <Bars data={barData} hoverYear={barHover} setHover={setBarHover} />
              </div>
            </div>

            <div style={{background:'rgba(53,120,229,0.04)',border:'1px solid rgba(53,120,229,0.1)',borderRadius:10,padding:'12px 16px',marginTop:16}}>
              <div style={{fontSize:'0.9rem',fontWeight:700,marginBottom:8,color:'#333'}}>💡 关键洞察</div>
              <div style={{padding:'5px 0',fontSize:'0.84rem',color:'#333',borderBottom:'1px solid #e9ecef'}}>
                <strong>采购 vs 电费：</strong>
                {proc>elec ? <span style={{color:'#00a400',fontWeight:600}}>采购成本占主导，关注性能性价比</span> : <span style={{color:'#fa383e',fontWeight:600}}>电费超过采购成本！建议选择能效更高的芯片</span>}
              </div>
              <div style={{padding:'5px 0',fontSize:'0.84rem',color:'#333',borderBottom:'1px solid #e9ecef'}}>
                <strong>每瓦 TCO：</strong> {chip.tdp>0 ? <><AnimatedMoney value={tco/qty/chip.tdp} /> / W</> : '—'}
              </div>
              <div style={{padding:'5px 0',fontSize:'0.84rem',color:'#333'}}>
                <strong>电费年增长率：</strong> {tdpKW>0 ? <><AnimatedMoney value={tdpKW*qty*usage*price*8760} /> / 年</> : '—'}
              </div>
            </div>

            <div style={{display:'flex',gap:8,marginTop:12}}>
              <button onClick={addCompare} disabled={!chip||!tco} style={{flex:2,padding:'10px',border:'2px dashed #e9ecef',borderRadius:10,background:'transparent',color:'#3578e5',fontSize:'0.9rem',fontWeight:700,cursor:'pointer'}}>➕ 加入对比</button>
              <button onClick={() => chip && exportCSV(chip, qty, years, usage, price, dcCost, coolRate, costs, compare)} disabled={!chip||!tco} style={{flex:1,padding:'10px',border:'1.5px solid #e9ecef',borderRadius:10,background:'#fff',color:'#3578e5',fontSize:'0.85rem',fontWeight:600,cursor:'pointer'}} title="导出当前计算结果为 CSV">📥 导出 CSV</button>
            </div>
          </>
        )}
      </div>

      {/* Compare */}
      {compare.length>0 && (
        <div style={{marginTop:24}}>
          <div style={{fontSize:'1.05rem',fontWeight:700,marginBottom:12,display:'flex',alignItems:'center',gap:8,flexWrap:'wrap'}}>
            📊 多芯片 TCO 对比
            <span style={{fontSize:'0.75rem',fontWeight:400,color:'#888'}}>(最多 4 款)</span>
            <button onClick={clearCompare} style={{marginLeft:'auto',padding:'4px 12px',border:'1px solid #e9ecef',borderRadius:6,background:'#fff',color:'#888',fontSize:'0.75rem',cursor:'pointer'}}>清空全部</button>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:12}}>
            {compare.map(entry=> (
              <div key={entry.chip.id} style={{position:'relative',background:'#fff',border:'1px solid #e9ecef',borderRadius:12,padding:16,transition:'transform 0.2s'}}
                onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
              >
                <button onClick={()=>removeCompare(entry.chip.id)} title="删除此对比项" style={{position:'absolute',top:8,right:8,width:24,height:24,border:'none',background:'#fce8e6',color:'#fa383e',borderRadius:'50%',fontSize:'1rem',fontWeight:700,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',lineHeight:1}}>×</button>
                <div style={{fontSize:'0.92rem',fontWeight:700,color:'#333',marginBottom:2,paddingRight:24}}>{zhName(entry.chip.id, entry.chip.name)}</div>
                <div style={{fontSize:'0.78rem',color:'#888',marginBottom:6}}>× {entry.quantity}</div>
                <div style={{fontSize:'1.4rem',fontWeight:800,color:'#3578e5',marginBottom:6}}>{fmtFull(entry.tco)}</div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:3}}>
                  <span style={{fontSize:'0.72rem',color:'#888'}}>采购 {fmt(entry.procurement)}</span>
                  <span style={{fontSize:'0.72rem',color:'#888'}}>电费 {fmt(entry.electricity)}</span>
                  <span style={{fontSize:'0.72rem',color:'#888'}}>租金 {fmt(entry.dc)}</span>
                  <span style={{fontSize:'0.72rem',color:'#888'}}>冷却 {fmt(entry.cooling)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
