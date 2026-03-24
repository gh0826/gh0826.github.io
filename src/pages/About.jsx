export default function About() {
  return (
    <div className="space-y-24">
      {/* Personal Hero Card */}
      <section className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <div className="pebble-shape bg-energy opacity-20 absolute inset-0 rotate-6" />
          <div className="pebble-shape w-full h-full overflow-hidden moss-shadow border border-border/10 bg-surface-container-highest">
            <img
              alt="个人头像占位"
              className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkPkUDjgVJzQoHh_smiUiJTy0arr8jSF43_qhQZbG-DYqWQDSMQdEcG1xE4-85FZzyETpmuXT-vcQgyLC9RHNoncSVnnEvo4hK8fppkUDr8Hwd4v5H71woROBd6AZhfNrSvUYXfiCUqKEtTR-za62vJhbEGT-Huadjg1nE241kmKtLbjo-sGqJuzeUoxFfiultNaay92fiSkx0-x-nyuggCBePwi4EQ7CExrsnhxezll0TwwPTC3vfb7X5ie6MNCWMjWF_jRVxwHU"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-6xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface leading-none">
            能源产品的
            <span className="italic text-energy">工匠</span>。
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-body leading-relaxed max-w-2xl">
            我把电力/新能源/储能的复杂逻辑，翻译成团队能执行的产品能力：指标体系、数据闭环、可控的风险与可靠的上线节奏。
            让产品既“能用”，也“经得起运行”。
          </p>

          <div className="flex flex-wrap gap-3">
            {['电网/调度产品', '储能调度', '数据可用性', '可持续指标'].map((t, idx) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full bg-surface-container-high border border-border/20 text-sm font-label uppercase tracking-widest"
                style={{ opacity: idx === 0 ? 1 : 0.92 }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline + Sticky Title */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 sticky top-32">
          <h2 className="text-4xl font-headline font-semibold text-energy mb-4 italic">
            能源产品路径
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            按时间记录我的职业演进：从工程理解到产品化表达，再到指标化交付。
          </p>
        </div>

        <div className="lg:col-span-8 space-y-16 border-l border-border/20 pl-8 ml-4 lg:ml-0 relative">
          <div className="relative">
            <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-energy ring-8 ring-background" />
            <div className="space-y-3">
              <span className="text-sm font-label tracking-widest text-secondary uppercase">
                2022 — 至今
              </span>
              <h3 className="text-2xl font-headline font-bold">能源数字化产品负责人</h3>
              <p className="text-on-surface-variant max-w-xl">
                负责并网与储能相关产品：将业务目标拆成指标与里程碑，建立数据可用性与上线风险控制机制。
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-start gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-energy text-lg">bolt</span>
                  <span>推动关键流程上线：上线周期缩短约 30%（示例数据）。</span>
                </li>
                <li className="flex items-start gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-energy text-lg">auto_awesome</span>
                  <span>建立指标闭环：将人工对账工时减少约 60%（示例数据）。</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-outline-variant/40 ring-8 ring-background" />
            <div className="space-y-3">
              <span className="text-sm font-label tracking-widest text-secondary uppercase">
                2019 — 2022
              </span>
              <h3 className="text-2xl font-headline font-bold">新能源平台架构师</h3>
              <p className="text-on-surface-variant max-w-xl">
                参与实时数据链路与业务中台：将告警与仿真结果对齐，提升数据可信度与可解释性。
              </p>
              <ul className="space-y-2 pt-2">
                <li className="flex items-start gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-energy text-lg">bolt</span>
                  <span>将告警误报率降低约 40%（示例数据）。</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-outline-variant/40 ring-8 ring-background" />
            <div className="space-y-3">
              <span className="text-sm font-label tracking-widest text-secondary uppercase">
                2016 — 2019
              </span>
              <h3 className="text-2xl font-headline font-bold">电力数据工程师</h3>
              <p className="text-on-surface-variant max-w-xl">
                建立时序指标库与数据质量规则：让产品能够“看见”运行状态并做出可控决策。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Bento Grid */}
      <section className="space-y-10">
        <div className="flex items-center gap-6">
          <h2 className="text-4xl font-headline font-semibold whitespace-nowrap">能力工坊</h2>
          <div className="h-[1px] w-full bg-border/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-surface-container-low p-8 rounded-3xl border border-border/10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-energy" aria-hidden>
                bolt
              </span>
              <h3 className="text-xl font-headline font-bold uppercase tracking-wide">能源领域</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: '并网/调度产品', value: 90 },
                { label: '储能与新能源业务', value: 85 },
                { label: '可持续与碳核算', value: 75 },
              ].map((row) => (
                <div key={row.label} className="space-y-2">
                  <div className="flex justify-between text-xs font-label uppercase tracking-tighter">
                    <span>{row.label}</span>
                    <span className="text-energy">{row.value}%</span>
                  </div>
                  <div className="h-1 bg-border/20 rounded-full overflow-hidden">
                    <div className="h-full bg-energy" style={{ width: `${row.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UI/UX */}
          <div className="bg-surface-container-high p-8 pebble-shape-alt rounded-3xl border border-border/10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" aria-hidden>
                insights
              </span>
              <h3 className="text-xl font-headline font-bold uppercase tracking-wide">产品与增长</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['产品路线图', '用户研究', '运营指标', '商业化节奏', 'A/B 验证'].map((t) => (
                <span
                  key={t}
                  className="bg-surface-container-lowest px-3 py-1 rounded-full text-sm border border-border/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Tooling */}
          <div className="bg-surface-container-highest p-8 rounded-3xl border border-border/10 space-y-6 moss-shadow">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-energy" aria-hidden>
                data_usage
              </span>
              <h3 className="text-xl font-headline font-bold uppercase tracking-wide">平台与数据</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['实时指标平台', '时序数据与告警', 'API/集成', '权限与审计'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm opacity-60" aria-hidden>
                    check_circle
                  </span>
                  <span className="text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-2xl font-headline font-medium italic opacity-60">下班后的能量补给</h2>
        <div className="flex justify-center gap-4">
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 pebble-shape bg-surface-container-low flex items-center justify-center border border-border/10 group-hover:bg-energy/10 transition-colors">
              <span className="material-symbols-outlined text-energy" aria-hidden>
                bolt
              </span>
            </div>
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
              观测与调试
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 pebble-shape-alt bg-surface-container-low flex items-center justify-center border border-border/10 group-hover:bg-secondary/10 transition-colors">
              <span className="material-symbols-outlined text-secondary" aria-hidden>
                psychology
              </span>
            </div>
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
              产品直觉
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 pebble-shape bg-surface-container-low flex items-center justify-center border border-border/10 group-hover:bg-energy/10 transition-colors">
              <span className="material-symbols-outlined text-energy" aria-hidden>
                nature
              </span>
            </div>
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
              慢生活与复盘
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

