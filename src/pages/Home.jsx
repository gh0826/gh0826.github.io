import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="font-label text-xs md:text-sm tracking-[0.12em] text-on-surface-variant">
              宇动源信息技术股份有限公司
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.05] tracking-tight">
              <span className="block">高航</span>
              <span className="mt-3 block text-2xl md:text-4xl font-body font-bold text-energy not-italic leading-snug">
                能源产品专家 · 策略与交付
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-md leading-relaxed">
              把复杂的电力/储能/新能源业务拆解成可落地的产品：从并网逻辑、调度指标到数据可用性，
              让团队更快达成“上线即可靠”。
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/portfolio"
              className="bg-energy text-white px-8 py-4 rounded-full font-bold shadow-[0_10px_30px_-5px_rgba(37,99,235,0.20)]"
            >
              项目案例
            </Link>
            <Link
              to="/contact"
              className="border-2 border-energy text-energy px-8 py-4 rounded-full font-bold"
            >
              关于我
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-energy/30 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-secondary/30 rounded-full blur-3xl opacity-60" />

          <div className="relative pebble-shape overflow-hidden bg-surface-container-high border border-border/10 aspect-[4/5] moss-shadow">
            <div className="tech-scanline" aria-hidden />
            <img
              className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
              alt="个人照片"
              src="/person.jpg"
            />
          </div>
        </div>
      </section>

      {/* Tech metrics */}
      <section className="grid md:grid-cols-3 gap-6">
        <div
          className="bg-surface-container-low p-6 rounded-3xl border border-border/10 home-tech-reveal"
          style={{ animationDelay: '40ms' }}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
              并网可靠性
            </span>
            <span className="font-headline text-2xl font-extrabold text-energy">99.95%</span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-border/20 overflow-hidden">
            <div className="h-full tech-meter-fill" style={{ width: '95%' }} />
          </div>
        </div>

        <div
          className="bg-surface-container-low p-6 rounded-3xl border border-border/10 home-tech-reveal"
          style={{ animationDelay: '120ms' }}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
              误差可解释度
            </span>
            <span className="font-headline text-2xl font-extrabold text-energy">0.7%</span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-border/20 overflow-hidden">
            <div className="h-full tech-meter-fill" style={{ width: '70%' }} />
          </div>
        </div>

        <div
          className="bg-surface-container-low p-6 rounded-3xl border border-border/10 home-tech-reveal"
          style={{ animationDelay: '200ms' }}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
              上线周期
            </span>
            <span className="font-headline text-2xl font-extrabold text-energy">-32%</span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-border/20 overflow-hidden">
            <div className="h-full tech-meter-fill" style={{ width: '68%' }} />
          </div>
        </div>
      </section>

      {/* Quick actions */}
      <section className="flex flex-wrap justify-center gap-6">
        <Link
          className="flex items-center gap-3 bg-surface-container-low px-6 py-3 rounded-full border border-border/20"
          to="/portfolio"
        >
          <span className="material-symbols-outlined text-energy">folder_open</span>
          <span className="font-bold">案例研究</span>
        </Link>
        <Link
          className="flex items-center gap-3 bg-surface-container-low px-6 py-3 rounded-full border border-border/20"
          to="/blog"
        >
          <span className="material-symbols-outlined text-energy">edit_note</span>
          <span className="font-bold">技术札记</span>
        </Link>
        <a
          className="flex items-center gap-3 bg-surface-container-low px-6 py-3 rounded-full border border-border/20"
          href="#"
        >
          <span className="material-symbols-outlined text-energy">description</span>
          <span className="font-bold">简历（PDF）</span>
        </a>
      </section>

      {/* Highlights */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-headline font-semibold">产品支柱</h2>
          <div className="h-1 w-20 bg-energy/20 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-12 gap-6 h-full">
          {/* About */}
          <div className="md:col-span-7 bg-surface-container-low p-10 rounded-3xl flex flex-col justify-between border border-border/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-9xl">fingerprint</span>
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-energy font-label text-xs uppercase tracking-widest">方法论</span>
              <h3 className="text-4xl font-headline font-bold">关于我</h3>
              <p className="text-on-surface-variant max-w-lg leading-relaxed">
                我专注“能源业务 + 产品能力”的交汇点：用清晰的指标体系、可靠的数据闭环与可执行的路线图，
                帮助团队把工程能力转化为业务价值。
              </p>
            </div>
            <Link
              className="mt-8 text-energy font-bold flex items-center gap-2"
              to="/about"
            >
              阅读完整故事
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Experience & skills */}
          <div className="md:col-span-5 bg-surface-container-highest p-10 rounded-3xl flex flex-col gap-6 border border-border/10">
            <h3 className="text-2xl font-headline font-bold">能力概览</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-energy-soft flex items-center justify-center text-energy">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div>
                  <p className="font-bold text-sm">能源产品路线图</p>
                  <p className="text-xs text-on-surface-variant">从需求到交付的可执行路径</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">forest</span>
                </div>
                <div>
                  <p className="font-bold text-sm">可持续指标体系</p>
                  <p className="text-xs text-on-surface-variant">把 ESG 语言翻译成产品度量</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-surface-dim/20 flex items-center justify-center text-energy">
                  <span className="material-symbols-outlined">dataset</span>
                </div>
                <div>
                  <p className="font-bold text-sm">数据可用性与闭环</p>
                  <p className="text-xs text-on-surface-variant">把指标接到真实的业务决策</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects & writing */}
          <div className="md:col-span-12 bg-surface-dim/25 p-10 rounded-3xl border border-border/10 relative overflow-hidden min-h-[300px] flex items-end">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/30 via-transparent to-transparent z-10" />
              <img
                className="w-full h-full object-cover opacity-30 grayscale"
                alt="项目与写作背景图占位"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8kaXKY9JlVAEX8DNuGuryK8a2DK-ZTIO-MHdDUZCvomlx-mg4EmpK66L2XbFR8EAMB_ThDdAU474yk4ArV8Mco8pucVTrNZ0YJ4Xn5511ETorzfvRpkfEeYoT7tPfTueAqxEuJ3AHOXapA75I50c-3PrWvYH6BguqIObcRd9oeSV5Gojfyk1DppDgnCW8sjLj2mqh2F8vD15K1fhUR0LjyqPZZh6Xzz-gZzMwZqXpsZhwgLNK7ZfdIJol0bKuhW9o_RAq-Lw-vMQ"
              />
            </div>
            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="space-y-2">
                <h3 className="text-4xl font-headline font-bold">能源产品与写作</h3>
                <p className="text-on-surface-variant max-w-xl">
                  把并网逻辑、调度指标与用户体验写成可复用的产品方法；以及一些我在实践中学到的“可靠细节”。
                </p>
              </div>
              <Link
                className="bg-surface text-on-surface px-8 py-4 rounded-full font-bold whitespace-nowrap"
                to="/portfolio"
              >
                浏览档案
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

