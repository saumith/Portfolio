"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Initialize Theme
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  if (!mounted) return null;

  return (
    <main className="container-left relative">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-2 rounded-full hover:bg-[var(--border)] transition-colors"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Header with Photo */}
      <section className="mb-12 flex flex-col md:flex-row gap-8 items-start">
        {/* Photo Container */}
        <div className="shrink-0">
          <img
            src="/profile.jpg"
            alt="Saumith Devarasetty"
            className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover shadow-sm border border-[var(--border)]"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl mb-2">Saumith Devarasetty</h1>
          <p className="mb-1 text-lg font-medium">Master of Science in Artificial Intelligence Student</p>
          <p className="mb-2">Northeastern University</p>
          <p className="mb-4 font-mono text-sm text-muted">devarasetty[dot]s[at]northeastern[dot]edu</p>

          <div className="flex gap-4 text-sm font-medium">
            <Link href="/resume.pdf" className="hover:underline">[CV]</Link>
            <span className="text-muted">/</span>
            <Link href="https://github.com/saumith" target="_blank" className="hover:underline">[GitHub]</Link>
            <span className="text-muted">/</span>
            <Link href="https://www.linkedin.com/in/saumith-devarasetty-8b58b71a7/" target="_blank" className="hover:underline">[LinkedIn]</Link>
          </div>
        </div>
      </section>

      <hr className="mb-8" />

      {/* About Me */}
      <section className="mb-12">
        <h3 className="text-xl border-b border-[var(--border)] pb-2 mb-4">About Me</h3>
        <p className="mb-4 text-justify leading-relaxed">
          I am a graduate student at <strong className="font-semibold">Northeastern University</strong>, specializing in Artificial Intelligence.
          My research interests lie at the intersection of <strong className="font-semibold">Computer Vision</strong>, <strong className="font-semibold">Natural Language Processing</strong>, and <strong className="font-semibold">Agentic Systems</strong>.
          I am particularly fascinated by how autonomous agents can interpret complex multi-modal data to solve real-world problems.
          Previously, I worked as an AI Engineer Intern at <strong className="font-semibold">Tata Consultancy Services</strong> and <strong className="font-semibold">Smart Bridge</strong>.
          I am currently seeking full-time opportunities in Machine Learning and AI Engineering.
        </p>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h3 className="text-xl border-b border-[var(--border)] pb-2 mb-4">Education</h3>
        <ul className="list-disc pl-5 space-y-6">
          <li>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
              <div><strong className="font-semibold text-lg">Northeastern University</strong>, Boston, MA</div>
              <div className="text-sm font-mono text-muted shrink-0">Exp. May 2026</div>
            </div>
            <div className="text-base">Master of Science in Artificial Intelligence</div>
            <div className="text-sm text-muted mt-1 italic">Related Courses: Foundations of AI, Algorithms, Machine Learning, NLP, Computer Vision</div>
          </li>
          <li>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
              <div><strong className="font-semibold text-lg">Vellore Institute of Technology</strong>, India</div>
              <div className="text-sm font-mono text-muted shrink-0">June 2024</div>
            </div>
            <div className="text-base">Bachelor of Engineering in Computer Science</div>
            <div className="text-sm text-muted mt-1">GPA: 8.2/10.0</div>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h3 className="text-xl border-b border-[var(--border)] pb-2 mb-4">Experience</h3>
        <ul className="space-y-8 pl-1">
          <li>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
              <div>
                <strong className="font-semibold text-lg">Tata Consultancy Services (TCS)</strong>
                <span className="text-muted mx-2">|</span>
                <span className="text-base">AI/ML Intern</span>
              </div>
              <div className="text-sm font-mono text-muted shrink-0">Jul 2025 - Aug 2025</div>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-justify leading-relaxed text-[0.95rem]">
              <li>Reduced manual query resolution time by <strong>~40%</strong> by developing an Agentic AI RAG chatbot.</li>
              <li>Architected a containerized multi-agent system on <strong>GCP (GKE, Cloud Run)</strong> using LangGraph to orchestrate complex workflows.</li>
              <li>Engineered Hybrid Search with Cross-Encoder Reranking to process 75+ SEC filings with high precision.</li>
            </ul>
          </li>

          <li>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
              <div>
                <strong className="font-semibold text-lg">Smart Bridge AI</strong>
                <span className="text-muted mx-2">|</span>
                <span className="text-base">AI Developer Link</span>
              </div>
              <div className="text-sm font-mono text-muted shrink-0">May 2023 - Jul 2023</div>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-justify leading-relaxed text-[0.95rem]">
              <li>Achieved <strong>92% facial ID accuracy</strong> in missing-person detection tasks using Deep Learning pipelines.</li>
              <li>Reduced feature-matching time by <strong>40%</strong> via high-performance facial embeddings retrieval.</li>
              <li>Led the development of the end-to-end pipeline using Python, SQL, and optimized feature extraction algorithms.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h3 className="text-xl border-b border-[var(--border)] pb-2 mb-4">Research & Projects</h3>
        <div className="space-y-8">

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
              <Link href="https://github.com/saumith/Multi-Label-Classification-of-Thoracic-Diseases-using-Chest-X-Rays" className="font-bold text-lg hover:underline">
                Thoracic Disease Classification
              </Link>
              <span className="text-xs text-muted font-mono">[PyTorch, DenseNet121, CV]</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-justify leading-relaxed text-[0.95rem]">
              <li>Designed an end-to-end deep learning pipeline detecting 14 thoracic diseases using NIH ChestX-ray14 dataset.</li>
              <li>Implemented a <strong>DenseNet121 backbone</strong> initialized with ImageNet/CheXNet weights, optimized with Focal Loss to handle severe class imbalance.</li>
              <li>Achieved <strong>0.91 ROC-AUC</strong> via MLSMOTE augmentation and threshold tuning techniques.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
              <Link href="https://github.com/saumith" className="font-bold text-lg hover:underline">
                Automated Due Diligence System (Flagship Architecture)
              </Link>
              <span className="text-xs text-muted font-mono">[Agentic AI, LangGraph, LLMs]</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-justify leading-relaxed text-[0.95rem]">
              <li>Architected a multi-agent system utilizing <strong>CrewAI/LangGraph</strong> to automate financial due diligence.</li>
              <li>Simulates 5 specialized AI agents (Legal, Financial, Market, Risk, Synthesis) to analyze documents and generate comprehensive risk reports.</li>
              <li>Achieved <strong>0.95 Faithfulness Score</strong> and 40% retrieval precision boost through advanced hybrid search.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
              <Link href="https://github.com/saumith/EmoLingo-ChatBot" className="font-bold text-lg hover:underline">
                EmoLingo Chatbot
              </Link>
              <span className="text-xs text-muted font-mono">[Transformers, NLP, Docker]</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-justify leading-relaxed text-[0.95rem]">
              <li>Developed a context-aware conversational agent predicting user emotion, tone, and English proficiency using an <strong>ensemble of fine-tuned transformers</strong> (T5, RoBERTa, ELECTRA).</li>
              <li>Achieved <strong>85% Emotion Accuracy</strong> with latency under 100ms for real-time interaction.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-12">
        <h3 className="text-xl border-b border-[var(--border)] pb-2 mb-4">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-justify leading-relaxed text-[0.95rem]">
          <div>
            <strong className="block text-sm font-semibold mb-1 uppercase tracking-wide text-muted">Languages</strong>
            Python, Java, C++, SQL, JavaScript/TypeScript, HTML/CSS
          </div>
          <div>
            <strong className="block text-sm font-semibold mb-1 uppercase tracking-wide text-muted">Machine Learning</strong>
            PyTorch, TensorFlow, Scikit-learn, OpenCV, Hugging Face Transformers, NLTK
          </div>
          <div>
            <strong className="block text-sm font-semibold mb-1 uppercase tracking-wide text-muted">Cloud & DevOps</strong>
            GCP (GKE, Cloud Run, Vertex AI), AWS (EC2, S3, Lambda), Docker, Kubernetes, Git
          </div>
          <div>
            <strong className="block text-sm font-semibold mb-1 uppercase tracking-wide text-muted">Frameworks</strong>
            Next.js, React, Node.js, Flask, FastAPI, Tailwind CSS, LangChain
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="mb-12">
        <h3 className="text-xl border-b border-[var(--border)] pb-2 mb-4">Publications</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">"Finding Missing Persons using Deep Learning and Facial Recognition"</span>,
            <span className="italic"> AIP Conference Proceedings</span>, Vol. 3206, Issue 1, 2024.
            <br />
            <span className="text-sm text-muted">DOI: 10.1063/5.0238128</span>
          </li>
        </ul>
      </section>

      <footer className="text-left text-xs text-muted mt-20 pb-8 border-t border-[var(--border)] pt-8">
        © {new Date().getFullYear()} Saumith Devarasetty.
      </footer>
    </main>
  );
}
