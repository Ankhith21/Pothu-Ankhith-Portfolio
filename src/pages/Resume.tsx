import { useState } from "react";
import { Printer, Download, ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { personalInfo, educationData, experienceData, projectsData, certificationsData, skillsData, leadershipData } from "../data";
import PageTransition from "../components/PageTransition";

// Convert browser computed oklch() color strings to standard rgb()/rgba() format
// so html2canvas doesn't crash on CSS Color Module Level 4 syntax (introduced extensively in Tailwind CSS v4)
function convertOklchStrings(str: string): string {
  if (!str || typeof str !== "string") return str;
  if (!str.includes("oklch")) return str;

  // Regex to match any oklch(L C H) or oklch(L C H / A) color pattern globally
  return str.replace(/oklch\(\s*([\d.]+%?)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\s*\)/gi, (m, lStr, cStr, hStr, aStr) => {
    try {
      let L = parseFloat(lStr);
      if (lStr.endsWith("%")) {
        L /= 100;
      }
      const C = parseFloat(cStr);
      const H = parseFloat(hStr);
      const A = aStr !== undefined ? parseFloat(aStr) : 1;

      // Convert OKLCH to OKLAB
      const hRad = (H * Math.PI) / 180;
      const oklabA = C * Math.cos(hRad);
      const oklabB = C * Math.sin(hRad);

      // Convert OKLAB to LMS
      const l = L + 0.3963377774 * oklabA + 0.2158037573 * oklabB;
      const m = L - 0.1055613458 * oklabA - 0.0638541728 * oklabB;
      const s = L - 0.0894841775 * oklabA - 1.2914855480 * oklabB;

      // Non-linear LMS
      const l3 = l * l * l;
      const m3 = m * m * m;
      const s3 = s * s * s;

      // LMS to Linear RGB
      const rLin =  4.0767245293 * l3 - 3.3072168827 * m3 + 0.2307590544 * s3;
      const gLin = -1.2681437731 * l3 + 2.6093323202 * m3 - 0.3411344290 * s3;
      const bLin = -0.0041119885 * l3 - 0.7034763098 * m3 + 1.7068272510 * s3;

      // Linear RGB to standard gamma sRGB channels
      const toSRGB = (c: number) => {
        if (c <= 0.0031308) {
          return Math.max(0, Math.min(255, Math.round(12.92 * c * 255)));
        } else {
          return Math.max(0, Math.min(255, Math.round((1.055 * Math.pow(c, 1 / 2.4) - 0.055) * 255)));
        }
      };

      const r = toSRGB(rLin);
      const g = toSRGB(gLin);
      const b = toSRGB(bLin);

      if (A === 1) {
        return `rgb(${r}, ${g}, ${b})`;
      } else {
        return `rgba(${r}, ${g}, ${b}, ${A})`;
      }
    } catch (e) {
      console.warn("Failed to parse oklch color:", m, e);
      return m;
    }
  });
}

const colorProperties = [
  "color",
  "backgroundColor",
  "borderColor",
  "borderTopColor",
  "borderBottomColor",
  "borderLeftColor",
  "borderRightColor",
  "fill",
  "stroke",
  "backgroundImage",
  "boxShadow"
];

export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById("resume-document");
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        onclone: (clonedDoc) => {
          // Locate all elements inside cloned DOM and convert oklch colors to standard rgb() inline style overrides
          const allElements = clonedDoc.querySelectorAll("*");
          allElements.forEach((el) => {
            const htmlEl = el as HTMLElement;
            const computed = window.getComputedStyle(htmlEl);
            colorProperties.forEach((prop) => {
              const val = computed[prop as any];
              if (val && typeof val === "string" && val.includes("oklch")) {
                try {
                  const converted = convertOklchStrings(val);
                  htmlEl.style[prop as any] = converted;
                } catch (e) {
                  console.error("Failed to inline clean color:", prop, val, e);
                }
              }
            });
          });
        },
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
        heightLeft -= pageHeight;
      }

      pdf.save("Pothu_Ankhith_Resume.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-950 text-slate-100 py-12 md:py-24 print:bg-white print:text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Top Info Bar - Hidden when printing */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-xl mb-8 gap-4 print:hidden">
            <Link to="/about" className="flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-white transition-colors">
              <ArrowLeft size={14} className="text-blue-400" />
              <span>Back to Portfolio</span>
            </Link>
            
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold text-xs flex items-center space-x-2 cursor-pointer transition-all shadow-lg shadow-blue-500/25 border border-blue-500/20"
              >
                {isDownloading ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Generating PDF...</span>
                  </>
                ) : (
                  <>
                    <Download size={14} />
                    <span>Download Resume PDF</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Clean Resume Layout: Styled to look like a premium paper resume on print, and styled minimally for web */}
          <div id="resume-document" className="bg-white text-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl print:shadow-none print:p-0 border border-slate-200 print:border-none">
            
            {/* Header section matching PDF */}
            <div className="text-center space-y-2 pb-6 border-b border-slate-200">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 uppercase">
                {personalInfo.name}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-600 sm:text-sm">
                <a href={`mailto:${personalInfo.email}`} className="hover:underline text-blue-600 print:text-slate-700">
                  {personalInfo.email}
                </a>
                <span className="text-slate-400">•</span>
                <span>{personalInfo.phone}</span>
                <span className="text-slate-400">•</span>
                <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 print:text-slate-700">
                  linkedin.com/in/pothu-ankhith-099275254/
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="py-6 border-b border-slate-200 space-y-2">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase sm:text-sm">
                Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                {personalInfo.summary}
              </p>
            </div>

            {/* Education */}
            <div className="py-6 border-b border-slate-200 space-y-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase sm:text-sm">
                Education
              </h2>
              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 print:bg-slate-400 shrink-0" />
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-950 uppercase">
                          {edu.institution}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium ml-3.5 italic mt-0.5">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-slate-500 ml-3.5 mt-1 font-light sm:block hidden">
                        <strong>Coursework:</strong> {edu.coursework.join(", ")}
                      </p>
                    </div>
                    <div className="text-right sm:block flex justify-between ml-3.5 sm:ml-0 text-xs text-slate-500">
                      <p className="font-medium text-slate-800">{edu.duration}</p>
                      <p className="font-mono text-[11px] sm:mt-0.5 text-blue-700 print:text-slate-600">
                        GPA: {edu.gpa} {edu.honors && `| ${edu.honors}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="py-6 border-b border-slate-200 space-y-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase sm:text-sm">
                Experience
              </h2>
              <div className="space-y-4">
                {experienceData.map((exp, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 print:bg-slate-400 shrink-0" />
                          <h3 className="text-xs sm:text-sm font-extrabold text-slate-950 uppercase">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 ml-3.5 font-medium italic mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm text-right ml-3.5 sm:ml-0 text-slate-500 font-semibold italic">
                        {exp.duration}
                      </p>
                    </div>
                    <ul className="list-disc list-outside ml-8 sm:ml-9 text-xs sm:text-sm text-slate-700 space-y-1.5 font-light">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Projects */}
            <div className="py-6 border-b border-slate-200 space-y-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase sm:text-sm">
                Academic Projects
              </h2>
              <div className="space-y-4">
                {projectsData.map((project, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 print:bg-slate-400 shrink-0" />
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-950 uppercase tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                    <div className="ml-3.5 space-y-1">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                        {project.description}
                      </p>
                      <p className="text-[11px] font-mono text-slate-500">
                        <strong>Tech:</strong> {project.techStack.join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="py-6 border-b border-slate-200 space-y-3">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase sm:text-sm">
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 ml-3.5 text-xs sm:text-sm text-slate-700 font-light">
                {certificationsData.map((cert, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-blue-500 print:text-slate-400 font-bold">•</span>
                    <span>{cert.name} <span className="text-slate-400 font-mono text-[10px] sm:text-xs">({cert.issuer})</span></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="py-6 border-b border-slate-200 space-y-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase sm:text-sm">
                Technical & Professional Skills
              </h2>
              <div className="space-y-2 ml-3.5">
                {skillsData.map((cat, idx) => (
                  <div key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                    <strong className="font-semibold text-slate-950">{cat.title}:</strong> {cat.skills.join(", ")}
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Volunteering */}
            <div className="py-6 space-y-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase sm:text-sm">
                Student Leadership & Volunteer Work
              </h2>
              <div className="space-y-3">
                {leadershipData.map((lead, idx) => (
                  <div key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 print:bg-slate-400 shrink-0" />
                        <h4 className="font-extrabold text-slate-950 uppercase">{lead.role}</h4>
                      </div>
                      <span className="font-mono text-[11px] text-slate-500 sm:ml-0 ml-3.5">{lead.duration}</span>
                    </div>
                    <p className="ml-3.5 sm:mt-0.5 text-slate-600">{lead.description}</p>
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
