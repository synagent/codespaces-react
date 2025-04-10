import './App.css';
import Hero from './components/Hero';
import { FaBrain } from 'react-icons/fa';

function App() {
  return (
    <div className="App text-white font-sans min-h-screen flex flex-col justify-center items-center text-center px-4">
      <header className="mt-10">
        {/* Logo */}
        <img 
        src="logo1.png" 
        alt="SynAgent Logo" 
        className="w-20 md:w-24 lg:w-28 h-auto mx-auto mb-4 glow"
        />

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">SynAgent</h1>
        <p className="text-lg text-slate-300 mb-4">
          Your AI Assistant for Business Efficiency
        </p>

        {/* Subtext */}
        <p className="text-sm text-slate-400 max-w-lg mx-auto mb-6">
          Launch your own AI agent to automate workflows, respond instantly,
          and stay productive.
        </p>

        {/* CTA Button */}
        <a
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all"
          href="https://youtube.com/@synagent?si=0DcaXGOLP91eL03E"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶️ Watch the Demo
        </a>
      </header>

      {/* Hero Component */}
      <div className="my-16 w-full">
        <Hero />
      </div>

      {/* Scroll Teaser Section */}
      <div className="h-screen bg-slate-800 flex flex-col items-center justify-center w-full" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Scroll Test Section</h2>
        <div className="text-blue-400 text-5xl">
          <FaBrain />
        </div>
      </div>

      {/* Coming Soon Section */}
      <section className="py-16 text-center bg-slate-900 w-full">
        <h3 className="text-3xl font-bold mb-6">Coming Soon</h3>
        <ul className="space-y-2 text-slate-300 text-lg">
          <li>✅ Slack Agent Integration</li>
          <li>✅ CRM Dashboard Module</li>
          <li>✅ Real-time Alerts with Edge Functions</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
