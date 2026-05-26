import { Terminal, Database, ShieldCheck, Code, Settings, Share2, Layers } from "lucide-react";
import { skillsData } from "../data";
import PageTransition from "../components/PageTransition";

export default function Skills() {
  // Map specific icons to skill categories for visual balance
  const getIcon = (title: string) => {
    switch (title) {
      case "Programming & Scripting":
        return <Code size={18} className="text-blue-400" />;
      case "Cloud & Tools":
        return <Settings size={18} className="text-blue-400" />;
      case "Databases":
        return <Database size={18} className="text-blue-400" />;
      case "Testing & QA":
        return <ShieldCheck size={18} className="text-blue-400" />;
      case "Software Engineering":
        return <Layers size={18} className="text-blue-400" />;
      case "Operating Systems":
        return <Terminal size={18} className="text-blue-400" />;
      default:
        return <Share2 size={18} className="text-blue-400" />;
    }
  };

  return (
    <PageTransition>
      <div className="py-24 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Page Section Title */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            Technical Skillset
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mx-auto md:mx-0 mt-3" />
        </div>

        {/* Skills Bounding Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Section Header */}
                <div className="flex items-center space-x-2.5 pb-3 border-b border-white/10">
                  <div className="p-2 bg-slate-950 rounded-xl border border-white/5">
                    {getIcon(category.title)}
                  </div>
                  <h3 className="text-base font-bold font-display text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Pills list */}
                <div className="flex flex-wrap gap-2 pt-1 font-light">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-white/5 text-xs text-slate-300 font-sans cursor-default hover:border-blue-500/30 hover:text-white hover:scale-[1.03] transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
