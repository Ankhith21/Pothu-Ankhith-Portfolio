import { useState, FormEvent } from "react";
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    // Simulate a secure, fast network delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  return (
    <PageTransition>
      <div className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page Section Title */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mx-auto md:mx-0 mt-3" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Quick contact Details Card Column (5 COLS) */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all rounded-2xl p-6 sm:p-7 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold font-display text-white tracking-tight">
                Get In Touch
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light font-sans">
                Feel free to reach out via email, phone, or LinkedIn. Whether it's to discuss cloud infrastructures, artificial intelligence integration, or professional opportunities, I am always open to connecting.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                {/* Email record */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start space-x-3.5 p-3 rounded-xl bg-slate-950/40 hover:bg-slate-950 border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-blue-400 group-hover:text-white transition-all">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Email Address</h4>
                    <p className="text-xs sm:text-sm text-white font-medium mt-0.5 break-all">{personalInfo.email}</p>
                  </div>
                </a>

                {/* Phone record */}
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-start space-x-3.5 p-3 rounded-xl bg-slate-950/40 hover:bg-slate-950 border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-blue-400 group-hover:text-white transition-all">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Direct Phone</h4>
                    <p className="text-xs sm:text-sm text-white font-medium mt-0.5">{personalInfo.phone}</p>
                  </div>
                </a>

                {/* LinkedIn Card Link */}
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-start space-x-3.5 p-3 rounded-xl bg-slate-950/40 hover:bg-slate-950 border border-white/5 hover:border-blue-500/30 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-blue-400 group-hover:text-white transition-all">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400">LinkedIn Profile</h4>
                    <span className="text-xs text-blue-400 group-hover:underline mt-0.5 block">View LinkedIn Page</span>
                  </div>
                </a>

                {/* Location display card */}
                <div className="flex items-start space-x-3.5 p-3 rounded-xl bg-slate-950/40 border border-white/5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-blue-400">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Current Base</h4>
                    <p className="text-xs sm:text-sm text-white font-medium mt-0.5">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Interactive Contact Form (7 COLS) */}
          <div className="md:col-span-7">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-7 shadow-xl">
              {isSuccess ? (
                <div className="text-center py-10 space-y-5 animate-fadeIn">
                  <div className="w-14 h-14 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold font-display text-white tracking-tight">
                      Message Received!
                    </h3>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed font-light">
                      Thank you for contacting Pothu Ankhith. Your inquiry has been sent, and he will connect with you via email shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-white transition-all border border-white/10"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-light">
                  <h3 className="text-lg font-bold font-display text-white tracking-tight">
                    Send a Message
                  </h3>
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label id="lbl-name" htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-slate-950/70 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 hover:border-white/20 transition-all shrink-0"
                    />
                  </div>

                  {/* Email address field */}
                  <div className="space-y-1.5">
                    <label id="lbl-email" htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. johndoe@example.com"
                      className="w-full px-4 py-3 bg-slate-950/70 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 hover:border-white/20 transition-all shrink-0"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label id="lbl-message" htmlFor="message" className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Details of your request or professional proposal..."
                      className="w-full px-4 py-3 bg-slate-950/70 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 hover:border-white/20 transition-all resize-none shrink-0"
                    />
                  </div>

                  {/* Submit CTA button */}
                  <button
                    id="submit-contact-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-5 py-3.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 font-bold text-xs transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer shadow-lg shadow-blue-900/20"
                  >
                    <span>{isSubmitting ? "Delivering Message..." : "Send Message"}</span>
                    {!isSubmitting && <Send size={12} />}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
