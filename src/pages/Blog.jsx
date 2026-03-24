const ARTICLES = [
  {
    title: '把可靠性写进产品：能源场景的指标闭环',
    category: '数据与可靠',
    date: 'Oct 24, 2023',
    excerpt:
      '在并网与调度中，可靠不是感觉：用可解释指标把工程约束转成产品决策，让上线可追溯、可复盘。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2-DO1KJawcuLsjXkVuUbrXZOYPNPV4D5sW7qyXAB9LCV6fnHUJWDS2L6BWNwnA-O6K0y-S-bOWpKcUthrM0YQPpIo6TLNt8_KGJRRLS8CWj439U3smO07Wl4N_sYTEsS_7OuiqPf5CRDRoPUgkC3ZofANKQj1TeuCbc3T3EDh612LsX2tYx9nHBHBn9JqHzqG4g6DDje-kYsneH5FyAY8dgBFeXnUgowZke46Eoa36DknyIR1MpWZb373xL2otJJlRKsoyy3Q2q8',
    pillTone: 'secondary',
  },
  {
    title: '能源产品的“呼吸感”：给运营留出决策空间',
    category: '产品方法论',
    date: 'Nov 12, 2023',
    excerpt:
      '空间不是空的：它是步骤、是等待、也是风险缓冲。用交互节奏降低误操作，让团队更敢做关键决定。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRZRE6l1iaqW1agmXUetSEwqh4M1V-b22lZf4JSYgR9fB0dEGUjS0nKKlxh24HhNXtYbinJPiTC7XEcbyi0-xyNNG0SLWnPk7eTdX5_mHsr7OiFGzp9gZCsK7jFmA9BFVBB2bEtVkxs-yD3UgRLZL3_b4oR2Skc4yFEp0B3s8g0m07cpRbwxSCLEJq-W_RLqtVwvE0HYo_nRcby20LajkUu4o_Bp4wPad2viQXm7P4uC477miFG8D_yYvHjDzu9FL4PgWX37sFvVk',
    pillTone: 'primary',
  },
  {
    title: '储能调度的协同体验：从仿真到现场',
    category: '储能与调度',
    date: 'Dec 02, 2023',
    excerpt:
      '把仿真结果转成可操作的决策链：让每一次调整都有来源、解释与回滚路径，降低“看起来对”的风险。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmKsEOKg3lbRXOuiUIx10m4RGnYxsft6he91ujFN91TLSNjOxGjHFC87QazinktnNOSYGmoBwXgDzJLPGVWk2IVoCIePH4bGIcVzZXtuyPkSwFjvvmxArp5MssM6RzPca5qIwrF4bFTybogZijt-OnA12vb-r4L78xRLZ4OpJKhg6Xn3gQRIxBUWp2NUwc1uRpoCay34eNXSSHu907z5MKL1mJRZLbC_h5RxeZPBHE4xNjtcUC8d1fWv-ZsuzQGi8zlhvMD_9qrPs',
    pillTone: 'secondary',
  },
  {
    title: '可持续不是装饰：把 ESG 做成产品度量',
    category: '可持续产品',
    date: 'Jan 15, 2024',
    excerpt:
      '把“绿色叙事”转换为可计算、可验证、可追溯的指标体系：让合规与创新一起发生。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFHgn6HXWRmf6B0jsW_tVIY4Aq5bg33DQPJgJSr21B22yci-VPpDsBdktuOH86NrYGXV5qX1M4H-eXPEIghKFNwY-bsBaKjG0gnvZaj45WYiHWu1oJ0a1Wio8vhzZ4G9YZJqmyyNT7paIZIakIJF89Y6TNMOfcz44x1Fdg_BmR_hQgM71iqXNFo8_sSfajRjKs5mjGMUhBk15bUPncEI4YCK6CH5o8EDwuMVQcB2ouu_yaAjxrbbTOwfXLVukLxVsSFW45H3awOq4',
    pillTone: 'primary',
  },
  {
    title: '交付复盘：把返工从流程里“剔除”',
    category: '交付复盘',
    date: 'Feb 10, 2024',
    excerpt:
      '可靠交付的核心是信息透明：把风险识别、验证与决策写进流程，让团队知道“为什么”。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3CNZXLJy6_N2bPIDq0iv8W1PBSQjinzkE-Fsisa52xSj_5v9lD_CLtDkDt3YjAMJuwcUn1ZvhIx_Mmfxk91EKHi_NuBBHkBj4nDSF85rvMpPeVm4SKcXps-nyjlb2R_twSzP5KeWnlHUpD1qE58mQd8oYgnRNO8043-seHN1YBCZqPft86UCzgdWTBzXeZzUZkB4j5GtIf_yyOmH_2MuwAajAEuDVW-4D0U5JOeGgtg7XbdKM7QJpOo_LeyWk7cR5Fo2AiVro-Fk',
    pillTone: 'secondary',
  },
  {
    title: '从需求到上线：可靠的路径怎么搭',
    category: '产品方法论',
    date: 'Mar 05, 2024',
    excerpt:
      '用一套“能交付的表达”连接业务、数据与工程：里程碑、验收口径与回滚策略都要可视化。',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBo8k1SNf0_QLDYWXmZ02XtWIiI-tOTpBc6JnsUUdPyPlSbPEbPlF_HvHSkH-GQJUimcugvPbywdr92WYSeFh_oMSdDn2KaJ8qhja-2fMmrwWloEBZoyII23fAkZPL38vj7WG70sU7K-o_iq3-FGFqe42kwz7u3aXC4fg2PqrF8fUgy1Ji4ZwMZz2iC2PDdkaJq8qK5yqE0ed76rEI_ApCZaxiX1OoR77alfyAoXKFZS5CciNoE2Bgw4PogmBdLDHNYui6QtFNdXJc',
    pillTone: 'primary',
  },
];

export default function Blog() {
  return (
    <div className="space-y-24">
      {/* Featured */}
      <section className="mb-4">
        <div className="relative group overflow-hidden rounded-3xl bg-surface-container-low moss-shadow flex flex-col md:flex-row items-stretch border border-border/10">
          <div className="md:w-3/5 overflow-hidden">
            <img
              alt="精选文章缩略图占位"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOJNBwsTCAIXxdcdnCDp_kFudrjilCtX-XyNrEREgHcioi-4Cj4HTkrGTRM0868V6Bw4AUAg3gr5hkQ5kOMkshRGPe4YKL80yfJQhgJNYPYbGVI7bKGi0FPTakXzLn57Pwpe7csRKrrGXYwiaW_h2HmhKzZj_zBQo1klaC0AIylYy2KGQbFrm-wKnSK5qtSPjg1Qy7ZTtnHXOU_cvkRxppWyBAEmSiPjChBISpqpRDWsrayGwsh7seETFtr0UpkEI-zr_S_kQ4"
            />
          </div>
          <div className="md:w-2/5 p-12 flex flex-col justify-center bg-surface-container-low">
            <span className="font-label text-xs tracking-[0.2em] text-energy uppercase mb-4">
              精选文章
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface leading-tight mb-6">
              把可持续做成产品方法
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed mb-8">
              在能源行业，可靠的可持续不是口号：它需要可度量的指标体系、可解释的数据闭环与可交付的路线图。
            </p>
            <div className="flex items-center gap-4">
              <a
                className="bg-energy text-white px-8 py-3 rounded-full font-bold hover:scale-[1.03] transition-transform shadow-[0_10px_30px_-5px_rgba(37,99,235,0.20)]"
                href="#"
              >
                阅读文章
              </a>
              <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest">
                12 分钟阅读
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
        {ARTICLES.map((a) => (
          <article key={a.title} className="flex flex-col group">
            <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6 border border-border/10 moss-shadow">
              <img
                alt={`文章缩略图：${a.title}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={a.image}
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                  a.pillTone === 'primary'
                    ? 'bg-energy text-white'
                    : 'bg-surface-bright text-secondary'
                }`}
              >
                {a.category}
              </span>
              <span className="text-on-surface-variant text-xs">{a.date}</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-3 leading-snug group-hover:text-energy transition-colors">
              {a.title}
            </h3>
            <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-6 max-h-[4.8em] overflow-hidden">
              {a.excerpt}
            </p>
            <a
              className="mt-auto flex items-center gap-2 font-bold text-energy hover:gap-4 transition-all"
              href="#"
            >
              阅读
              <span className="material-symbols-outlined text-sm" aria-hidden>
                arrow_forward
              </span>
            </a>
          </article>
        ))}
      </section>

      {/* Newsletter / Public Account */}
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-surface-container-high rounded-3xl p-12 moss-shadow border border-border/10">
          <div className="space-y-6">
            <h2 className="font-headline text-4xl font-extrabold text-on-surface">订阅能源产品研究</h2>
            <p className="text-on-surface-variant font-body leading-relaxed">
              每月一封：可靠交付、指标闭环、可持续产品化的经验笔记与方法模板。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="bg-surface border-none rounded-full px-6 py-3 focus:ring-2 focus:ring-energy/30 w-full outline-none transition-all placeholder:text-on-surface-variant"
                placeholder="你的邮箱地址"
                type="email"
              />
              <button
                className="bg-energy text-white px-8 py-3 rounded-full font-bold hover:scale-[1.03] transition-transform shrink-0 shadow-[0_10px_30px_-5px_rgba(37,99,235,0.20)]"
                type="button"
              >
                加入订阅
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-surface rounded-3xl pebble-shape border border-border/10 moss-shadow">
            <div className="w-48 h-48 bg-surface-container-highest rounded-2xl mb-6 flex items-center justify-center p-4">
              <div className="w-full h-full border-2 border-dashed border-energy/30 rounded-xl flex flex-col items-center justify-center text-energy/40 gap-2">
                <span className="material-symbols-outlined text-4xl" aria-hidden>
                  qr_code_2
                </span>
                <span className="text-[10px] uppercase font-bold tracking-tighter">关注更新</span>
              </div>
            </div>
            <p className="font-headline font-bold text-xl text-on-surface mb-2">关注更新</p>
            <p className="text-on-surface-variant text-sm font-medium mb-6">@thelivingeditorial</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-energy hover:bg-energy hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-xl" aria-hidden>
                  link
                </span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-energy hover:bg-energy hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-xl" aria-hidden>
                  share
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

