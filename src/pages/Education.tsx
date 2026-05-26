import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { educationData } from "../data";
import PageTransition from "../components/PageTransition";

export default function Education() {
  return (
    <PageTransition>
      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Page Section Title */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mx-auto md:mx-0 mt-3" />
        </div>

        {/* Education Timeline */}
        <div className="relative border-l border-white/10 ml-4 pl-8 md:pl-10 space-y-16">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border border-blue-400/80 group-hover:scale-110 transition-transform flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              </div>

              {/* Card wrapper */}
              <div className="p-6 sm:p-8 bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all rounded-2xl space-y-5 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-slate-300 shrink-0 self-start">
                    <Calendar size={13} className="mr-1 text-blue-400" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Badges / Metrics Row */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <div className="flex items-center space-x-1.5 px-3 py-1 bg-blue-500/10 text-blue-300 rounded-lg border border-blue-500/20 text-xs">
                    <Award size={14} className="text-blue-400" />
                    <span className="font-semibold">{edu.honors}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 px-3 py-1 bg-teal-500/10 text-teal-300 rounded-lg border border-teal-500/20 text-xs font-mono">
                    <span className="text-teal-400 font-semibold">GPA:</span>
                    <span>{edu.gpa}</span>
                  </div>
                </div>

                {/* Coursework block */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2 text-slate-400 text-xs font-mono uppercase tracking-wider">
                    <BookOpen size={14} className="text-blue-400" />
                    <span>Key Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 cursor-default transition-transform hover:-translate-y-0.5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
