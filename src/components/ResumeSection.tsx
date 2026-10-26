import React, { useState } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Cpu,
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-midnight-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prominent Resume Card Container */}
        <div className="glass-card max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl border border-purple-500/30 relative overflow-hidden glow-border">
          
          {/* Radial ambient background inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-600/15 via-indigo-600/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Curriculum Vitae</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">
                Want to Know More <span className="text-gradient">About My Work?</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Explore my resume for a concise overview of my education, technical skills, projects, certifications, and experience.
              </p>

              {/* Quick Summary Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>B.E. in AIML (SJBIT, CGPA 9.04/10)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Multimodal Deep Learning & XAI</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>RAG & Full-Stack CampusFlow App</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>NPTEL Deep Learning & C++ Certified</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Harshita_Laxman_Moger_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/35 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/50 transition-all duration-200"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>View Resume</span>
                </button>
              </div>
            </div>

            {/* Right Mini Graphic Representation */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-52 p-4 rounded-2xl bg-midnight-950/90 border border-purple-500/30 shadow-2xl relative group transform hover:rotate-1 transition-transform">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">PDF Document</span>
                </div>

                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded bg-purple-500/40" />
                  <div className="h-2 w-full rounded bg-slate-700/50" />
                  <div className="h-2 w-5/6 rounded bg-slate-700/50" />
                  <div className="h-2 w-4/6 rounded bg-slate-700/50" />
                  <div className="pt-2 border-t border-slate-800/60" />
                  <div className="h-2 w-full rounded bg-cyan-500/30" />
                  <div className="h-2 w-2/3 rounded bg-slate-700/50" />
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-cyan-300">
                    Harshita_Laxman_Moger.pdf
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* In-Browser PDF Modal Viewer */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-midnight-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl h-[90vh] bg-midnight-900 border border-purple-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-midnight-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-bold text-white">
                  Harshita Laxman Moger — Resume Preview
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Harshita_Laxman_Moger_Resume.pdf"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  aria-label="Close resume viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF iframe */}
            <div className="flex-1 w-full bg-slate-900">
              <iframe
                src={`${PERSONAL_INFO.resumePath}#toolbar=0`}
                className="w-full h-full border-none"
                title="Harshita Laxman Moger Resume"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
