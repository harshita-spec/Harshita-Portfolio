import React from 'react';
import {
  Brain,
  Layers,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Award,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO, ABOUT_PILLARS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Brain className="w-3.5 h-3.5 text-cyan-400" />
            <span>Profile & Engineering Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Beyond the <span className="text-gradient">Code</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Bridging theoretical deep learning architectures with explainable, human-centered software engineering.
          </p>
        </div>

        {/* Narrative & Academic Highlights Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span>Engineering Intelligent Systems That People Can Trust</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am an Artificial Intelligence and Machine Learning engineering student at{' '}
                <strong className="text-white font-semibold">SJB Institute of Technology (SJBIT), Bengaluru</strong>. My engineering journey is driven by curiosity: not just how to train deep learning models, but how to understand why they make specific predictions and how to deploy them reliably into real-world workflows.
              </p>
              <p>
                My project work focuses on high-impact domains like{' '}
                <strong className="text-purple-300 font-medium">Multimodal Deepfake Detection</strong>, where I combine spatial facial neural representations with frequency-domain Fourier analysis and Grad-CAM interpretability, and{' '}
                <strong className="text-cyan-300 font-medium">CampusFlow with NexusAI</strong>, a deployed academic platform utilizing Retrieval-Augmented Generation (RAG) to ground LLM answers strictly on verified course lecture notes.
              </p>
              <p>
                Whether dissecting cross-attention fusion weights or optimizing data pipelines during my internship at iStudio, I bring rigorous analytical problem-solving, clean code architecture, and a commitment to continuous learning.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="mt-6 pt-6 border-t border-purple-500/15 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">Model Interpretability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">Data Integrity & EDA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">Full-Stack Integration</span>
              </div>
            </div>
          </div>

          {/* Academic Distinction Card (Verified 9.04 CGPA) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* CGPA Feature Card */}
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-cyan-500/30 relative overflow-hidden glow-border">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Academic Standing
                </span>
                <span className="text-xs font-mono text-slate-400">Sep 2023 – Present</span>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                  9.04
                </span>
                <span className="text-lg font-bold text-slate-400">/ 10 CGPA</span>
              </div>

              <h4 className="text-base font-bold text-white mb-1">
                B.E. in Artificial Intelligence & Machine Learning
              </h4>
              <p className="text-xs text-purple-300 font-medium mb-4">
                SJB Institute of Technology (SJBIT), Bengaluru
              </p>

              <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                Maintained top academic standing across engineering curriculum, mastering Data Structures & Algorithms, Deep Learning, Computer Vision, and Database Systems.
              </p>
            </div>

            {/* Technical Certifications Highlight */}
            <div className="glass-card p-5 rounded-2xl border border-purple-500/25 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-purple-900/40 border border-purple-500/40 text-purple-300 shrink-0">
                <Award className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">NPTEL Certified in Deep Learning & C++</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    IIT Kharagpur / IIT
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Rigorous academic certification in Deep Learning for Computer Vision and Introduction to Modern C++, grounding theoretical knowledge in practical implementation.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Visual Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`glass-card p-6 rounded-2xl border ${pillar.border} hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} border ${pillar.border} flex items-center justify-center mb-5`}>
                {pillar.icon === 'Layers' && <Layers className={`w-6 h-6 ${pillar.accent}`} />}
                {pillar.icon === 'ShieldCheck' && <ShieldCheck className={`w-6 h-6 ${pillar.accent}`} />}
                {pillar.icon === 'Sparkles' && <Sparkles className={`w-6 h-6 ${pillar.accent}`} />}
                {pillar.icon === 'Server' && <Terminal className={`w-6 h-6 ${pillar.accent}`} />}
              </div>

              <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
