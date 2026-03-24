export default function Contact() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="mb-4 text-center">
        <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tight text-energy mb-6">
          合作与咨询
        </h1>
        <p className="text-on-surface-variant text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          适合的合作包括：能源产品路线图、指标与数据闭环梳理、可持续度量方案，以及交付风险控制与复盘模板。
          不论你处在并网/储能/平台的哪个阶段，我都愿意一起把下一步走稳。
        </p>
      </section>

      {/* Contact layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact form */}
        <div className="lg:col-span-7 bg-surface-container-highest p-8 md:p-12 rounded-3xl border border-border/30 shadow-moss-soft">
          <form action="#" className="space-y-8">
            <div className="space-y-2">
              <label
                className="font-label text-xs uppercase tracking-[0.1em] text-on-surface-variant font-semibold"
                htmlFor="name"
              >
                你的姓名
              </label>
              <input
                className="w-full bg-surface border-none rounded-2xl p-4 focus:ring-2 focus:ring-energy/20 transition-all placeholder:text-on-surface-variant"
                id="name"
                placeholder="例如：罗恩·索恩"
                type="text"
              />
              <p className="text-xs text-on-surface-variant/60 italic px-1">请使用你希望被称呼的名字。</p>
            </div>

            <div className="space-y-2">
              <label
                className="font-label text-xs uppercase tracking-[0.1em] text-on-surface-variant font-semibold"
                htmlFor="email"
              >
                邮箱地址
              </label>
              <input
                className="w-full bg-surface border-none rounded-2xl p-4 focus:ring-2 focus:ring-energy/20 transition-all placeholder:text-on-surface-variant"
                id="email"
                placeholder="hello@domain.com"
                type="email"
              />
              <p className="text-xs text-on-surface-variant/60 italic px-1">放心：不会做烦人的新闻通讯推送。</p>
            </div>

            <div className="space-y-2">
              <label
                className="font-label text-xs uppercase tracking-[0.1em] text-on-surface-variant font-semibold"
                htmlFor="message"
              >
                你的消息
              </label>
              <textarea
                className="w-full bg-surface border-none rounded-2xl p-4 focus:ring-2 focus:ring-energy/20 transition-all placeholder:text-on-surface-variant"
                id="message"
                placeholder="分享你的想法，或者简单打个招呼…"
                rows="5"
              />
            </div>

            <button
              className="w-full md:w-auto px-10 py-4 bg-energy text-white rounded-full font-bold text-lg shadow-[0_10px_30px_-5px_rgba(37,99,235,0.20)] hover:scale-[1.03] active:scale-95 transition-all"
              type="button"
            >
              发送需求
            </button>
          </form>
        </div>

        {/* Social & resources */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-surface-container-low p-8 rounded-3xl border border-border/30">
            <h3 className="font-headline text-3xl font-semibold mb-6 text-on-surface">在能源现场找到我</h3>
            <div className="flex flex-col gap-4">
              <a
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface hover:bg-surface-bright transition-colors group shadow-sm"
                href="#"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-energy rounded-full group-hover:scale-[1.05] transition-transform">
                  <span className="material-symbols-outlined text-on-primary" aria-hidden>
                    alternate_email
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">邮件</p>
                  <p className="text-sm text-on-surface-variant">hello@livingeditorial.com</p>
                </div>
              </a>

              <a
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface hover:bg-surface-bright transition-colors group shadow-sm"
                href="#"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-energy rounded-full group-hover:scale-[1.05] transition-transform">
                  <span className="material-symbols-outlined text-on-primary" aria-hidden>
                    code
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">GitHub</p>
                  <p className="text-sm text-on-surface-variant">github.com/livingeditorial</p>
                </div>
              </a>

              <a
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface hover:bg-surface-bright transition-colors group shadow-sm"
                href="#"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-energy rounded-full group-hover:scale-[1.05] transition-transform">
                  <span className="material-symbols-outlined text-on-primary" aria-hidden>
                    share
                  </span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">LinkedIn</p>
                  <p className="text-sm text-on-surface-variant">linkedin.com/in/theliving</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-secondary/20 p-8 rounded-3xl border border-secondary/20 pebble-shape relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-headline text-2xl font-semibold text-secondary mb-2">简历（Curriculum Vitae）</h3>
              <p className="text-on-surface-variant/80 text-sm mb-6 max-w-[240px]">
                一份记录产品路径与交付方法的简历：可靠指标、数据闭环与路线图模板。
              </p>
              <button
                className="flex items-center gap-2 px-6 py-3 border-2 border-energy text-energy font-bold rounded-full hover:bg-energy hover:text-white transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-xl" aria-hidden>
                  download
                </span>
                下载简历（PDF）
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-[1.08] transition-transform duration-700">
              <span className="material-symbols-outlined text-[160px] text-secondary" aria-hidden>
                description
              </span>
            </div>
          </div>

          <div className="bg-surface-container-high p-8 rounded-3xl border border-border/30 flex items-center justify-between">
            <div>
              <p className="font-label text-xs uppercase tracking-[0.1em] text-on-surface-variant mb-1">所在地</p>
              <p className="font-headline text-xl font-bold text-on-surface">柏林 / 北京（示例）</p>
            </div>
            <div className="w-16 h-16 rounded-full overflow-hidden grayscale">
              <img
                alt="城市景观占位"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaBbka4dRlAJTXRIaDamWRRkmqWZ-dKQEaZvVTOhMofOtH9Fw1jx-vvWdfRtGDsLZ2qCeylUmrskxWdVZdGmuAOQUq8BcqUdja8EVpGoTV_kdcBhnagHhcdPlT731NsyDYTBDk5lgFfWeTzzktluO5IRUglImj5ZB2-rOW6xqgPi-r5lUr8WDgjU8ihbKs_naw8GaHVJPYtHk0IYqTHuNm0v9jp9gb4_HEzjTWyo_pC7cCk9x6j_iQ237FU8UQPJjp7TGB9c86ebo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

