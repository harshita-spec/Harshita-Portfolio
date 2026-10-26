import React, { useState } from 'react';
import {
  FolderGit2,
  Github,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'multimodal', label: 'Multimodal AI & XAI' },
    { id: 'fullstack-rag', label: 'Full-Stack & RAG' },
    { id: 'nlp', label: 'NLP & Conversational AI' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-midnight-950/70">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Projects That <span className="text-gradient">Bring Ideas to Life</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Deep learning pipelines, explainable media forensics, retrieval-augmented systems, and end-to-end full-stack applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                selectedFilter === f.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-600/25'
                  : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:shadow-purple-950/40"
            >
              <div className="p-6 sm:p-8">
                
                {/* Category & Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-950/80 text-purple-200 border border-purple-500/30">
                    {project.categoryLabel}
                  </span>
                  
                  {project.liveUrl ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Deployed
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-cyan-300">
                      {project.status.split('(')[0].trim()}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs sm:text-sm font-medium text-purple-300 mb-4 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metrics Strip if available */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-midnight-950/70 border border-purple-500/20 mb-6">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                          {m.label}
                        </span>
                        <span className="text-xs font-bold text-white">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 6 && (
                      <span className="px-2 py-1 rounded-lg text-xs font-mono bg-slate-900/40 text-slate-400">
                        +{project.techStack.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Bottom Card Actions */}
              <div className="px-6 py-4 sm:px-8 bg-midnight-950/80 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                
                {/* Case Study Modal Button */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-white transition-colors group/btn"
                >
                  <span>View Case Study & Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Action Links */}
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                    title="View GitHub Repository"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md shadow-cyan-600/20 hover:from-purple-500 hover:to-cyan-400 transition-all"
                      title="Open Live Deployed Platform"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Case Study Detailed Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
