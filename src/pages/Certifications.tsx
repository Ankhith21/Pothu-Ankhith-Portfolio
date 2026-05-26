import { Award, ShieldCheck, Cloud, Terminal } from "lucide-react";
import { certificationsData } from "../data";
import PageTransition from "../components/PageTransition";

export default function Certifications() {
  return (
    <PageTransition>
      <div className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page Section Title */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            Professional Certifications & Badges
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mx-auto md:mx-0 mt-3" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 hover:scale-[1.01] transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between h-56 shadow-lg relative overflow-hidden group"
            >
              {/* Decorative subtle background icon */}
              <div className="absolute right-3 bottom-3 opacity-3 text-white pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <Award size={130} />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Logo Badge row */}
                <div className="flex items-center justify-between">
                  <div className="px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase bg-slate-950/60 border border-white/5 text-slate-300 rounded-md">
                    {cert.issuer}
                  </div>
                  
                  {/* Custom Vector Badge Logo Graphic */}
                  <div className="w-8 h-8 rounded-lg bg-slate-950 border border-white/5 flex items-center justify-center shrink-0">
                    {cert.logoType === "gcp" ? (
                      <div className="relative w-4 h-4 flex items-center justify-center">
                        {/* Custom GCP styled emblem */}
                        <div className="absolute inset-0 border border-t-blue-400 border-r-red-400 border-b-yellow-400 border-l-green-400 rounded-sm rotate-45" />
                        <Cloud size={9} className="text-white relative z-10" />
                      </div>
                    ) : (
                      <div className="flex items-end justify-center space-x-0.5 h-3">
                        {/* Custom visual Cisco Network waves */}
                        <div className="w-0.5 h-1.5 bg-cyan-400 rounded-full" />
                        <div className="w-0.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
                        <div className="w-0.5 h-3.5 bg-cyan-400 rounded-full" />
                        <div className="w-0.5 h-2 bg-cyan-400 rounded-full" />
                        <div className="w-0.5 h-3 bg-cyan-400 rounded-full" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Certification Title */}
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors leading-snug">
                  {cert.name}
                </h3>
              </div>

              {/* Verified Footer link */}
              <div className="flex items-center space-x-1.5 pt-3 border-t border-white/10 text-xs text-slate-400 relative z-10 font-mono">
                <ShieldCheck size={14} className="text-teal-400 animate-pulse" />
                <span>Verified Certificate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
