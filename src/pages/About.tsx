import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { personalInfo } from "../data";
import { Award, GraduationCap, Cloud, Brain, CheckCircle2, Download } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ProfileImage from "../components/ProfileImage";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="text-blue-400" size={20} />,
      title: "Academic Excellence",
      detail: "GPA 3.70 with Graduate High Honors (MS CS)",
    },
    {
      icon: <Award className="text-blue-400" size={20} />,
      title: "B.Tech Honours",
      detail: "First Class with Distinction (CS & IT)",
    },
    {
      icon: <Cloud className="text-blue-400" size={20} />,
      title: "Cloud Infrastructure",
      detail: "AWS & GCP automation credentials",
    },
    {
      icon: <Brain className="text-blue-400" size={20} />,
      title: "AI & Machine Learning",
      detail: "GoogLeNet CNNs, Deep Learning on Chest X-Rays",
    },
  ];

  return (
    <PageTransition>
      <div className="py-24 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Page Section Title */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mx-auto md:mx-0 mt-3" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Circular avatar graphic container (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-slate-800 to-cyan-400 shadow-[0_0_50px_rgba(59,130,246,0.15)] flex items-center justify-center glow-effect mb-6"
            >
              <div className="w-full h-full bg-slate-950 rounded-full relative overflow-hidden p-1 group">
                <ProfileImage />
              </div>
            </motion.div>
            
            <div className="text-center font-mono text-xs text-slate-400 space-y-4 w-full px-4">
              <div className="space-y-1">
                <p>Based in:</p>
                <p className="text-white font-sans text-sm font-medium">{personalInfo.location}</p>
              </div>
              <div className="pt-2">
                <Link
                  to="/resume"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-650 hover:from-blue-500 hover:to-cyan-455 hover:scale-[1.02] text-white font-bold text-xs transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download size={14} />
                  <span>View & Download Resume</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Core Biography column (8 cols) */}
          <div className="md:col-span-8 space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light">
                {personalInfo.summary}
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 font-light">
                I strongly believe in creating robust computing frameworks that align security, performance, and continuous delivery. Throughout my academic timeline, I have researched dynamic relational database optimization, integrated modular micro-services, and adapted deep convolutional networks for medical image analysis.
              </p>
            </div>

            {/* Core Highlights Grid */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-white font-bold font-display mb-4 text-base tracking-tight uppercase">
                Key Technical Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3.5 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 hover:bg-white/8 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-slate-950/60 border border-white/10 flex items-center justify-center shrink-0">
                      {h.icon}
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-white tracking-widest uppercase font-mono">
                        {h.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed font-light">
                        {h.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
}
