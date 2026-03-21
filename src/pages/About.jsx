export default function About() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Dashboard Header / Profile Section */}
      <section className="mb-12 relative bg-[#f0f2f5] p-8 rounded-xl shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] overflow-hidden">
        {/* Screws */}
        <div className="screw-head screw-tl"></div>
        <div className="screw-head screw-tr"></div>
        <div className="screw-head screw-bl"></div>
        <div className="screw-head screw-br"></div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* CRT Avatar Placeholder */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl shadow-[inset_4px_4px_10px_#d1d9e6,inset_-4px_-4px_10px_#ffffff] bg-[#d1d9e6] flex items-center justify-center p-4 border-4 border-[#e0e5ec]">
            <div className="w-full h-full bg-[#1a1c1e] rounded-lg relative overflow-hidden flex items-center justify-center">
              <div className="crt-scanlines absolute inset-0 opacity-40"></div>
              <div className="z-10 text-primary font-['JetBrains_Mono'] text-[10px] font-bold animate-pulse">SYSTEM_ACTIVE</div>
            </div>
          </div>
          {/* Info Panel */}
          <div className="flex-1 space-y-6">
            <div className="space-y-1">
              <span className="font-['JetBrains_Mono'] text-[#ff4757] text-xs font-bold tracking-widest flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#ff4757] shadow-[0_0_8px_#ff4757] mr-2"></span>
                SUBJECT_DESIGNATION: ELIAS_VAUGHN
              </span>
              <h1 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-[#2d3436]">Senior Lead Architect &amp; Industrial Systems Optimizer</h1>
            </div>
            <p className="font-body text-secondary leading-relaxed max-w-2xl">
              Over 12 cycles of experience in high-reliability systems engineering. Specializing in tactile interface design and mechanical logic architectures. I translate complex industrial requirements into resilient, operative software modules.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#f0f2f5] px-4 py-2 rounded shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] flex items-center space-x-2">
                <span className="material-symbols-outlined text-xs text-primary">location_on</span>
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase">NODE: BERLIN_041</span>
              </div>
              <div className="bg-[#f0f2f5] px-4 py-2 rounded shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] flex items-center space-x-2">
                <span className="material-symbols-outlined text-xs text-primary">verified</span>
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase">STATUS: VERIFIED_OP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Layout for Skills and Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Skill Tree Panel */}
        <div className="lg:col-span-1 bg-[#f0f2f5] p-8 rounded-xl shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] relative">
          <div className="screw-head screw-tl"></div>
          <div className="screw-head screw-tr"></div>
          <h3 className="font-headline font-bold text-lg mb-8 tracking-tight uppercase flex items-center">
            <span className="material-symbols-outlined mr-2 text-primary">analytics</span>
            Core_Capacities
          </h3>
          <div className="space-y-8">
            {/* Skill Item */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-['JetBrains_Mono'] text-[10px] font-bold uppercase">Logic_Design</span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-primary">94%</span>
              </div>
              <div className="h-4 w-full bg-[#d1d9e6] rounded-sm shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] p-0.5 flex gap-0.5">
                <div className="h-full w-[94%] bg-primary shadow-[0_0_8px_#ff4757]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-['JetBrains_Mono'] text-[10px] font-bold uppercase">React_Engines</span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-primary">88%</span>
              </div>
              <div className="h-4 w-full bg-[#d1d9e6] rounded-sm shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] p-0.5 flex gap-0.5">
                <div className="h-full w-[88%] bg-primary shadow-[0_0_8px_#ff4757]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-['JetBrains_Mono'] text-[10px] font-bold uppercase">Neural_Optics</span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-primary">72%</span>
              </div>
              <div className="h-4 w-full bg-[#d1d9e6] rounded-sm shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] p-0.5 flex gap-0.5">
                <div className="h-full w-[72%] bg-primary shadow-[0_0_8px_#ff4757]"></div>
              </div>
            </div>
            {/* Modular Blocks Skill Style */}
            <div className="pt-4">
              <span className="font-['JetBrains_Mono'] text-[10px] font-bold uppercase block mb-4">Diagnostic_Modules</span>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#e0e5ec] p-3 rounded shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-primary mb-1">memory</span>
                  <span className="font-['JetBrains_Mono'] text-[8px] uppercase">RUST_V4</span>
                </div>
                <div className="bg-[#e0e5ec] p-3 rounded shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-primary mb-1">terminal</span>
                  <span className="font-['JetBrains_Mono'] text-[8px] uppercase">BASH_SYS</span>
                </div>
                <div className="bg-[#e0e5ec] p-3 rounded shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-primary mb-1">database</span>
                  <span className="font-['JetBrains_Mono'] text-[8px] uppercase">SQL_FLOW</span>
                </div>
                <div className="bg-[#e0e5ec] p-3 rounded shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-primary mb-1">cloud_done</span>
                  <span className="font-['JetBrains_Mono'] text-[8px] uppercase">AWS_DOCK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Experience / Timeline Panel */}
        <div className="lg:col-span-2 bg-[#f0f2f5] p-8 rounded-xl shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] relative overflow-hidden">
          <div className="screw-head screw-br"></div>
          <div className="screw-head screw-tr"></div>
          <h3 className="font-headline font-bold text-lg mb-10 tracking-tight uppercase flex items-center">
            <span className="material-symbols-outlined mr-2 text-primary">history</span>
            Deployment_Log
          </h3>
          <div className="relative space-y-12 pl-10">
            {/* Timeline Track */}
            <div className="absolute left-3 top-0 h-full w-1.5 bg-[#d1d9e6] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)]"></div>
            {/* Experience Item */}
            <div className="relative group">
              {/* Bolted Marker */}
              <div className="absolute -left-10 top-1 w-8 h-8 rounded shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] bg-[#f0f2f5] border border-[#d1d9e6] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#ff4757]"></div>
              </div>
              <div className="space-y-1 mb-2">
                <span className="font-['JetBrains_Mono'] text-[10px] text-secondary-500 bg-[#e0e5ec] px-2 py-0.5 rounded shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]">2021 - PRESENT</span>
                <h4 className="font-bold text-xl text-[#2d3436]">Chief Systems Architect @ Industrial Core</h4>
              </div>
              <p className="font-body text-sm text-secondary leading-relaxed mb-4">
                Leading the modernization of legacy terminal interfaces. Reduced operational latency by 42% through strategic modularization of data pathways.
              </p>
              {/* Mounted Module Chips */}
              <div className="flex gap-2">
                <div className="text-[8px] font-['JetBrains_Mono'] px-2 py-1 border border-primary/20 rounded uppercase">Architecture</div>
                <div className="text-[8px] font-['JetBrains_Mono'] px-2 py-1 border border-primary/20 rounded uppercase">Core_Logic</div>
              </div>
            </div>
            {/* Experience Item */}
            <div className="relative group">
              <div className="absolute -left-10 top-1 w-8 h-8 rounded shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] bg-[#f0f2f5] border border-[#d1d9e6] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#2d3436] opacity-30"></div>
              </div>
              <div className="space-y-1 mb-2">
                <span className="font-['JetBrains_Mono'] text-[10px] text-secondary-500 bg-[#e0e5ec] px-2 py-0.5 rounded shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]">2018 - 2021</span>
                <h4 className="font-bold text-xl text-[#2d3436]">Interface Engineer @ NexaMachina</h4>
              </div>
              <p className="font-body text-sm text-secondary leading-relaxed mb-4">
                Developed tactile CSS frameworks for next-gen instrumentation panels. Integrated neural feedback systems into operator cockpits.
              </p>
              <div className="flex gap-2">
                <div className="text-[8px] font-['JetBrains_Mono'] px-2 py-1 border border-primary/20 rounded uppercase">HMI_Design</div>
                <div className="text-[8px] font-['JetBrains_Mono'] px-2 py-1 border border-primary/20 rounded uppercase">Web_Assembly</div>
              </div>
            </div>
            {/* Experience Item */}
            <div className="relative group">
              <div className="absolute -left-10 top-1 w-8 h-8 rounded shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] bg-[#f0f2f5] border border-[#d1d9e6] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#2d3436] opacity-30"></div>
              </div>
              <div className="space-y-1 mb-2">
                <span className="font-['JetBrains_Mono'] text-[10px] text-secondary-500 bg-[#e0e5ec] px-2 py-0.5 rounded shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]">2015 - 2018</span>
                <h4 className="font-bold text-xl text-[#2d3436]">Junior Comms Operator @ Signal_Base</h4>
              </div>
              <p className="font-body text-sm text-secondary leading-relaxed">
                Maintained high-availability communication nodes in austere digital environments. Hardened network protocols against packet drift.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Panel */}
        <div className="lg:col-span-3 bg-[#f0f2f5] p-8 rounded-xl shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#d1d9e6] shadow-[inset_3px_3px_6px_#b3bcc9,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">emergency_share</span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-2xl tracking-tight uppercase">Initiate_Handshake</h3>
              <p className="font-body text-secondary text-sm">Open channel for collaboration or technical inquiries.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
            {/* Recessed Input Style Wells for Info */}
            <div className="bg-[#d1d9e6] p-4 rounded shadow-[inset_3px_3px_6px_#b3bcc9,inset_-3px_-3px_6px_#ffffff] min-w-[240px]">
              <span className="font-['JetBrains_Mono'] text-[8px] text-primary uppercase block mb-1">COMM_ADDR</span>
              <span className="font-['JetBrains_Mono'] text-sm font-bold">ELIAS@OPERATOR.IO</span>
            </div>
            {/* Primary Physical Key Button */}
            <button className="bg-[#ff4757] text-white px-10 py-5 rounded-lg shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)] active:translate-y-1 transition-all duration-150 font-headline font-bold uppercase tracking-widest text-lg flex items-center justify-center group">
              CONTACT_ME
              <span className="material-symbols-outlined ml-3 group-hover:translate-x-1 transition-transform">bolt</span>
            </button>
          </div>
          {/* Ventilation Slots Aesthetic */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="h-1 w-12 bg-[#d1d9e6] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)] rounded-full"></div>
            <div className="h-1 w-12 bg-[#d1d9e6] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)] rounded-full"></div>
            <div className="h-1 w-12 bg-[#d1d9e6] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}