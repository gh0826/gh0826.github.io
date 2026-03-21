import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="font-body text-on-surface min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#f0f2f5] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]">
        <div className="flex items-center gap-4">
          <span className="font-['JetBrains_Mono'] text-lg font-black text-[#2d3436] tracking-widest">OPERATOR_v1.0</span>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full recessed bg-[#e0e5ec]">
            <div className="w-2 h-2 rounded-full led-active"></div>
            <span className="font-mono text-[10px] font-bold text-on-surface">SYSTEM_ONLINE</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link 
            to="/" 
            className={`font-['Space_Grotesk'] tracking-tighter uppercase text-xs font-bold transition-all duration-200 ease-out ${
              location.pathname === '/' 
                ? 'text-[#ff4757] border-b-2 border-[#ff4757] pb-1 shadow-[0_0_8px_#ff4757]' 
                : 'text-[#2d3436] opacity-60 hover:opacity-100 hover:scale-[0.98]'
            }`}
          >
            CHASSIS
          </Link>
          <Link 
            to="/portfolio" 
            className={`font-['Space_Grotesk'] tracking-tighter uppercase text-xs font-bold transition-all duration-200 ease-out ${
              location.pathname === '/portfolio' 
                ? 'text-[#ff4757] border-b-2 border-[#ff4757] pb-1 shadow-[0_0_8px_#ff4757]' 
                : 'text-[#2d3436] opacity-60 hover:opacity-100 hover:scale-[0.98]'
            }`}
          >
            PROJECTS
          </Link>
          <Link 
            to="/about" 
            className={`font-['Space_Grotesk'] tracking-tighter uppercase text-xs font-bold transition-all duration-200 ease-out ${
              location.pathname === '/about' 
                ? 'text-[#ff4757] border-b-2 border-[#ff4757] pb-1 shadow-[0_0_8px_#ff4757]' 
                : 'text-[#2d3436] opacity-60 hover:opacity-100 hover:scale-[0.98]'
            }`}
          >
            METRICS
          </Link>
        </nav>
        <div className="flex gap-4">
          <button className="material-symbols-outlined text-[#2d3436] opacity-60 hover:opacity-100 transition-all">settings</button>
          <button className="material-symbols-outlined text-[#2d3436] opacity-60 hover:opacity-100 transition-all">power_settings_new</button>
        </div>
      </header>

      <div className="flex pt-20 flex-1">
        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full flex justify-between items-center px-12 py-8 border-t-4 border-double border-[#d1d9e6] bg-[#e0e5ec] mt-12 z-10 relative">
        <div className="font-['JetBrains_Mono'] text-[10px] opacity-50 text-[#2d3436]">
          ©2024 PORTFOLIO_OS // ALL_SYSTEMS_GO
        </div>
        <div className="flex gap-8">
          <a className="font-['JetBrains_Mono'] text-[10px] opacity-50 text-[#2d3436] hover:text-[#ff4757] hover:opacity-100 transition-all" href="#">MANUAL</a>
          <a className="font-['JetBrains_Mono'] text-[10px] opacity-50 text-[#2d3436] hover:text-[#ff4757] hover:opacity-100 transition-all" href="#">WARRANTY</a>
          <a className="font-['JetBrains_Mono'] text-[10px] opacity-50 text-[#2d3436] hover:text-[#ff4757] hover:opacity-100 transition-all" href="#">SOURCE</a>
        </div>
      </footer>
    </div>
  );
}