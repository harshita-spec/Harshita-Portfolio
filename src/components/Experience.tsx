import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, FileSpreadsheet, BarChart3, Database } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Applied Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Experience & <span className="text-gradient">Practical Learning</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Real-world data handling, exploratory analysis, and actionable insights extraction.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 pb-12 border-l-2 border-purple-500/30 last:pb-0">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-xl bg-midnight-900 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Briefcase className="w-4 h-4 text-cyan-300" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/60 text-purple-200 border border-purple-500/30">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-cyan-300 mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Deliverables Checklist */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                    Key Deliverables & Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {item.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Used Chips */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Technologies & Methods Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/80 border border-slate-700/60 text-slate-200 hover:border-purple-500/50 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
