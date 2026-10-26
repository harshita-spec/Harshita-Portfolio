import React, { useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  GitBranch,
  Terminal,
  Activity
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-midnight-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-midnight-900 border border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-950/80 overflow-y-auto z-10 flex flex-col my-auto">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 px-6 py-5 bg-midnight-900/95 backdrop-blur-xl border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/80 text-purple-300 border border-purple-500/30">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-mono text-cyan-300 hidden sm:inline">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base text-cyan-300 font-medium leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Key Metrics / Highlights Bar */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-midnight-950/80 border border-purple-500/20">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-center sm:text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                    {m.label}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Links & Live Preview actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50 transition-all shadow-sm"
            >
              <Github className="w-4 h-4 text-purple-400" />
              <span>View Source on GitHub</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-md shadow-cyan-600/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Platform</span>
              </a>
            )}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-red-500/20">
              <h3 className="text-sm font-bold text-red-300 mb-2 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                The Problem
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-emerald-500/20">
              <h3 className="text-sm font-bold text-emerald-300 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                The Engineered Solution
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* SYSTEM ARCHITECTURE PIPELINE */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-purple-400" />
              <h3 className="text-base font-bold text-white tracking-tight">
                System Architecture & Execution Pipeline
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.architectureFlow.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-2xl bg-midnight-950/70 border border-purple-500/20 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-lg bg-purple-900/60 text-cyan-300 border border-purple-500/40 text-xs font-mono font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block" />
                    </div>
                    <h4 className="text-xs font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-[11px] text-purple-300 font-medium mb-2">{step.description}</p>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
                    {step.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MODELS, ALGORITHMS & TECH STACK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-purple-500/20">
              <h3 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                Models, Algorithms & Techniques
              </h3>
              <ul className="space-y-2">
                {project.modelsAndAlgorithms.map((algo, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{algo}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/50 border border-purple-500/20">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                Technology Stack Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-midnight-950 border border-slate-800 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* INDIVIDUAL CONTRIBUTIONS */}
          <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/30">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              My Individual Contributions & Engineering Work
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.contributions.map((c, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CHALLENGES & LIMITATIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                Technical Challenges Overcome
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((ch, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-cyan-400" />
                Current Limitations & Future Directions
              </h3>
              <ul className="space-y-2">
                {project.limitations.map((lim, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verified Accuracy / Scientific Disclaimer Note */}
          {project.verifiedAccuracyNote && (
            <div className="p-4 rounded-xl bg-midnight-950 border border-cyan-500/30 text-xs text-slate-300 flex items-start gap-3">
              <Activity className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Validation Notice:</strong> {project.verifiedAccuracyNote}
              </span>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-midnight-950/80 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Portfolio of Harshita Laxman Moger
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
