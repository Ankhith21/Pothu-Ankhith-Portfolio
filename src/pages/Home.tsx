import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Mail, Cpu, Award, BookOpen, Layers, CheckCircle2, Download } from "lucide-react";
import { personalInfo } from "../data";
import PageTransition from "../components/PageTransition";
import ProfileImage from "../components/ProfileImage";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <PageTransition>
      <div className="relative min-h-[90vh] flex items-center justify-center py-10 overflow-hidden">
        {/* Animated ambient background orbs from Frosted Glass Theme */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/10 left-[-10%] w-[45%] h-[45%] bg-blue-600 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-cyan-700 rounded-full blur-[140px]" />
        </div>
        
        {/* Subtle grid network lines */}
        <div className="absolute inset-0 cyber-grid opacity-35 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: Hero Introduction */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
              {/* Opportunities Pill */}
              <motion.div 
                variants={itemVariants} 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>Available for Opportunities</span>
              </motion.div>

              {/* Title & Name */}
              <motion.h1 
                variants={itemVariants}
                className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-white"
              >
                POTHU <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                  ANKHITH
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-lg sm:text-xl text-slate-300 font-light max-w-xl leading-relaxed"
              >
                MS Computer Science student at OCU. <span className="text-white font-semibold">Cloud & AI Enthusiast</span> specializing in building scalable architectures and intelligent deep learning systems.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  to="/projects"
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/30 text-center flex items-center justify-center space-x-2 cursor-pointer shrink-0"
                >
                  <span>View My Work</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all backdrop-blur-sm text-center flex items-center justify-center space-x-2 text-white shrink-0"
                >
                  <Mail size={16} className="text-blue-400" />
                  <span>Contact Me</span>
                </Link>
                <Link
                  to="/resume"
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-500/10 to-transparent hover:from-blue-500/15 border border-blue-500/30 hover:border-blue-400/40 rounded-xl font-bold transition-all text-center flex items-center justify-center space-x-2 text-blue-400 shrink-0 cursor-pointer"
                >
                  <Download size={16} />
                  <span>View & Download Resume</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Interactive Snaps & Capability cards */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              {/* Profile Photo Snapshot */}
              <motion.div 
                variants={itemVariants}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all flex items-center space-x-5"
              >
                <div className="w-20 h-20 rounded-full border-2 border-blue-500/40 p-1 flex-shrink-0">
                  <ProfileImage />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg tracking-tight">Pothu Ankhith</h3>
                  <p className="text-xs text-blue-400 font-mono tracking-wide">{personalInfo.email}</p>
                  <p className="text-xs text-slate-300 mt-1 sm:mt-1.5 font-light leading-relaxed">
                    MS Computer Science | OCU Grad Honors
                  </p>
                </div>
              </motion.div>

              {/* Core Capabilities Snapshot */}
              <motion.div 
                variants={itemVariants}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all"
              >
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Capabilities</h3>
                <div className="flex flex-wrap gap-2.5">
                  <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300 font-medium">Java</span>
                  <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300 font-medium">Python</span>
                  <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300 font-medium">AWS</span>
                  <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300 font-medium">GCP</span>
                  <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300 font-medium">SQL</span>
                  <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300 font-medium">GenAI</span>
                  <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300 font-medium">React</span>
                </div>
              </motion.div>

              {/* Education Snapshot Card */}
              <motion.div 
                variants={itemVariants}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all"
              >
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Education Snapshot</h3>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <BookOpen className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">MS Computer Science</p>
                    <p className="text-sm text-slate-400">Oklahoma City University</p>
                    <div className="flex items-center space-x-2 mt-1.5">
                      <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-[10px] text-blue-300 font-mono font-bold">GPA 3.70</span>
                      <span className="px-2 py-0.5 bg-teal-500/10 border border-teal-500/20 rounded-md text-[10px] text-teal-300 font-mono">High Honors</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Recent Project Promo Card */}
              <motion.div 
                variants={itemVariants}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/30 backdrop-blur-xl relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-all" />
                
                <div className="flex justify-between items-start mb-2 relative z-10">
                  <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest flex items-center gap-1">
                    <Layers size={11} /> Featured Project
                  </span>
                  <Link to="/projects" className="text-blue-300 group-hover:text-white transition-colors">
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <h4 className="font-bold text-white text-lg relative z-10 transition-colors group-hover:text-blue-300">
                  Chest X-Ray Disease Detection
                </h4>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed relative z-10 font-light">
                  Deep Learning solution using CNNs and GoogLeNet to automate anatomical pathology classifications from chest radiographs.
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
