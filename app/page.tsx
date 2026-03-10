"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal, Bot, Code2, Database, Download, Mail, Phone, BookOpen, Layers, Github
} from 'lucide-react';

// Typewriter Effect Component
const Typewriter = ({ text, delay = 0, speed = 0.05, className = "" }: { text: string, delay?: number, speed?: number, className?: string }) => {
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay, staggerChildren: speed }
        }
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Simple animated tech tags (no robot)
const PhysicsTechTags = ({ techStacks, inView }: { techStacks: string[], inView: boolean }) => {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {techStacks.map((tech, i) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.5 + (i * 0.12)
          }}
          className="px-3 py-1 bg-[var(--surface-light)] border border-[var(--border)] text-sm rounded-md text-[var(--text-secondary)] shadow-sm font-mono hover:border-[var(--primary)] transition-colors"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
};


export default function Home() {
  const [bootSequence, setBootSequence] = useState(0);

  // Trigger boot sequence steps
  useEffect(() => {
    const timer1 = setTimeout(() => setBootSequence(1), 1500); // 1.5s print hello world finishes
    const timer2 = setTimeout(() => setBootSequence(2), 2500); // 2.5s name fades in
    const timer3 = setTimeout(() => setBootSequence(3), 3500); // 3.5s terminal loader starts
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-[var(--border)] bg-[#050505]/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold text-xl tracking-wide">
            <span className="text-[var(--primary)]">&lt;</span>
            Alex!
            <span className="text-[var(--primary)]">/&gt;</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">Home</a>
            <a href="#contact" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">Contact</a>
            <a href="https://github.com/alex-christopher" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="/AlexChristopherResume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface-light)] border border-[var(--border)] text-sm font-medium hover:border-[var(--primary)] transition-colors text-[var(--text-primary)]">
              <Download className="w-4 h-4" /> Resume
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-5xl pt-32">
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center pb-20">
          <div className="font-mono text-xl md:text-2xl text-[var(--text-secondary)] mb-8 flex items-center h-10">
            <span className="text-blue-400">print</span>
            <span className="text-yellow-300">(</span>
            <span className="text-green-400">"</span>
            <Typewriter text="Hello World!" delay={0.2} speed={0.08} className="text-green-400" />
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: bootSequence > 0 ? 1 : 0 }}
              className="text-green-400">"
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: bootSequence > 0 ? 1 : 0 }}
              className="text-yellow-300">)
            </motion.span>
            <span className="cursor-blink ml-1"></span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={bootSequence >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-[var(--text-primary)]">
              Alex Christopher.
            </h1>
            <p className="text-2xl md:text-3xl font-light text-[var(--text-secondary)] max-w-3xl leading-relaxed mb-6">
              I am a <span className="text-[var(--primary)] font-medium">GenAI Engineer</span> turning paper methodologies into production realities. I orchestrate LLMs, engineer agents, and build scalable infrastructure.
            </p>
          </motion.div>
        </section>

        {/* SYSTEM INITIALIZATION (TECH STACK) */}
        {bootSequence >= 3 && (
          <motion.section
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            className="mb-32 terminal-panel p-6"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-[#333] pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 font-mono text-xs text-gray-500">root@alex-system:~</span>
            </div>
            <div className="font-mono text-sm text-gray-300 space-y-2">
              <p><span className="text-yellow-400">[INFO]</span> Initializing core dependencies...</p>
              <p><span className="text-green-400">✓</span> Loaded <span className="text-[var(--secondary)]">Python 3.11</span></p>
              <p><span className="text-green-400">✓</span> Loaded <span className="text-[var(--secondary)]">LangChain &amp; LangGraph</span></p>
              <p><span className="text-green-400">✓</span> Connected to <span className="text-[var(--secondary)]">Vector DB (OpenSearch/Chroma)</span></p>
              <p><span className="text-green-400">✓</span> Provisioned <span className="text-[var(--secondary)]">AWS &amp; Azure</span></p>
              <p><span className="text-green-400">✓</span> Spawned <span className="text-[var(--secondary)]">Multi-Agent Instances</span></p>
              <p className="pt-2 text-[var(--primary)] opacity-80">System ready. Awaiting inference instructions...</p>
            </div>
          </motion.section>
        )}

        {/* TECHNICAL ARSENAL */}
        {bootSequence >= 3 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-32"
          >
            <div className="flex items-center gap-4 mb-10">
              <Layers className="text-[var(--primary)] w-8 h-8" />
              <h2 className="text-4xl font-bold">Technical Arsenal</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Languages", items: ["Python 3.11", "JavaScript", "TypeScript", "SQL"] },
                { label: "GenAI & Agents", items: ["LangChain", "LangGraph", "LangSmith", "CrewAI", "Agentic AI", "RAG", "Prompt Engineering"] },
                { label: "LLMs & Models", items: ["OpenAI GPT-4", "Azure OpenAI", "AWS Bedrock", "Llama", "Ollama", "HuggingFace"] },
                { label: "Frameworks", items: ["FastAPI", "Streamlit", "PyTorch", "Transformers", "PEFT"] },
                { label: "Vector & Data", items: ["ChromaDB", "FAISS", "AWS OpenSearch", "Embeddings", "Numpy", "Pandas"] },
                { label: "Cloud & Infra", items: ["AWS", "Azure", "CI/CD", "Docker", "Git"] },
              ].map((category) => (
                <div key={category.label} className="glass-panel p-5">
                  <p className="text-[var(--primary)] font-mono text-xs font-semibold mb-3 uppercase tracking-wider">{category.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map(item => (
                      <span key={item} className="px-2 py-0.5 bg-[var(--surface-light)] border border-[var(--border)] rounded text-xs text-[var(--text-secondary)] font-mono">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* WORK EXPERIENCE */}
        <section className="mb-32 pt-20 border-t border-[var(--border)]">
          <div className="flex items-center gap-4 mb-12">
            <Terminal className="text-[var(--primary)] w-8 h-8" />
            <h2 className="text-4xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-16">
            {/* Project 1 */}
            <div className="glass-panel p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Agentic RAG-powered Test Report Generator</h3>
                  <p className="text-[var(--primary)] font-mono text-sm">PRODUCTION APPLICATION</p>
                </div>
              </div>

              <div className="text-[var(--text-secondary)] text-lg space-y-4 mb-8 relative z-10">
                <p>Built and productionized a multi-agent RAG pipeline that automatically retrieves performance run metrics, aligns them with historical baselines, and synthesizes insights via LLM-driven orchestration across a LangGraph agent graph.</p>
                <p>A dedicated <span className="text-[var(--secondary)] font-medium">Validator Agent</span> runs after each LLM generation step, cross-checking the output against structured baselines and schema rules before the final report is assembled—ensuring zero-hallucination, production-grade accuracy.</p>
                <p>Delivered complete reports in PDF/Word/email formats, shrinking turnaround from 2 hours to 15 mins. Adoption by 5+ QA teams reduced manual reporting workload by 60%.</p>
              </div>

              {/* Code Loop Animation */}
              <div className="mt-8 pt-6 border-t border-[var(--border)] relative z-10">
                <div className="font-mono text-sm text-[var(--text-secondary)] mb-4">
                  <span className="text-pink-400">for</span> tech <span className="text-pink-400">in</span> project_stack: <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">print</span>(tech)
                </div>
                <PhysicsTechTags
                  techStacks={["LangChain", "LangGraph", "FastAPI", "AWS OpenSearch", "AWS Bedrock", "RAG", "Validator Agent", "Agentic AI", "Embeddings"]}
                  inView={true}
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-panel p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold mb-2">AI-assisted Apache JMeter Engine</h3>
                  <p className="text-[var(--primary)] font-mono text-sm">TESTING AUTOMATION</p>
                </div>
              </div>
              <div className="text-[var(--text-secondary)] text-lg space-y-4 mb-8 relative z-10">
                <p>Architected a scripting engine that auto-correlates dynamic parameters and templatizes datasets for reuse, reducing average script build time by 60%.</p>
                <p>Automated correlation pipelines combining rule-based extractors with LLM verification to eliminate repetitive trial-and-error debugging.</p>
              </div>

              {/* Code Loop Animation */}
              <div className="mt-8 pt-6 border-t border-[var(--border)] relative z-10">
                <div className="font-mono text-sm text-[var(--text-secondary)] mb-4">
                  <span className="text-pink-400">for</span> tech <span className="text-pink-400">in</span> tooling_stack: <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">print</span>(tech)
                </div>
                <PhysicsTechTags
                  techStacks={["Apache JMeter", "Azure OpenAI", "LLM Pipelines", "Prompt Engineering", "Auto-Correlation", "LangChain", "Python 3.11"]}
                  inView={true}
                />
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-panel p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold mb-2">AI-driven Accessibility Remediation Engine</h3>
                  <p className="text-[var(--primary)] font-mono text-sm">ACCESSIBILITY &amp; COMPLIANCE</p>
                </div>
              </div>
              <div className="text-[var(--text-secondary)] text-lg space-y-4 mb-8 relative z-10">
                <p>Built an AI-driven Accessibility Remediation Engine using Playwright and axe-core to automatically audit webpages, detect WCAG 2.1 compliance issues, and generate production-ready remediation code via LLMs.</p>
                <p>Ensured all LLM-generated fixes preserved existing UI structure and adhered to organization-approved color standards, enabling faster, consistent accessibility compliance across web applications without manual intervention.</p>
              </div>

              {/* Code Loop Animation */}
              <div className="mt-8 pt-6 border-t border-[var(--border)] relative z-10">
                <div className="font-mono text-sm text-[var(--text-secondary)] mb-4">
                  <span className="text-pink-400">for</span> tech <span className="text-pink-400">in</span> a11y_stack: <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">print</span>(tech)
                </div>
                <PhysicsTechTags
                  techStacks={["Playwright", "axe-core", "WCAG 2.1", "OpenAI", "LLM Code Gen", "Python", "DOM Analysis", "Accessibility Audit"]}
                  inView={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* PERSONAL PROJECTS */}
        <section className="mb-32 pt-20 border-t border-[var(--border)]">
          <div className="flex items-center gap-4 mb-12">
            <Code2 className="text-[var(--primary)] w-8 h-8" />
            <h2 className="text-4xl font-bold">Personal Projects</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-panel p-8 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Multi-Agent Framework</h3>
              <p className="text-[var(--primary)] font-mono text-sm mb-4">JAN 2025 - PRESENT</p>
              <p className="text-[var(--text-secondary)] flex-1 text-lg mb-6">Designed a lightweight framework where AI agents collaborate to plan, generate, and validate tasks using open-source LLMs to enhance security.</p>

              <div className="border-t border-[var(--border)] pt-4 mt-auto">
                <div className="font-mono text-xs text-[var(--text-secondary)] mb-2"><span className="text-blue-400">print</span>(stack)</div>
                <PhysicsTechTags techStacks={["Multi-Agent", "LangGraph", "Open-source LLMs", "CrewAI"]} inView={true} />
              </div>
            </div>

            <div className="glass-panel p-8 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Python Library AI Assistant</h3>
              <p className="text-[var(--primary)] font-mono text-sm mb-4">AUG 2025 - PRESENT</p>
              <p className="text-[var(--text-secondary)] flex-1 text-lg mb-6">Developed a RAG assistant using LangChain to deliver contextual code support, integrating OpenAI embeddings and ChromaDB.</p>

              <div className="border-t border-[var(--border)] pt-4 mt-auto">
                <div className="font-mono text-xs text-[var(--text-secondary)] mb-2"><span className="text-blue-400">print</span>(stack)</div>
                <PhysicsTechTags techStacks={["LangChain", "ChromaDB", "OpenAI", "RAG", "Embeddings"]} inView={true} />
              </div>
            </div>

            <div className="glass-panel p-8 flex flex-col lg:col-span-2">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                <h3 className="text-2xl font-bold mb-2">Auto ML Generation (OSS)</h3>
                <a href="https://github.com/alex-christopher/pyoptiML" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-light)] text-sm font-mono text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all shrink-0">
                  <Github className="w-4 h-4" /> Open Source
                </a>
              </div>
              <p className="text-[var(--primary)] font-mono text-sm mb-4">JAN 2023 - APR 2023</p>
              <p className="text-[var(--text-secondary)] flex-1 text-lg mb-6">
                An open-source Python package that automates the entire machine learning workflow end-to-end. Feed it a raw CSV and it handles EDA, feature engineering, model selection (across classifiers/regressors), cross-validation, and hyperparameter tuning automatically—outputting a production-ready, serialized model. Designed to remove the repetitive boilerplate from ML experimentation and let engineers focus on problem framing instead.
              </p>

              <div className="border-t border-[var(--border)] pt-4 mt-auto">
                <div className="font-mono text-xs text-[var(--text-secondary)] mb-2"><span className="text-blue-400">print</span>(stack)</div>
                <PhysicsTechTags techStacks={["Python 3", "Scikit-learn", "Pandas", "Optuna", "Joblib", "PyTest"]} inView={true} />
              </div>
            </div>

            {/* Portfolio Site */}
            <div className="glass-panel p-8 flex flex-col lg:col-span-2">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                <h3 className="text-2xl font-bold">GenAI Engineer Portfolio — This Site</h3>
                <a href="https://github.com/alex-christopher/portfolio" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-light)] text-sm font-mono text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all shrink-0">
                  <Github className="w-4 h-4" /> Open Source
                </a>
              </div>
              <p className="text-[var(--primary)] font-mono text-sm mb-4">MAR 2025 — OPEN SOURCE</p>
              <p className="text-[var(--text-secondary)] flex-1 text-lg mb-6">
                The very portfolio you are viewing, built as an open-source project. Features a Python-themed typing animation, Framer Motion physics-based tech stack reveals, a terminal system initialization sequence, and a code-aesthetic dark design system. Fork it, adapt it, make it yours.
              </p>
              <div className="border-t border-[var(--border)] pt-4 mt-auto">
                <div className="font-mono text-xs text-[var(--text-secondary)] mb-2"><span className="text-blue-400">print</span>(stack)</div>
                <PhysicsTechTags techStacks={["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"]} inView={true} />
              </div>
            </div>

          </div>
        </section>

        {/* RESEARCH SECTION */}
        <section className="mb-32 pt-20 border-t border-[var(--border)]">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="text-[var(--primary)] w-8 h-8" />
            <h2 className="text-4xl font-bold">Research &amp; Implementations</h2>
          </div>
          <div className="terminal-panel p-10 relative">
            <div className="absolute top-4 right-4 animate-pulse">
              <Layers className="text-[var(--primary)] opacity-50 w-24 h-24" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-mono text-white">Attention is All You Need<span className="text-[var(--primary)]">.py</span></h3>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-6 relative z-10">
              A complete, ground-up Python recreation of the seminal Transformer architecture paper. Implemented multi-head self-attention mechanisms, positional encoding matrices, and feed-forward networks purely from scratch to deeply understand the mechanics of modern LLMs.
            </p>
            <a href="https://github.com/alex-christopher/AttentionIsAllYouNeed" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--border-focus)] bg-[var(--surface-light)] text-[var(--text-primary)] px-6 py-3 rounded-md hover:bg-[var(--border)] transition-colors text-sm font-mono">
              <Terminal className="w-4 h-4" /> View Source Code
            </a>
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="py-20 border-t border-[var(--border)] flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-6 text-[var(--text-primary)]">System.exit(0)</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-lg">
            My thread pool is always open for new processes. Reach out if you'd like to collaborate.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a href="mailto:alexchristopher154@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-light)] hover:border-[var(--primary)] transition-all">
              <div className="p-3 bg-black rounded-lg text-[var(--primary)] group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-lg font-mono text-[var(--text-primary)]">alexchristopher154@gmail.com</span>
            </a>
            <a href="tel:9080929162" className="group flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-light)] hover:border-[var(--primary)] transition-all">
              <div className="p-3 bg-black rounded-lg text-[var(--primary)] group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-lg font-mono text-[var(--text-primary)]">9080929162</span>
            </a>
          </div>

          <p className="text-sm font-mono text-[var(--border-focus)]">Designed by Alex Christopher &lt;3</p>
        </footer>

      </main>
    </div>
  );
}
