import React from 'react';
import { Award, Code2, GraduationCap, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS, PERSONAL_INFO } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Demonstrated Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Milestones & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Tangible benchmarks across competitive problem-solving, statewide examinations, and engineering academics.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.title}
              className={`glass-card p-6 rounded-3xl border ${
                item.highlight ? 'border-cyan-500/30 glow-border' : 'border-purple-500/20'
              } hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
            >
              <div>
                {/* Metric Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-midnight-900 border border-purple-500/30 group-hover:border-cyan-400/40 transition-colors">
                    {item.icon === 'Code2' && <Code2 className="w-5 h-5 text-amber-400" />}
                    {item.icon === 'Award' && <Award className="w-5 h-5 text-cyan-400" />}
                    {item.icon === 'GraduationCap' && <GraduationCap className="w-5 h-5 text-purple-400" />}
                    {item.icon === 'BookOpen' && <BookOpen className="w-5 h-5 text-teal-400" />}
                  </div>

                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-purple-950/80 text-cyan-300 border border-purple-500/30">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-purple-300 font-medium mb-3">
                  {item.category}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Special link for LeetCode */}
              {item.icon === 'Code2' && (
                <div className="mt-5 pt-3 border-t border-slate-800">
                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>View LeetCode Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
