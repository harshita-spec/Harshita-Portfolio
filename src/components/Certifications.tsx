import React from 'react';
import { Award, CheckCircle2, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-midnight-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Credentials & Specialized Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Continuous <span className="text-gradient">Learning</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Rigorous certifications earned from premier Indian Institutes of Technology (IIT) via NPTEL.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/80 text-purple-300 border border-purple-500/30">
                    {cert.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Verified NPTEL
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-300 mb-4">
                  {cert.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Topics Covered */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Core Curriculum Concepts:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs bg-slate-900/80 border border-slate-800 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Official NPTEL Examination Completed
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
