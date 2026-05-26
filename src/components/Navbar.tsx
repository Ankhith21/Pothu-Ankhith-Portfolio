import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Cpu, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data";

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Skills", path: "/skills" },
  { name: "Leadership", path: "/leadership" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/5 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center text-slate-900 font-extrabold text-sm shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all">
              PA
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white font-display group-hover:text-blue-400 transition-colors uppercase">
                Ankhith.Dev
              </span>
              <span className="text-[9px] text-slate-400 font-mono tracking-wider uppercase">
                Cloud & AI Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors rounded-md ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-400"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Social icons + mobile toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3 text-slate-300">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-blue-400 transition-colors"
                title="Email"
              >
                <Mail size={17} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-md focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-3 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider transition-all ${
                        isActive
                          ? "bg-white/5 text-blue-400 border-l-2 border-blue-500 pl-4"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <div className="pt-4 mt-4 border-t border-white/10 flex justify-around text-slate-400">
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center space-x-1.5 hover:text-white"
                >
                  <Linkedin size={16} />
                  <span className="text-xs">LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-1.5 hover:text-white"
                >
                  <Mail size={16} />
                  <span className="text-xs">Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
