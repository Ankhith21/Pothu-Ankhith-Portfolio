import { Briefcase, Calendar, Terminal, CheckCircle2 } from "lucide-react";
import { experienceData } from "../data";
import PageTransition from "../components/PageTransition";

export default function Experience() {
  return (
    <PageTransition>
      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Page Section Title */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            Professional Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mx-auto md:mx-0 mt-3" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden group"
            >
              {/* Subtle top indicator glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/10 via-cyan-400/30 to-blue-500/10" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 uppercase tracking-widest">
                    Technical Bootcamp
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight mt-1 group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-slate-300 self-start">
                  <Calendar size={13} className="text-blue-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Core Actions / Highlights */}
              <div className="pt-6 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center space-x-2">
                  <Terminal size={14} className="text-blue-400" />
                  <span>Key Contributions & Focus Areas</span>
                </h4>

                <ul className="space-y-3.5">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-3 text-sm text-slate-250">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-light">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
