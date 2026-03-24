import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV = [
  { to: '/', label: '首页' },
  { to: '/portfolio', label: '作品' },
  { to: '/about', label: '关于' },
  { to: '/blog', label: '博客' },
  { to: '/contact', label: '联系' },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = useMemo(() => {
    return (to) =>
      `font-body text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ease-out cursor-pointer ${
        location.pathname === to
          ? 'bg-energy text-white shadow-[0_10px_30px_-5px_rgba(93,112,82,0.15)]'
          : 'text-on-surface/70 hover:text-energy hover:bg-surface-container-low'
      }`;
  }, [location.pathname]);

  return (
    <div className="font-body text-on-surface min-h-screen flex flex-col bg-background">
      <div className="noise-overlay" aria-hidden />

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <div className="relative w-full flex justify-center px-4">
          <nav className="bg-background/75 backdrop-blur-md rounded-full mt-4 w-full max-w-fit px-6 py-2 border border-border/50 shadow-[0_10px_30px_-5px_rgba(93,112,82,0.12)] flex items-center gap-6">
            <Link
              to="/"
              className="font-headline font-extrabold text-2xl text-primary tracking-tight whitespace-nowrap"
            >
              Claribel
            </Link>

            <div className="hidden md:flex items-center gap-2 ml-2" aria-label="主导航">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} className={linkClass(item.to)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="md:hidden ml-auto material-symbols-outlined text-on-surface/60 hover:text-primary transition-colors cursor-pointer rounded-full p-2 hover:bg-surface-container-low"
              aria-label="打开菜单"
              onClick={() => setMobileOpen((v) => !v)}
            >
              menu
            </button>
          </nav>

          {mobileOpen ? (
            <div className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 w-[min(92vw,380px)]">
              <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-[2rem] p-2 shadow-[0_10px_30px_-5px_rgba(93,112,82,0.12)]">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`block px-4 py-3 rounded-full transition-all ${
                      location.pathname === item.to
                        ? 'bg-energy text-white'
                        : 'text-on-surface/70 hover:text-energy hover:bg-surface-container-low'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main className="flex-1 pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {children}
      </main>

      <footer className="w-full max-w-7xl mx-auto p-12 mt-20 flex flex-col items-center gap-6 bg-background border border-border/50 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] mb-8 mx-4">
        <span className="font-headline text-xl font-extrabold text-primary">Claribel</span>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-body text-sm font-medium tracking-wide uppercase text-on-surface-variant/80 hover:text-energy transition-colors" href="#">
            Next.js
          </a>
          <a className="font-body text-sm font-medium tracking-wide uppercase text-on-surface-variant/80 hover:text-energy transition-colors" href="#">
            Tailwind CSS
          </a>
          <a className="font-body text-sm font-medium tracking-wide uppercase text-on-surface-variant/80 hover:text-energy transition-colors" href="#">
            Framer Motion
          </a>
        </div>
        <p className="font-mono text-xs text-on-surface-variant/80 text-center">
          © 2026 Claribel · 手工生长，保持温柔
        </p>
      </footer>
    </div>
  );
}
