import { useState } from "react";
import { projectsData } from "../data";
import { Folder, Filter, Terminal, Code2, Globe } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Dynamically extract categories from raw project data to generate filters
  const categories = ["All", "AI & Deep Learning", "Generative AI", "Hackathon Project", "Full-Stack Web", "Front-End"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(proj => proj.category === selectedCategory || proj.techStack.includes(selectedCategory));

  return (
    <PageTransition>
      <div className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page Section Title */}
        <div className="text-center md:text-left mb-12 space-y-2">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            My Academic & Personal Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mx-auto md:mx-0 mt-3" />
        </div>

        {/* Categories / Tags filter menu */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          <div className="flex items-center text-xs text-slate-400 font-mono uppercase mr-2.5">
            <Filter size={13} className="mr-1.5 text-blue-400" />
            <span>Filter By:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border shrink-0 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-900/20"
                  : "bg-white/5 text-slate-400 border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 hover:bg-white/8 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                {/* Folder / Category header */}
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-slate-950 rounded-xl border border-white/5 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <Folder size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold font-display text-white group-hover:text-blue-400 transition-colors tracking-tight">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Badges / Tech footer */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-3 font-light">
                <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                  <Terminal size={11} className="text-blue-400" />
                  <span>Technologies Used</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[10px] rounded bg-slate-950/60 text-slate-300 font-mono border border-white/5"
                    >
                      {tech}
                    </span>
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
