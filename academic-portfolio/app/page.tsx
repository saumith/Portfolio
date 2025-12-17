import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl mb-2">Saumith Devarasetty</h1>
        <p className="text-gray-700 mb-1">Master of Science in Artificial Intelligence Student</p>
        <p className="text-gray-700 mb-2">Northeastern University</p>
        <p className="text-gray-600 mb-4 font-mono text-sm">devarasetty[dot]s[at]northeastern[dot]edu</p>

        <div className="flex gap-4 text-sm font-medium">
          <Link href="/resume.pdf" className="hover:text-blue-800">[CV]</Link>
          <span className="text-gray-300">/</span>
          <Link href="https://github.com/saumith" target="_blank" className="hover:text-blue-800">[GitHub]</Link>
          <span className="text-gray-300">/</span>
          <Link href="https://www.linkedin.com/in/saumith-devarasetty-8b58b71a7/" target="_blank" className="hover:text-blue-800">[LinkedIn]</Link>
        </div>
      </section>

      <hr className="mb-8 border-gray-200" />

      {/* About Me */}
      <section className="mb-12">
        <h3 className="text-xl border-b border-gray-100 pb-2 mb-4">About Me</h3>
        <p className="text-gray-800 mb-4 text-justify">
          I am a graduate student at <strong className="font-semibold">Northeastern University</strong>, specializing in Artificial Intelligence.
          My research interests lie at the intersection of <strong className="font-semibold">Computer Vision</strong>, <strong className="font-semibold">NLP</strong>, and <strong className="font-semibold">Agentic Systems</strong>.
          I am particularly fascinated by how autonomous agents can interpret complex multi-modal data to solve real-world problems.
        </p>
        <p className="text-gray-800">
          Previously, I worked as an AI Engineer Intern at <strong className="font-semibold">Tata Consultancy Services</strong>, where I built RAG-based chatbots, and at <strong className="font-semibold">Smart Bridge</strong>.
          I am currently seeking full-time opportunities in Machine Learning and AI Engineering.
        </p>
      </section>

      {/* Education & Awards */}
      <section className="mb-12">
        <h3 className="text-xl border-b border-gray-100 pb-2 mb-4">Education</h3>
        <ul className="list-disc pl-5 space-y-4 text-gray-800">
          <li>
            <div><strong className="font-semibold">Northeastern University</strong>, Boston, MA</div>
            <div className="text-sm text-gray-600">Master of Science in Artificial Intelligence (Exp. May 2026)</div>
            <div className="text-sm text-gray-500 mt-1">Related Courses: Foundations of AI, Algorithms, Machine Learning, NLP</div>
          </li>
          <li>
            <div><strong className="font-semibold">Vellore Institute of Technology</strong>, India</div>
            <div className="text-sm text-gray-600">Bachelor of Engineering in Computer Science (June 2024)</div>
            <div className="text-sm text-gray-500 mt-1">GPA: 8.2/10.0</div>
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h3 className="text-xl border-b border-gray-100 pb-2 mb-4">Research & Projects</h3>
        <div className="space-y-6">

          <div>
            <div className="flex justify-between items-baseline">
              <Link href="https://github.com/saumith/Multi-Label-Classification-of-Thoracic-Diseases-using-Chest-X-Rays" className="font-serif font-bold text-lg hover:underline text-black">
                Thoracic Disease Classification
              </Link>
              <span className="text-xs text-gray-500 font-mono">[PyTorch, DenseNet, CV]</span>
            </div>
            <p className="text-gray-700 text-sm mt-1 leading-relaxed">
              Designed an end-to-end deep learning pipeline detecting 14 thoracic diseases using NIH ChestX-ray14.
              Implemented a DenseNet121 backbone initialized with ImageNet/CheXNet weights, optimized with Focal Loss to handle severe class imbalance.
              Achieved <span className="font-semibold">0.91 ROC-AUC</span>.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <Link href="https://github.com/saumith/EmoLingo-ChatBot" className="font-serif font-bold text-lg hover:underline text-black">
                EmoLingo Chatbot
              </Link>
              <span className="text-xs text-gray-500 font-mono">[Transformers, NLP, Docker]</span>
            </div>
            <p className="text-gray-700 text-sm mt-1 leading-relaxed">
              Developed a context-aware conversational agent predicting user emotion, tone, and English proficiency using an ensemble of fine-tuned transformers (T5, RoBERTa, ELECTRA).
              Achieved <span className="font-semibold">85% Emotion Accuracy</span> with latency under 100ms.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <Link href="https://github.com/saumith" className="font-serif font-bold text-lg hover:underline text-black">
                Automated Due Diligence System
              </Link>
              <span className="text-xs text-gray-500 font-mono">[Agentic AI, LLMs]</span>
            </div>
            <p className="text-gray-700 text-sm mt-1 leading-relaxed">
              Architected a multi-agent system utilizing CrewAI/LangGraph to automate financial due diligence.
              Simulates 5 specialized AI agents (Legal, Financial, Market, Risk, Synthesis) to analyze documents and generate comprehensive risk reports.
            </p>
          </div>

        </div>
      </section>

      {/* Publications */}
      <section className="mb-12">
        <h3 className="text-xl border-b border-gray-100 pb-2 mb-4">Publications</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          <li>
            <span className="font-semibold">"Finding Missing Persons"</span>,
            <span className="italic"> AIP Conference Proceedings</span>, Vol. 3206, Issue 1, 2024.
            <br />
            <span className="text-sm text-gray-600">DOI: 10.1063/5.0238128</span>
          </li>
        </ul>
      </section>

      <footer className="text-center text-xs text-gray-400 mt-20 pb-8">
        © {new Date().getFullYear()} Saumith Devarasetty. Built with Next.js.
      </footer>
    </main>
  );
}
