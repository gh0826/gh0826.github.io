export default function Home() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 mt-4">
      {/* Hero Section Card */}
      <div className="col-span-12 lg:col-span-8 bg-[#f0f2f5] p-10 rounded-xl base-lift relative overflow-hidden">
        <div className="screw-head screw-tl"></div>
        <div className="screw-head screw-tr"></div>
        <div className="screw-head screw-bl"></div>
        <div className="screw-head screw-br"></div>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* CRT Avatar */}
          <div className="w-48 h-48 crt-screen rounded-xl flex-shrink-0 flex items-center justify-center p-4">
            <div className="text-primary font-mono text-center">
              <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
              <p className="text-[10px] mt-2 tracking-widest uppercase animate-pulse">Scanning...</p>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="space-y-1">
              <h1 className="text-5xl md:text-7xl font-bold font-headline text-on-surface tracking-tighter">ELIAS VAUGHN</h1>
              <p className="font-mono text-primary text-sm tracking-widest uppercase font-bold">Principal Systems Architect // L7-ADMIN</p>
            </div>
            <div className="recessed p-4 bg-[#e0e5ec] rounded-lg">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Specializing in the intersection of mechanical reliability and high-throughput digital interfaces. Engineering robust hardware-software bridges for critical infrastructure since 2012.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="base-lift bg-primary text-on-primary font-mono text-xs font-bold py-3 px-6 rounded-lg hover:scale-95 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">favorite</span>
                INITIALIZE_SESSION
              </button>
              <button className="base-lift bg-[#f0f2f5] text-on-surface font-mono text-xs font-bold py-3 px-6 rounded-lg hover:scale-95 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">description</span>
                FETCH_RECORDS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Status Panel */}
      <div className="col-span-12 lg:col-span-4 bg-[#f0f2f5] p-8 rounded-xl base-lift relative">
        <div className="screw-head screw-tl"></div>
        <div className="screw-head screw-tr"></div>
        <div className="screw-head screw-bl"></div>
        <div className="screw-head screw-br"></div>
        <h3 className="font-mono text-[10px] font-black uppercase text-secondary mb-6 tracking-widest border-b border-[#d1d9e6] pb-2">Diagnostic_Readout</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between font-mono text-[10px]">
              <span>CPU_STRESS</span>
              <span className="text-primary">42.8%</span>
            </div>
            <div className="h-4 recessed bg-[#e0e5ec] rounded-full overflow-hidden p-1">
              <div className="h-full bg-primary rounded-full shadow-[0_0_8px_#ff4757]" style={{ width: '42.8%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between font-mono text-[10px]">
              <span>SIGNAL_STRENGTH</span>
              <span className="text-[#2d3436]">OPTIMAL</span>
            </div>
            <div className="h-4 recessed bg-[#e0e5ec] rounded-full overflow-hidden p-1">
              <div className="h-full bg-[#2d3436] rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="recessed p-4 rounded-lg bg-[#e0e5ec] flex flex-col items-center gap-2">
              <div className="w-3 h-3 rounded-full led-active"></div>
              <span className="font-mono text-[9px] uppercase font-bold">Core_01</span>
            </div>
            <div className="recessed p-4 rounded-lg bg-[#e0e5ec] flex flex-col items-center gap-2">
              <div className="w-3 h-3 rounded-full led-active opacity-30"></div>
              <span className="font-mono text-[9px] uppercase font-bold">Aux_02</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid Sections */}
      {/* Competency 01 */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#f0f2f5] p-6 rounded-xl base-lift relative h-64 group cursor-pointer hover:bg-[#e0e5ec] transition-colors">
        <div className="screw-head screw-tl"></div>
        <div className="screw-head screw-tr"></div>
        <div className="flex flex-col h-full">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">terminal</span>
          <h4 className="font-headline font-bold text-xl uppercase tracking-tighter mb-2">Systems Architecture</h4>
          <p className="font-mono text-[11px] text-on-surface-variant opacity-70">Distributed ledgers, redundant topologies, and high-availability clusters.</p>
          <div className="mt-auto font-mono text-[10px] text-primary font-bold">LOAD_MODULE_01 &gt;</div>
        </div>
      </div>

      {/* Competency 02 */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#f0f2f5] p-6 rounded-xl base-lift relative h-64 group cursor-pointer hover:bg-[#e0e5ec] transition-colors">
        <div className="screw-head screw-tl"></div>
        <div className="screw-head screw-tr"></div>
        <div className="flex flex-col h-full">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">settings_input_component</span>
          <h4 className="font-headline font-bold text-xl uppercase tracking-tighter mb-2">Interface Design</h4>
          <p className="font-mono text-[11px] text-on-surface-variant opacity-70">Focusing on high-stress environments and industrial instrumentation UI.</p>
          <div className="mt-auto font-mono text-[10px] text-primary font-bold">LOAD_MODULE_02 &gt;</div>
        </div>
      </div>

      {/* Competency 03 */}
      <div className="col-span-12 md:col-span-12 lg:col-span-4 bg-[#f0f2f5] p-6 rounded-xl base-lift relative h-64 group cursor-pointer hover:bg-[#e0e5ec] transition-colors">
        <div className="screw-head screw-tl"></div>
        <div className="screw-head screw-tr"></div>
        <div className="flex flex-col h-full">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">security</span>
          <h4 className="font-headline font-bold text-xl uppercase tracking-tighter mb-2">Hardened Security</h4>
          <p className="font-mono text-[11px] text-on-surface-variant opacity-70">Protocol level defense, cryptographic integration, and edge protection.</p>
          <div className="mt-auto font-mono text-[10px] text-primary font-bold">LOAD_MODULE_03 &gt;</div>
        </div>
      </div>

      {/* Data Stream / Activity */}
      <div className="col-span-12 recessed-deep bg-[#d1d9e6] p-4 rounded-xl font-mono text-[10px] space-y-1 text-on-surface-variant overflow-hidden max-h-48 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#d1d9e6] to-transparent pointer-events-none z-10"></div>
        <p className="opacity-50">[08:44:21] Handshaking with remote node... OK</p>
        <p className="text-primary">[08:44:22] Authenticating signature: 0x82f... DONE</p>
        <p className="opacity-50">[08:44:23] Loading kernel modules...</p>
        <p className="opacity-50">[08:44:24] Network interface active: eth0</p>
        <p className="text-on-surface font-bold">[08:44:25] WELCOME TO THE OPERATOR_V1 CORE ENVIRONMENT</p>
        <p className="opacity-50">[08:44:26] Scanning available protocols...</p>
        <p className="opacity-50">[08:44:27] Handshaking with remote node... OK</p>
        <p className="opacity-30">[08:44:28] Cache cleared. Re-indexing metadata.</p>
      </div>
    </div>
  );
}