import { Mail, Linkedin, Globe, Phone, MapPin } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/50 backdrop-blur-sm border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/5">
          <div>
            <h3 className="text-white font-bold font-display tracking-tight text-lg uppercase">
              {personalInfo.name}
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Mail size={14} className="text-blue-400" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone size={14} className="text-blue-400" />
              <span>{personalInfo.phone}</span>
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Linkedin size={14} className="text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center space-x-1.5 text-slate-400">
              <MapPin size={14} className="text-blue-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 text-[11px] text-slate-500 font-mono">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Handcrafted with React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
