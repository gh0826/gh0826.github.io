import { Link } from 'react-router-dom';

const FILTERS = [
  { key: 'all', label: '全部' },
  { key: 'grid', label: '电网产品' },
  { key: 'storage', label: '储能/新能源' },
  { key: 'writing', label: '方法论/写作' },
];

const PROJECTS = [
  {
    role: '电网产品负责人',
    title: '并网与调度指标平台',
    outcome: '示例：告警误报率降低 40%，上线周期缩短 30%',
    tags: ['并网逻辑', '调度指标', '实时数据'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcZdf7zaXxBcFkkX70oRxo83G_KEh3rTktteEuDLo1LEVWhbzVa2Km7aUrtTG5a_-3lF4Im06-92DFmh67TC658Bz-a3WmC_DabOSgOrZTwIV4F5xzgPOiuIVT6oC3hqYMLHw0qbEzGHljbaTs4hxS4U6LRgyyh2azBCxuoYEZBDkw-V_odpCWJUb2A9b4_aYj0C4TAv4wuwf_UiT4_d5lak_oNO755h2dY-tXjrfaOG6fByBaZuMrEzmy0UWKX8E5r7vEDEmUnmA',
  },
  {
    role: '产品与交付负责人',
    title: '储能调度与仿真协同',
    outcome: '示例：关键决策链路可追溯，人工对账减少 60%',
    tags: ['储能策略', '仿真对齐', '数据闭环'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD15U1AvrmfaNI1dYBkQjHIv3jJe0iCWGPe2WD_yfz_HHVHi4lShddy3hrsmjM_NeKYc-7vq3aTPU2Aw4Bjl6DGzC6Kk26l4TfB5Ryoi8AvNa0dYV48OJhknTo0nUtLS9GjbG2XSNaKqZiv96K4Ao3SGL0UExh3cjwx8bIWLv1ohRmBTkI8e7IFihAxfCNnduTLqHUOc0Uey5OR1taFKUm6K4HmHQoa7mez0fCjACQsHxdMEQYXtVOVzBvc74KruUzfOiUFLNMErzY',
  },
  {
    role: '体验与产品策略',
    title: '能源运营面板（Ops）',
    outcome: '示例：操作步骤减少 25%，培训成本下降 18%',
    tags: ['运营场景', '可解释指标', '交互效率'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDuR_fR0KwaehTCDH-9Hm057FpwOxJUnSAzTgv59H46mz4KwEjvKH_Vb_KByZwn314YRDVz1nj9E3RlPPzskYdLw6PcuQI7qTs-KDpJCPVvUi6ycwvd6O4JyrJ941Q3-5PBivS0pQBFAU3qDrrtfIXl-f1vrjEj8UZsGTm3FB9y50qtpyszgr81DbzbSZzd9EFEN6WMJeUsAHjmbIUlka5upolb8bpuxA9erlCmDAM2Y6ch37bIRvxeZ9hqJlDKTqhHAsMq-rizdco',
  },
  {
    role: '可持续产品负责人',
    title: 'ESG 与碳核算产品化',
    outcome: '示例：将核算流程自动化，人工复核降低 55%',
    tags: ['碳核算', '合规输出', '数据治理'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBf51JNMBIFv0JgcJRZQyQAP_hx2j0m5GQ4j5zBbC3y9pzupTsa2dXkQ2bXnUJ_cFMq_h3DJBnHJhC6vWBcjUZ18f9fz4AAEf96sS-2dSm5FSGAhdWba6QY9QX4Y7JExt8LIgNAnTmTDchtm9S-t36h_3KNhAdAv8oY6JRFxU4JSDZPb6MZGa3FoOz7JYlJQOkwvWg2flAhdE_1FxecGbkmbLOQxapsynoZnoapasScx1OS_lsXwirgWWvvdvyIOx4L2HKsQPMrbBk',
  },
  {
    role: '数据产品负责人',
    title: '能源时序指标系统',
    outcome: '示例：统一口径后，跨部门指标一致性提升到 99%（示例）',
    tags: ['指标口径', '时序治理', '质量监控'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABrTv-C7JVdHvjQMpDW5qzc_-QqBZ6KQcYFCqcT0bMkQBqqfz-wMJPr9aQSj2-TSB0m2mysmGaSlRFBliSSZAY6qkhGolAMvBWhwBcigSXmJrwi7Yx576__W51qLxW0L7UdhbBIq8_Hu0wuewaZZDWCWcPGV_gwodJYkYXWF_Hy01AyQvCy8GQNYz_1tty1dlBkkWFi6GBFijNY89flqDrRf-zkHCH5JOOc61RUtgEXLeIm8yjv3PUZO0pxhmUZ4v2vX27tkknRAY',
  },
  {
    role: '方法论作者',
    title: '从需求到上线的可靠路径',
    outcome: '示例：把交付流程固化为可复用模板，减少返工与沟通成本',
    tags: ['产品方法论', '交付节奏', '风险控制'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCln_m8qNMgLvURv3-rqA-1Tp8ahtMXNNEx3hOyOQ_seV4UOBAeF9zRbE-C7LrMNaf2epQVvSFu6oGr-7Lmh2m21vQf9adKkvp8H1jedeuX_nhNTBOsbOlj4GDcYHL4BwQmeE4fngq7fBqO4i0wRZYBXEURP86XTUYekValjaUucoWx2hJBRlB4YmxCn5le1UODN_zuFZ_Rymr5QTpe4g-ETBdn9Yqe3Fz_f6ZNuBAIwurv_ZrESgaCHx8tTNiphqVSNX1qgLNkQYY',
  },
];

export default function Portfolio() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="mb-4 text-center md:text-left">
        <h1 className="font-headline text-6xl md:text-8xl font-extrabold text-energy mb-6 tracking-tight">
          能源案例
        </h1>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed opacity-85">
          我把能源业务的复杂性，转译成产品与数据能力：每个案例都围绕可靠性、可解释指标与可执行交付节奏。
        </p>
      </section>

      {/* Filters (visual only) */}
      <nav aria-label="项目筛选" className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`px-8 py-3 rounded-full font-label text-sm tracking-widest uppercase transition-transform hover:scale-[1.03] shadow-none ${
              f.key === 'all'
                ? 'bg-energy text-white'
                : 'bg-surface-container-high text-energy border border-border/10 hover:text-white hover:bg-energy/10'
            }`}
          >
            {f.label}
          </button>
        ))}
      </nav>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {PROJECTS.map((p, idx) => (
          <article
            key={p.title}
            className={`group relative flex flex-col ${
              idx % 2 === 0 ? 'bg-surface-container-low' : 'bg-surface-container-high'
            } p-8 pebble-shape moss-shadow border border-border/10 hover:scale-[1.02] transition-transform duration-500`}
          >
            <div
              className={`aspect-[4/3] mb-8 overflow-hidden pebble-shape-alt bg-surface-container-high ${
                idx % 2 === 0 ? '' : ''
              }`}
            >
              <img
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                alt={`项目缩略图：${p.title}`}
                src={p.image}
              />
            </div>

            <div className="flex-grow">
              <span className="font-label text-xs tracking-[0.2em] uppercase text-energy mb-3 block">
                {p.role}
              </span>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-4">{p.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                {p.outcome}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-surface-bright text-on-surface-variant text-xs font-medium rounded-full border border-border/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-label text-sm font-bold text-energy group-hover:text-energy-2 transition-colors uppercase tracking-widest mt-auto"
            >
              查看详情
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

