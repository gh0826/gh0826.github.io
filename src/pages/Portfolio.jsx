export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header Panel */}
      <div className="bg-[#f0f2f5] p-8 mb-12 shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] relative rounded-lg border-l-4 border-[#ff4757]">
        <div className="absolute top-2 right-2 w-4 h-4 screw-head rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 screw-head rounded-full"></div>
        <div className="absolute top-2 left-2 w-4 h-4 screw-head rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 screw-head rounded-full"></div>
        <h1 className="font-headline text-4xl font-bold tracking-tighter mb-2 text-[#2d3436]">PORTFOLIO_MODULES</h1>
        <p className="font-body text-sm text-on-surface-variant max-w-2xl">
          ARCHIVED OPERATIONAL DATA AND PROJECT SCHEMATICS. ALL SYSTEMS VERIFIED AND STRESS-TESTED UNDER INDUSTRIAL PROTOCOL 00-47-57.
        </p>
        <div className="flex gap-4 mt-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#d1d9e6] shadow-[inset_2px_2px_5px_#b8c1d1] rounded text-[10px] font-['JetBrains_Mono']">
            <span className="w-2 h-2 rounded-full bg-[#ff4757] shadow-[0_0_8px_#ff4757]"></span> STATUS: OPTIMAL
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-[#d1d9e6] shadow-[inset_2px_2px_5px_#b8c1d1] rounded text-[10px] font-['JetBrains_Mono']">
            ACTIVE_SESSION: 2024.11.08
          </div>
        </div>
      </div>

      {/* Bento Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 01 */}
        <article className="group relative bg-[#f0f2f5] p-6 shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] hover:-translate-y-1 transition-all duration-300 rounded-lg">
          {/* Industrial Bolts */}
          <div className="absolute top-2 right-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="absolute top-2 left-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="mb-4 flex justify-between items-start">
            <h3 className="font-headline text-xl font-bold tracking-tight">PROJECT_NEXUS</h3>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#ff4757]">REV_2.4</span>
          </div>
          {/* CRT Display Placeholder */}
          <div className="w-full aspect-video bg-[#1a1c1e] mb-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-sm overflow-hidden relative border-4 border-[#d1d9e6]">
            <div className="crt-scanlines absolute inset-0 opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#4ade80] text-5xl opacity-20">biotech</span>
              <div className="absolute top-2 left-2 font-['JetBrains_Mono'] text-[8px] text-[#4ade80] opacity-50">VIDEO_SIGNAL: ENABLED</div>
              <div className="absolute bottom-2 right-2 font-['JetBrains_Mono'] text-[8px] text-[#4ade80] opacity-50">CH: 01</div>
            </div>
          </div>
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-[#d1d9e6] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] p-2 rounded">
              <div className="text-[8px] font-['JetBrains_Mono'] opacity-50">LATENCY_MS</div>
              <div className="text-xs font-['JetBrains_Mono'] font-bold">12.4ms</div>
            </div>
            <div className="bg-[#d1d9e6] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] p-2 rounded">
              <div className="text-[8px] font-['JetBrains_Mono'] opacity-50">LOAD_AVG</div>
              <div className="text-xs font-['JetBrains_Mono'] font-bold">42%</div>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            HIGH-CAPACITY DATA PIPELINE OPTIMIZATION FOR CLUSTERED ARCHITECTURES. IMPLEMENTING ASYNC PROTOCOLS.
          </p>
        </article>

        {/* Project Card 02 */}
        <article className="group relative bg-[#f0f2f5] p-6 shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] hover:-translate-y-1 transition-all duration-300 rounded-lg">
          <div className="absolute top-2 right-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="absolute top-2 left-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="mb-4 flex justify-between items-start">
            <h3 className="font-headline text-xl font-bold tracking-tight">SIGNAL_VOX</h3>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#ff4757]">REV_1.0</span>
          </div>
          <div className="w-full aspect-video bg-[#1a1c1e] mb-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-sm overflow-hidden relative border-4 border-[#d1d9e6]">
            <div className="crt-scanlines absolute inset-0 opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#ff4757] text-5xl opacity-20">settings_input_antenna</span>
              <div className="absolute top-2 left-2 font-['JetBrains_Mono'] text-[8px] text-[#ff4757] opacity-50">ENCRYPTED_FEED</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-[#d1d9e6] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] p-2 rounded">
              <div className="text-[8px] font-['JetBrains_Mono'] opacity-50">UPTIME_H</div>
              <div className="text-xs font-['JetBrains_Mono'] font-bold">8760.0</div>
            </div>
            <div className="bg-[#d1d9e6] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] p-2 rounded">
              <div className="text-[8px] font-['JetBrains_Mono'] opacity-50">NODES_ACT</div>
              <div className="text-xs font-['JetBrains_Mono'] font-bold">128</div>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            DISTRIBUTED COMMUNICATION MESH NETWORK UTILIZING LOW-ENERGY FREQUENCY HOPPING AND AES-256 WRAPPING.
          </p>
        </article>

        {/* Project Card 03 */}
        <article className="group relative bg-[#f0f2f5] p-6 shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] hover:-translate-y-1 transition-all duration-300 rounded-lg">
          <div className="absolute top-2 right-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="absolute top-2 left-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 screw-head rounded-full"></div>
          <div className="mb-4 flex justify-between items-start">
            <h3 className="font-headline text-xl font-bold tracking-tight">HARD_SHELL</h3>
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#ff4757]">REV_3.1</span>
          </div>
          <div className="w-full aspect-video bg-[#1a1c1e] mb-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-sm overflow-hidden relative border-4 border-[#d1d9e6]">
            <div className="crt-scanlines absolute inset-0 opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-outline-variant text-5xl opacity-20">security</span>
              <div className="absolute top-2 left-2 font-['JetBrains_Mono'] text-[8px] text-outline-variant opacity-50">FIREWALL_ACTIVE</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-[#d1d9e6] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] p-2 rounded">
              <div className="text-[8px] font-['JetBrains_Mono'] opacity-50">THREATS_DEF</div>
              <div className="text-xs font-['JetBrains_Mono'] font-bold">14,209</div>
            </div>
            <div className="bg-[#d1d9e6] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] p-2 rounded">
              <div className="text-[8px] font-['JetBrains_Mono'] opacity-50">INTEGRITY</div>
              <div className="text-xs font-['JetBrains_Mono'] font-bold">100.0%</div>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            REINFORCED SECURITY LAYER FOR EDGE COMPUTING MODULES. PENETRATION RESISTANT KERNEL-LEVEL VIRTUALIZATION.
          </p>
        </article>
      </div>

      {/* Ventilation Slot Decoration */}
      <div className="mt-20 flex justify-center gap-4">
        <div className="w-24 h-2 bg-[#d1d9e6] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] rounded-full opacity-50"></div>
        <div className="w-24 h-2 bg-[#d1d9e6] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] rounded-full opacity-50"></div>
        <div className="w-24 h-2 bg-[#d1d9e6] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] rounded-full opacity-50"></div>
      </div>
    </div>
  );
}