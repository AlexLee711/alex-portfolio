import React from 'react';
import { 
  Mail, 
  ExternalLink, 
  FileText, 
  Layers, 
  Database, 
  Cloud,
  Code2, 
  Layout, 
  ArrowUpRight,
  Briefcase
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight hover:text-blue-600 transition-colors">
            Alex (Yi-Chian) Lee<span className="text-blue-600">.</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors hidden sm:block">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors hidden sm:block">Skills</a>
            <a 
              href="https://drive.google.com/file/d/1TOoQjE9qw4tV5X16oRNRvylJ6K2pRT_v/view?usp=sharing" 
              target="_blank" 
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24">
        
        {/* 2. Hero Section */}
        <section id="about" className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100/80 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            MSIS @ UNC Chapel Hill · Open to SDE, DS, UI/UX Opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Bridging <span className="text-blue-600">Frontend Engineering</span>, User-Centered Design, Data-Driven Web Experiences, and Full-Stack Development.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            I am Yi-Chian (Alex), a graduate developer passionate about architecting intuitive web applications and scalable data pipelines. Currently working as a Graduate Full-Stack Assistant at UNC&apos;s <a href="https://www.icdcu.org/home" className="underline hover:text-blue-600">iCDCU Lab</a>.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#projects" 
              className="px-5 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 shadow-sm shadow-blue-500/20 transition-all"
            >
              Explore Projects
            </a>
            <a 
              href="mailto:yal1753@unc.edu" 
              className="px-5 py-2.5 border border-slate-300 font-medium text-sm rounded-lg hover:bg-slate-100 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-slate-600" />
              Contact Me
            </a>
            <div className="flex items-center gap-2 pl-2">
              <a 
                href="https://github.com/AlexLee711" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center justify-center"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              <a 
                href="https://www.linkedin.com/in/yi-chian-lee-b3ab68331" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 3. Professional Experience */}
        <section id="experience" className="space-y-8">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
              <Briefcase className="w-4 h-4" />
              Career Journey
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">Professional Experience</h2>
            <p className="text-sm text-slate-500 mt-1">Research, industry internships, and software engineering roles.</p>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-3 space-y-10 pl-6">
            
            {/* Experience Item 1: UNC iCDCU Lab */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white bg-blue-600 shadow-sm" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  Graduate Full-Stack Assistant · <span className="text-blue-600 font-medium">UNC Chapel Hill (iCDCU Lab)</span>
                </h3>
                <span className="text-xs font-semibold text-slate-500">Jan 2026 – Present</span>
              </div>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Spearheading full-stack data platform enhancements for HIRConnect and ResDash platforms. Automating offline SQLite-to-PostgreSQL database synchronization workflows, implementing responsive analytics tables, and maintaining scalable cloud data pipelines.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {['Full-Stack Development', 'Cloud Migration', 'Data Pipelines', 'Analytics Dashboard'].map((tech) => (
                  <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Item 2: NTUCC Internship */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white bg-teal-600 shadow-sm" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-bold text-slate-900">
                    Healthcare Information Technology Intern · <span className="text-teal-600 font-medium">NTU Cancer Center (NTUCC)</span> · Taipei, Taiwan
                  </h3>
                  <a 
                    href="https://alexlee20010711.wixsite.com/index/en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded bg-teal-50 text-teal-700 border border-teal-200 hover:bg-teal-100 transition-all shrink-0"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Portfolio Site
                  </a>
                </div>
                <span className="text-xs font-semibold text-slate-500 whitespace-nowrap shrink-0 sm:pt-1">
                  Feb 2021 – Feb 2022
                </span>
              </div>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Conducted medical informatics workflow evaluations, clinical system requirements discovery, and usability design assessments for hospital operational tools. Documented digital transformation findings in a dedicated interactive case study web showcase.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {['Health Informatics', 'Process Analysis', 'System Design', 'Usability Assessment'].map((tech) => (
                  <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 4. Featured Projects */}
        <section id="projects" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
            <p className="text-sm text-slate-500 mt-1">A showcase of full-stack apps, data mining tools, and system architecture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Michelin Web App */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">
                    Data Mining & Web App
                  </span>
                  <a 
                    href="https://michelin-audit.streamlit.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 group-hover:text-blue-600 transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-4 group-hover:text-blue-600 transition-colors">
                  Michelin Guide Analytics Web App
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Interactive multi-page data exploration application uncovering global Michelin rating criteria, cuisine trends, and pricing correlations.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['Python', 'Streamlit', 'Pandas', 'Data Mining'].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                <a 
                  href="https://michelin-audit.streamlit.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live App
                </a>
              </div>
            </div>

            {/* Card 2: Community Management System */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    Web Development
                  </span>
                  <a 
                    href="https://yichian-community-management-portal.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 group-hover:text-blue-600 transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-4 group-hover:text-blue-600 transition-colors">
                  Community Management Portal
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Engineered role-based access control portal supporting residential utility payments, amenity reservations, and administrative request workflows.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['Python', 'Django', 'SQLite', 'REST APIs', 'Bootstrap'].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                <a 
                  href="https://yichian-community-management-portal.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live App
                </a>
                <span className="text-slate-400">Full-Stack Architecture</span>
              </div>
            </div>

            {/* Card 3: Launch Labs Architecture */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-purple-50 text-purple-700 border border-purple-200">
                    Systems Analysis & UX
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-4 group-hover:text-purple-600 transition-colors">
                  Ignite Client Onboarding Architecture
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Diagnosed onboarding bottlenecks for Launch Labs MarTech platform using Contextual Inquiry. Formulated Sequence Models to eliminate support rework cycles.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['Sequence Modeling', 'Contextual Design', 'SAD', 'SaaS Onboarding'].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-medium text-slate-500">
                Client Project · Targeted 40% Support Reduction
              </div>
            </div>

            {/* Card 4: Lab Full Stack Experience */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Full-Stack & Cloud
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-4 group-hover:text-emerald-600 transition-colors">
                  HIRConnect & ResDash Platform
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Automated offline database synchronization workflows and migrated assets to cloud storage. Enhanced frontend analytics tables and interactive dashboards.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['Full-Stack', 'Cloud Migration', 'Data Pipeline', 'AI-Assisted Dev'].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-medium text-slate-500">
                UNC iCDCU Lab · Active Development
              </div>
            </div>

            {/* Notepad++ Re-Design Project Card */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-rose-50 text-rose-700 border border-rose-200">
                    UI/UX Design & Architecture
                  </span>
                  <a 
                    href="https://www.figma.com/design/cEfXvdR9PZrtBEdjrmtbvQ/Swot--2-Notepad---?node-id=0-1&t=LAYHrw7VFdrrczbv-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 group-hover:text-rose-600 transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mt-4 group-hover:text-rose-600 transition-colors">
                  Notepad++ Interface Modernization & Re-Design
                </h3>
                
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Led the end-to-end UX overhaul for the legacy code editor. Streamlined dense toolbars into a modern, developer-centric interface with improved information architecture, SWOT evaluation, and dark-mode design system.
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['Figma', 'UI/UX Redesign', 'Design Systems', 'Information Architecture', 'Developer Experience'].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                <a 
                  href="https://www.figma.com/design/cEfXvdR9PZrtBEdjrmtbvQ/Swot--2-Notepad---?node-id=0-1&t=LAYHrw7VFdrrczbv-1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-rose-600 hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Figma Prototype
                </a>
                <span className="text-slate-400">UNC UI Design Sprint</span>
              </div>
            </div>

            <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">
                    Inclusive UX & Hardware Feasibility
                  </span>
                  <span className="text-xs font-medium text-slate-400">INLS 718</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mt-4 group-hover:text-amber-600 transition-colors">
                  Multisensory Tap-to-Pay Architecture
                </h3>
                
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Investigated contactless payment accessibility barriers for visually and hearing-impaired users. Proposed an ultra-thin, NFC energy-harvested piezoelectric haptic & LED feedback system compliant with IEC 7810 standards.
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['Inclusive Design', 'Sensory Feedback', 'NFC Energy Harvesting', 'Piezo Haptics', 'Accessibility (a11y)'].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                <span className="text-slate-500">Multisensory Interaction Research</span>
                <span className="text-amber-600 font-medium">Concept & Feasibility Study</span>
              </div>
            </div>

          </div>

          
          <div className="pt-2 text-center sm:text-left">
          <div className="inline-flex flex-wrap items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-600 shadow-sm">
            <span>Looking for other programming-related projects, scripts, or open-source experiments?</span>
            <a 
              href="https://github.com/AlexLee711" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              Explore my GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        </section>

        

        {/* 5. Skills Snapshot */}
        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Technical Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {/* Card 1: Programming Languages */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 text-violet-600 font-semibold text-sm mb-3">
                <Code2 className="w-4 h-4" />
                Languages
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Python, C#, C++, Java, JavaScript, TypeScript, SQL, HTML5/CSS3
              </p>
            </div>

            {/* Card 2: Frontend & UX */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm mb-3">
                <Layout className="w-4 h-4" />
                Frontend & UX
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                React, Next.js, Tailwind CSS, Bootstrap, Figma, JSON/XML
              </p>
            </div>

            {/* Card 3: Backend & Data */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm mb-3">
                <Database className="w-4 h-4" />
                Backend & Data
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Django, Flask, ASP.NET Core/MVC, PostgreSQL, MySQL, SQLite, REST APIs
              </p>
            </div>

            {/* Card 4: Tools & Platforms */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm mb-3">
                <Cloud className="w-4 h-4" />
                Tools & Cloud
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Git/GitHub, Render, Streamlit, Pandas, CI/CD
              </p>
            </div>

            {/* Card 5: Certifications & Methodologies */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm mb-3">
                <Layers className="w-4 h-4" />
                Certifications
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cisco CCNA, Lean Six Sigma, Systems Analysis & Design (SAD)
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* 6. Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Yi-Chian (Alex) Lee. Built with Next.js & Tailwind CSS.</p>
      </footer>

    </div>
  );
}