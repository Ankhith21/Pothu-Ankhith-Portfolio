import { Users, BookOpen, Presentation, Calendar, Heart } from "lucide-react";
import { leadershipData } from "../data";
import PageTransition from "../components/PageTransition";

export default function Leadership() {
  // Map relevant icons to leadership records
  const getIcon = (role: string) => {
    if (role.includes("CMC")) {
      return <Users className="text-blue-400" size={18} />;
    } else if (role.includes("Mentoring")) {
      return <BookOpen className="text-blue-400" size={18} />;
    } else if (role.includes("Workshop")) {
      return <Presentation className="text-blue-400" size={18} />;
    } else {
      return <Heart className="text-blue-400" size={18} />;
    }
  };

  return (
    <PageTransition>
      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Page Section Title */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            Mentoring & Academic Contributions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Leadership & Volunteering
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mx-auto md:mx-0 mt-3" />
        </div>

        {/* Leadership Items List */}
        <div className="grid grid-cols-1 gap-6">
          {leadershipData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 hover:bg-white/8 transition-all duration-300 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col sm:flex-row sm:items-start gap-5 group"
            >
              {/* Leader icon orb */}
              <div className="p-3 bg-slate-950 rounded-xl border border-white/5 shrink-0 self-start flex items-center justify-center">
                {getIcon(item.role)}
              </div>

              {/* Leader info body */}
              <div className="space-y-2 flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                  <h3 className="text-base sm:text-lg font-bold font-display text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {item.role}
                  </h3>
                  <div className="inline-flex items-center space-x-1 text-xs text-slate-400 font-mono">
                    <Calendar size={12} className="text-blue-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
