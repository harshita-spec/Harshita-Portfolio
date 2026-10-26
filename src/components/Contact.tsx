import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code2,
  Copy,
  Check,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    interest: 'AI/ML Internship Opportunity',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch & construct mailto link as backup
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formState.interest} from ${formState.name}`);
      const body = encodeURIComponent(
        `Hi Harshita,\n\n${formState.message}\n\nBest regards,\n${formState.name}\n${formState.email}`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Initiate Connection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let's Build <span className="text-gradient">Something Meaningful</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            I’m interested in AI/ML internships, graduate opportunities, collaborative projects, and opportunities to build useful technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* LEFT: Contact Cards & Direct Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Email Card with 1-click Copy */}
            <div className="glass-card p-6 rounded-3xl border border-purple-500/30 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-900/40 border border-purple-500/40 text-purple-300">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-midnight-950 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-950/40 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Direct Email
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Direct Phone & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-purple-500/20">
                <div className="flex items-center gap-2.5 text-cyan-400 mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Phone</span>
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-purple-500/20">
                <div className="flex items-center gap-2.5 text-teal-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Location</span>
                </div>
                <p className="text-sm font-bold text-white">
                  Bengaluru, India
                </p>
              </div>
            </div>

            {/* Social Network Tiles */}
            <div className="glass-card p-6 rounded-3xl border border-purple-500/20">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Verified Developer Profiles
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-midnight-950 border border-slate-800 text-center flex flex-col items-center gap-1.5 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-medium text-slate-300">LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-midnight-950 border border-slate-800 text-center flex flex-col items-center gap-1.5 hover:border-purple-400/50 hover:bg-purple-950/20 transition-all group"
                >
                  <Github className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-medium text-slate-300">GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-midnight-950 border border-slate-800 text-center flex flex-col items-center gap-1.5 hover:border-amber-400/50 hover:bg-amber-950/20 transition-all group"
                >
                  <Code2 className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-medium text-slate-300">LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Functional Interactive Contact Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/25 relative overflow-hidden">
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Recruiters, engineering managers, and collaborators: fill in the details below to connect directly with Harshita.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Message Prepared</h4>
                <p className="text-xs sm:text-sm text-slate-300 mb-4">
                  Thank you! Your default email client has been opened to dispatch this inquiry. Harshita typically responds within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 hover:bg-emerald-900/60 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Chen"
                      className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 transition-colors outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 transition-colors outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Opportunity / Inquiry Type
                  </label>
                  <select
                    value={formState.interest}
                    onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white transition-colors outline-none"
                  >
                    <option value="AI/ML Internship Opportunity">AI/ML Internship Opportunity</option>
                    <option value="Full-Time / Graduate Opportunity">Full-Time / Graduate Opportunity</option>
                    <option value="Research & Multimodal Collaboration">Research & Multimodal Collaboration</option>
                    <option value="Technical Discussion & Networking">Technical Discussion & Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe the opportunity, role requirements, or project you'd like to collaborate on..."
                    className="w-full px-4 py-3 rounded-xl bg-midnight-950/80 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 transition-colors outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>{isSubmitting ? 'Preparing Transmission...' : 'Transmit Message'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
