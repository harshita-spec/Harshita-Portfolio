import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-midnight-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Formal Training & Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Rigorous engineering studies in Artificial Intelligence & Machine Learning, backed by strong analytical foundations.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main B.E. Degree Card */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/25 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/10 rounded-bl-full pointer-events-none" />

            <div>
              {/* Institution & Degree */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/80 text-purple-200 border border-purple-500/30">
                  Undergraduate Engineering
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {EDUCATION_ITEMS[0].period}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1">
                {EDUCATION_ITEMS[0].degree}
              </h3>
              <p className="text-base font-semibold text-cyan-300 flex items-center gap-2 mb-4">
                <span>{EDUCATION_ITEMS[0].institution}</span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-teal-400" />
                  {EDUCATION_ITEMS[0].location}
                </span>
              </p>

              {/* CGPA Feature Highlight */}
              <div className="p-4 rounded-2xl bg-midnight-900/80 border border-cyan-500/30 mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {EDUCATION_ITEMS[0].scoreLabel}
                  </p>
                  <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                    {EDUCATION_ITEMS[0].score}
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Distinction Standing
                  </span>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                  Key Academic Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION_ITEMS[0].coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg text-xs bg-slate-900/70 border border-slate-800 text-slate-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="pt-4 border-t border-slate-800/80">
              <ul className="space-y-2">
                {EDUCATION_ITEMS[0].highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pre-University Card & Academic Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* PUC Education Card */}
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-purple-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-700">
                    Pre-University Education
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {EDUCATION_ITEMS[1].period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {EDUCATION_ITEMS[1].degree}
                </h3>
                <p className="text-xs font-semibold text-purple-300 mb-4">
                  {EDUCATION_ITEMS[1].institution}, {EDUCATION_ITEMS[1].location}
                </p>

                {/* Score */}
                <div className="p-3.5 rounded-xl bg-midnight-900/70 border border-purple-500/20 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Board Aggregate</span>
                    <p className="text-2xl font-black text-white">{EDUCATION_ITEMS[1].score}</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    High Distinction
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {EDUCATION_ITEMS[1].coursework.map((c) => (
                    <span key={c} className="px-2 py-0.5 rounded text-[11px] bg-slate-900/60 text-slate-300 border border-slate-800">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Established deep foundational strength in advanced mathematics, analytical reasoning, physics principles, and introductory algorithm logic.
                </p>
              </div>
            </div>

            {/* Academic Philosophy Callout */}
            <div className="glass-card p-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 via-slate-900/40 to-purple-950/30 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Consistent Academic Discipline</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Combining top academic performance (9.04 CGPA & 93.83% PUC) with proactive extracurricular software development and 100+ algorithmic problem-solving milestones.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
