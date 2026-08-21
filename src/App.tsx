import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Terminal, 
  Award, 
  BookOpen, 
  MapPin, 
  Calendar,
  Phone,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS, CERTIFICATIONS, EDUCATION } from './constants';
import { Skill, Project, Experience, Certification } from './types';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono text-lg font-bold tracking-tighter text-white uppercase"
        >
          S<span className="text-cyan-400">.</span>EGWU
        </motion.div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium text-slate-400">
          {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden technical-grid bg-[#0f172a]">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-[#0f172a] pointer-events-none" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 text-center max-w-4xl"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-8 uppercase tracking-widest">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Architecture & Scalability
      </div>
      
      <h1 className="text-6xl md:text-8xl serif-heading mb-6">
        Crafting digital <br />
        <span className="italic text-cyan-400">experiences</span> that matter.
      </h1>
      
      <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
        {PERSONAL_INFO.summary}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="#contact" 
          className="px-8 py-4 bg-cyan-500 text-[#0f172a] font-bold rounded-full hover:bg-cyan-400 transition-all flex items-center gap-2 group tracking-wide"
        >
          Get in Touch
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a 
          href="#projects" 
          className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-full border border-slate-700/50 hover:bg-slate-700 transition-all"
        >
          View Projects
        </a>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
    >
      <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-slate-800" />
      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-mono italic">Scroll</span>
    </motion.div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row gap-16">
      <div className="md:w-1/3">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4 font-semibold">Chronology</h2>
        <h3 className="text-4xl serif-heading mb-8">Work Experience</h3>
        <p className="text-slate-400 leading-relaxed font-light">
          A decade of experience across banking, logistics, and ERP systems, 
          focused on performance and reliability.
        </p>
      </div>
      
      <div className="md:w-2/3 space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative pl-8 border-l border-slate-800"
          >
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors" />
            
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <h4 className="text-xl font-bold group-hover:text-cyan-400 transition-colors text-white">{exp.role}</h4>
                <p className="text-slate-400 font-medium">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono text-slate-500">{exp.period}</p>
                <div className="flex items-center gap-1 text-xs text-slate-600 justify-end mt-1 italic">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </div>
              </div>
            </div>
            
            <ul className="space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                  <span className="mt-2 w-1.5 h-[1px] bg-cyan-900 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SkillsSection = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-32 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4 font-semibold">Expertise</h2>
          <h3 className="text-4xl serif-heading">Technical Skills</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-700/50">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-[#0f172a] transition-all">
                  {cat === 'Language' && <Terminal className="w-5 h-5" />}
                  {cat === 'Backend' && <Cpu className="w-5 h-5" />}
                  {cat === 'Frontend' && <Code2 className="w-5 h-5" />}
                  {cat === 'Database' && <Database className="w-5 h-5" />}
                  {cat === 'Cloud' && <Cloud className="w-5 h-5" />}
                  {cat === 'Tools' && <Terminal className="w-5 h-5" />}
                  {cat === 'Other' && <Award className="w-5 h-5" />}
                </div>
                <h4 className="font-bold text-sm uppercase tracking-[0.1em] text-white">{cat}</h4>
              </div>

              <div className="space-y-6">
                {SKILLS.filter(s => s.category === cat).map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400/70 font-mono italic">
                        {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
                      </span>
                    </div>
                    <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-cyan-500 group-hover:bg-cyan-400 transition-colors"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="flex justify-between items-end mb-16">
      <div>
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4 font-semibold">Portfolio</h2>
        <h3 className="text-4xl serif-heading">Selected Projects</h3>
      </div>
      <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 flex items-center gap-2 text-xs uppercase tracking-[0.1em] transition-colors group italic">
        View All Work &rarr;
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group relative flex flex-col p-8 rounded-2xl bg-slate-800 border border-slate-700/50 hover:border-cyan-500/50 transition-all overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="mb-6 flex justify-between items-start relative z-10">
            <div className="p-3 bg-slate-700 rounded-xl group-hover:bg-cyan-500 group-hover:text-[#0f172a] transition-all">
              <Terminal className="w-6 h-6" />
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
          
          <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors text-white relative z-10">{project.title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto relative z-10">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 text-slate-500 border border-slate-700/50 group-hover:border-cyan-900 transition-all">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const CertSection = () => (
  <section className="py-32 px-6 bg-slate-900/50">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4 font-semibold">Credentials</h2>
        <h3 className="text-4xl serif-heading">Certifications & Education</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className="space-y-8">
          <h4 className="flex items-center gap-2 font-bold text-lg mb-4 text-white">
            <Award className="w-5 h-5 text-cyan-400" />
            Certifications
          </h4>
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all flex justify-between items-center group">
              <div>
                <p className="text-slate-100 font-medium mb-1 group-hover:text-cyan-400 transition-colors">{cert.name}</p>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">{cert.issuer} • {cert.date}</p>
              </div>
              {cert.score && (
                <div className="text-right">
                   <p className="text-xs font-mono text-cyan-400 font-bold">{cert.score}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <h4 className="flex items-center gap-2 font-bold text-lg mb-4 text-white">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            Education
          </h4>
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all group">
              <p className="text-slate-100 font-bold mb-1 group-hover:text-cyan-400 transition-colors">{edu.degree}</p>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed italic">{edu.institution}</p>
              <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="md:w-1/2">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4 font-semibold">Connection</h2>
        <h3 className="text-5xl serif-heading mb-8">
          Let's discuss your <br />
          <span className="italic text-cyan-400">next scalable system.</span>
        </h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">
          Whether you need a robust backend architecture, a full-stack renovation, 
          or technical leadership, I'm ready to contribute to your global projects.
        </p>
        
        <div className="space-y-4">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700/50 group-hover:bg-cyan-500 group-hover:text-[#0f172a] transition-all">
              <Mail className="w-4 h-4" />
            </div>
            <span className="font-mono text-sm tracking-tighter">{PERSONAL_INFO.email}</span>
          </a>
          <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700/50 group-hover:bg-cyan-500 group-hover:text-[#0f172a] transition-all">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-mono text-sm tracking-tighter">{PERSONAL_INFO.phone}</span>
          </a>
        </div>
      </div>

      <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
        {[
          { label: 'Github', url: PERSONAL_INFO.github, icon: <Github className="w-5 h-5" /> },
          { label: 'LinkedIn', url: PERSONAL_INFO.linkedin, icon: <Linkedin className="w-5 h-5" /> },
          { label: 'Twitter', url: '#', icon: <Twitter className="w-5 h-5" /> },
          { label: 'Skype', url: '#', icon: <MessageSquare className="w-5 h-5" /> },
        ].map((social, idx) => (
          <a 
            key={idx}
            href={social.url}
            className="flex flex-col items-center justify-center p-10 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800 hover:border-cyan-500/50 transition-all group"
          >
            <div className="mb-4 text-slate-500 group-hover:text-cyan-400 transition-colors">
              {social.icon}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors font-medium">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-slate-800 text-center">
    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] font-medium">
      © {new Date().getFullYear()} Samuel Okpani Egwu <span className="mx-2">•</span> Handcrafted with Precision
    </p>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] overflow-x-hidden selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
