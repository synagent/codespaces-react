import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] text-white font-sans px-4">
      {/* Logo & Hero */}
      <header className="w-full max-w-3xl py-12 mx-auto text-center">
        <img
          src="/synagent-logo.png"
          alt="SynAgent Logo"
          className="mx-auto w-24 h-24 mb-4 glow"
        />
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">"SynAgent – Smarter Systems, Stronger Businesses."</h1>
        <p className="text-lg text-slate-300 mt-4">
          Your AI Assistant for Business Efficiency
        </p>
        <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
          Launch your own AI agent to automate workflows, respond instantly, and stay productive.
        </p>
        <a
          href="https://youtube.com/@synagent?si=0DcaXGOLP91eL03E"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition transform px-6 py-3 text-white rounded-lg shadow-lg"
        >
          ▶️ Watch the Demo
        </a>
      </header>

      {/* How It Works */}
      <section className="py-20 bg-slate-900 px-6 text-center">
      <h3 className="text-4xl text-red-500 font-bold text-center">Tailwind Is Working</h3>

        <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
          How SynAgent Works
        </h2>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div
            className="bg-slate-800 p-8 rounded-xl shadow-xl transition hover:scale-105"
            data-aos="fade-up"
          >
            <div className="text-blue-400 text-5xl mb-4">
              <i className="fas fa-plug"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <p className="text-slate-300 text-sm">
              SynAgent connects to your tools like Slack, Notion, or forms — ready to receive input.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="bg-slate-800 p-8 rounded-xl shadow-xl transition hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-blue-400 text-5xl mb-4">
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Process</h3>
            <p className="text-slate-300 text-sm">
              Your AI assistant handles logic, filters requests, and responds intelligently 24/7.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="bg-slate-800 p-8 rounded-xl shadow-xl transition hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-blue-400 text-5xl mb-4">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Deliver</h3>
            <p className="text-slate-300 text-sm">
              SynAgent sends smart replies, updates systems, or notifies your team instantly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
