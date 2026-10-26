import React from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  Sparkles,
  Cpu,
  ShieldCheck,
  BrainCircuit,
  Eye,
  GraduationCap,
  Award
} from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_STATS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Identity & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 backdrop-blur-md mb-6 shadow-sm shadow-purple-900/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-purple-200 tracking-wide">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              Hi, I'm{' '}
              <span className="text-gradient">
                Harshita Laxman Moger
              </span>
            </h1>

            {/* Professional Subtitle */}
            <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent mb-5">
              {PERSONAL_INFO.title}
            </p>

            {/* Narrative Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              I’m an Artificial Intelligence and Machine Learning engineering student at{' '}
              <span className="text-white font-medium">SJB Institute of Technology (SJBIT)</span>, passionate about building intelligent systems, exploring multimodal deep learning, and engineering explainable AI applications. From detecting synthetic media to grounding LLM agents on academic curricula, I bridge deep learning research with production-grade software.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/35 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Harshita_Laxman_Moger_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-purple-500/30 hover:border-cyan-400/50 shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Social Channels */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono mr-1">
                Connect:
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/60 hover:bg-purple-950/30 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/60 hover:bg-cyan-950/30 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/60 hover:bg-amber-950/30 transition-all"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/60 hover:bg-purple-950/30 transition-all"
                aria-label="Email Harshita"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Real Portrait Photo with Glow Ring & Floating Tech Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 md:w-96">
              
              {/* Radial Backdrop Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-cyan-500/30 rounded-3xl blur-3xl -z-10 scale-95 animate-pulse-slow" />

              {/* Gradient Border Frame */}
              <div className="relative p-1.5 rounded-3xl bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-400 shadow-2xl shadow-purple-900/50">
                {/* Inner Container */}
                <div className="relative rounded-[22px] overflow-hidden bg-midnight-900 aspect-[4/5] group">
                  <img
                    src={PERSONAL_INFO.photoPath}
                    alt="Harshita Laxman Moger - AI/ML Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Dark Vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Name pill inside frame */}
                  <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-midnight-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide">Harshita L. Moger</p>
                      <p className="text-[10px] font-mono text-cyan-300">SJBIT Bengaluru • CGPA 9.04</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE 1: Deep Learning & PyTorch (Top-Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-midnight-900/90 border border-purple-500/40 backdrop-blur-xl shadow-xl shadow-purple-950/40 flex items-center gap-2 animate-float">
                <BrainCircuit className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-semibold text-slate-100 whitespace-nowrap">
                  PyTorch & Deep Learning
                </span>
              </div>

              {/* FLOATING BADGE 2: Explainable AI (Bottom-Left) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-midnight-900/90 border border-cyan-500/40 backdrop-blur-xl shadow-xl shadow-cyan-950/40 flex items-center gap-2 animate-float-reverse">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-100 whitespace-nowrap">
                  Explainable AI (Grad-CAM)
                </span>
              </div>

              {/* FLOATING BADGE 3: RAG & LLMs (Top-Left) */}
              <div className="absolute top-1/4 -left-6 sm:-left-8 px-3 py-1.5 rounded-lg bg-midnight-900/90 border border-indigo-500/30 backdrop-blur-md shadow-lg hidden sm:flex items-center gap-1.5 animate-float">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-[11px] font-semibold text-slate-200">
                  RAG & LLM Agents
                </span>
              </div>

              {/* FLOATING BADGE 4: Computer Vision (Bottom-Right) */}
              <div className="absolute bottom-1/4 -right-6 sm:-right-8 px-3 py-1.5 rounded-lg bg-midnight-900/90 border border-teal-500/30 backdrop-blur-md shadow-lg hidden sm:flex items-center gap-1.5 animate-float-reverse">
                <Eye className="w-3.5 h-3.5 text-teal-400" />
                <span className="text-[11px] font-semibold text-slate-200">
                  Computer Vision
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM HIGHLIGHT STATS STRIP */}
        <div className="mt-16 pt-8 border-t border-purple-500/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {HIGHLIGHT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-4 rounded-2xl border border-purple-500/15 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                {stat.icon === 'GraduationCap' && <GraduationCap className="w-4 h-4" />}
                {stat.icon === 'Code2' && <Code2 className="w-4 h-4 text-cyan-400" />}
                {stat.icon === 'Cpu' && <Cpu className="w-4 h-4 text-indigo-400" />}
                {stat.icon === 'Award' && <Award className="w-4 h-4 text-amber-400" />}
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
              <p className="text-2xl font-black text-white tracking-tight">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
