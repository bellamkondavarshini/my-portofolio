import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Code, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  CheckCircle, 
  ExternalLink 
} from 'lucide-react';

export default function Portfolio() {
  // Recruiter Hub Form State
  const [email, setEmail] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Email validation for premium targets
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    const emailLower = email.toLowerCase();
    if (emailLower.endsWith('@microsoft.com') || emailLower.endsWith('@amazon.com')) {
      setIsValidated(true);
      setErrorMessage('');
    } else {
      setIsValidated(false);
      setErrorMessage('Access granted immediately to @microsoft.com and @amazon.com addresses. Standard review queued.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white font-sans selection:bg-[#00D2FF] selection:text-black overflow-x-hidden">
      
      {/* 1. HERO WORKSPACE WIREFRAME */}
      <header className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 overflow-hidden border-b border-white/5">
        {/* Background Neural Canvas Simulation Placeholder */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-[#00D2FF]/10 blur-[120px] top-1/4 left-1/4 rounded-full animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-[#9D00FF]/10 blur-[100px] bottom-1/4 right-1/4 rounded-full animate-pulse delay-700"></div>
          {/* Decorative Grid Mesh */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-wider uppercase text-[#00D2FF]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
            Available for Internships & Associate Roles
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-7xl font-extrabold tracking-tight"
          >
            Varshini <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#9D00FF]">| AI Developer & Technology Enthusiast</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            AI Developer | Problem Solver | Future Tech Innovator
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a 
              href="#recruiter-hub"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#9D00FF] font-medium text-black hover:opacity-90 transition duration-300 text-center shadow-lg shadow-[#00D2FF]/20"
            >
              Get Code Access Token
            </a>
            <a 
              href="#resume" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#121826]/75 border border-white/10 font-medium hover:bg-white/5 transition duration-300 text-center backdrop-blur-md"
            >
              Download Full Resume
            </a>
          </motion.div>
        </div>
      </header>

      {/* 2. ANIMATED INTERACTIVE SKILLS CLUSTER */}
      <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical Matrix &amp; Proficiency
          </h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Bridging the core gap between complex machine learning paradigms and fluid production architectures.
          </p>

          {/* Quick Skill Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Artificial Intelligence', 'Machine Learning', 'Python', 'Web Development', 'HTML5 / CSS3', 'JavaScript (ES6+)', 'Database Management', 'Prompt Engineering'].map((skill, index) => (
              <div key={index} className="p-3 rounded-lg bg-[#121826]/40 border border-white/5 text-sm text-gray-300 hover:border-[#00D2FF]/30 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Interactive Node 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-[#121826]/75 border border-white/10 backdrop-blur-md"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <Cpu className="text-[#00D2FF]" size={24} />
                <h3 className="font-semibold text-lg">AI &amp; Intelligent Systems</h3>
              </div>
              <span className="text-[#00D2FF] font-mono text-sm font-semibold">92%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '92%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#00D2FF] to-blue-500 rounded-full"
              />
            </div>
            <p className="text-xs text-gray-400 mt-3">Data Engineering Proficiency, advanced prompt engineering, and LLM integrations.</p>
          </motion.div>

          {/* Interactive Node 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#121826]/75 border border-white/10 backdrop-blur-md"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <Layers className="text-[#9D00FF]" size={24} />
                <h3 className="font-semibold text-lg">Full-Stack Web Development</h3>
              </div>
              <span className="text-[#9D00FF] font-mono text-sm font-semibold">88%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '88%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#9D00FF] to-purple-500 rounded-full"
              />
            </div>
            <p className="text-xs text-gray-400 mt-3">React core lifecycle bindings, server-less state trees, and responsive design systems.</p>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE ENGINEERING PROJECTS */}
      <section className="py-24 border-t border-white/5 bg-[#0e1422]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Engineering Projects</h2>
              <p className="text-gray-400 mt-2">Production architectures and end-to-end full-stack applications.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Nexara */}
            <div className="p-6 rounded-2xl bg-[#121826]/75 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-[#00D2FF]/20 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#00D2FF]/10 text-[#00D2FF] rounded-xl"><Code size={20} /></div>
                  <div className="flex gap-1.5 text-[10px] uppercase tracking-wider font-mono text-gray-400">
                    <span>React</span> • <span>Firebase</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00D2FF] transition-colors">Nexara: AI-Driven Career Direction Engine</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-4">Architected an end-to-end career execution platform incorporating dynamic functional elements and secure instances to manage real-time updates within a immersive deep visual ecosystem.</p>
              </div>
              <ul className="text-xs text-gray-500 space-y-1 mb-4">
                <li>• Managed concurrent dashboard states</li>
                <li>• Spacecraft dark visual aesthetic framework</li>
              </ul>
            </div>

            {/* Smart AI Interview Ecosystem */}
            <div className="p-6 rounded-2xl bg-[#121826]/75 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-[#9D00FF]/20 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#9D00FF]/10 text-[#9D00FF] rounded-xl"><Terminal size={20} /></div>
                  <div className="flex gap-1.5 text-[10px] uppercase tracking-wider font-mono text-gray-400">
                    <span>Python</span> • <span>Gemini API</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#9D00FF] transition-colors">Smart AI Interview Ecosystem</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-4">Developed an automated vetting pipeline reducing traditional screening frictions. Features real-time separation metrics to evaluate metrics instantly via isolated pipeline threads.</p>
              </div>
              <ul className="text-xs text-gray-500 space-y-1 mb-4">
                <li>• Automated diagnostics scoring track</li>
                <li>• High performance viewport decoupling</li>
              </ul>
            </div>

            {/* Interactive Python Engine */}
            <div className="p-6 rounded-2xl bg-[#121826]/75 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/5 text-gray-300 rounded-xl"><Briefcase size={20} /></div>
                  <div className="flex gap-1.5 text-[10px] uppercase tracking-wider font-mono text-gray-400">
                    <span>Automation</span> • <span>UI</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">Interactive Python Engine</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-4">Designed an interactive workspace layout constructed to simplify core syntax onboarding. Uses optimized pipeline layouts designed to insulate processes during script cycles.</p>
              </div>
              <ul className="text-xs text-gray-500 space-y-1 mb-4">
                <li>• Automated text-to-visual instruction mapping</li>
                <li>• Resilient UI pipeline delays handling</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. METRICS & EDUCATION SPLIT */}
      <section id="resume" className="py-24 px-6 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Pipeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-[#00D2FF]" size={28} />
            <h2 className="text-3xl font-bold tracking-tight">Academic Foundations</h2>
          </div>
          <div className="space-y-6 border-l border-white/5 pl-6 relative">
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00D2FF]" />
              <h4 className="text-lg font-semibold">B.Tech in Computer Science (AI/ML)</h4>
              <p className="text-sm text-gray-400">Malla Reddy College of Engineering</p>
              <div className="inline-block mt-2 px-2 py-0.5 rounded bg-[#00D2FF]/10 text-[#00D2FF] font-mono text-xs">8.0 / 10.0 CGPA</div>
            </div>
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-600" />
              <h4 className="text-lg font-semibold">Intermediate (Class XII)</h4>
              <p className="text-sm text-gray-400">Sri Medha V Junior College, Hanamkonda</p>
              <div className="inline-block mt-2 px-2 py-0.5 rounded bg-white/5 text-gray-300 font-mono text-xs">874 / 1000 Marks</div>
            </div>
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-600" />
              <h4 className="text-lg font-semibold">Schooling (Class X)</h4>
              <p className="text-sm text-gray-400">PSR School of Excellence</p>
              <div className="inline-block mt-2 px-2 py-0.5 rounded bg-white/5 text-gray-300 font-mono text-xs">9.5 / 10.0 GPA</div>
            </div>
          </div>
        </div>

        {/* System & Growth Metrics */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-[#9D00FF]" size={28} />
            <h2 className="text-3xl font-bold tracking-tight">Achievements &amp; Passions</h2>
          </div>
          <div className="space-y-4 bg-[#121826]/50 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
            <div>
              <h4 className="font-semibold text-white mb-1">Growth Focus Architecture</h4>
              <p className="text-sm text-gray-400">Efficiently deployed multiple functional web applications built entirely around clean code modular architecture patterns and highly decoupled, low-overhead API execution endpoints.</p>
            </div>
            <hr className="border-white/5 my-2" />
            <div>
              <h4 className="font-semibold text-white mb-1">Interests &amp; Analytical Foundations</h4>
              <p className="text-sm text-gray-400">Dedicated tracking of deep systems architecture case studies, scalable artificial intelligence structural innovations, and high-tech entrepreneurial journals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEAD CONVERSION COMPONENT (RECRUITER HUB) */}
      <section id="recruiter-hub" className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-[#121826]/30">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex p-3 bg-gradient-to-br from-[#00D2FF]/20 to-[#9D00FF]/20 rounded-2xl text-[#00D2FF] mb-6">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Recruiter Hub Pipeline</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            "Let's build something game-changing. Enter your workspace email to immediately trigger my full code access token and project environments catalog."
          </p>

          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4">
            <div className="relative flex flex-col sm:flex-row items-center gap-2 p-2 rounded-xl bg-[#121826]/90 border border-white/10 focus-within:border-[#00D2FF]/50 transition-all backdrop-blur-md">
              <input 
                type="email" 
                placeholder="name@microsoft.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-3 py-3 outline-none text-sm text-white placeholder:text-gray-600"
                required
              />
              <button 
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#00D2FF] to-[#9D00FF] font-medium text-black text-sm hover:opacity-90 transition whitespace-nowrap"
              >
                Request Authorization
              </button>
            </div>

            {/* Response Diagnostics Messages */}
            {isValidated && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-mono">
                <CheckCircle size={14} />
                <span>[DIAGNOSTIC OK]: Token dispatched. Secure environments catalog sent.</span>
              </motion.div>
            )}

            {errorMessage && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-amber-400 text-xs font-mono">
                {errorMessage}
              </motion.p>
            )}
          </form>
        </div>
      </section>

      {/* METRIC FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center text-xs text-gray-600 font-mono">
        <div>Designed with AI &amp; Passion for Innovation • Secure Portfolio Pipeline</div>
        <div className="mt-2 text-[10px] text-gray-700">Hyderabad, Telangana, India</div>
      </footer>

    </div>
  );
}
