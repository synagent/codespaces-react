import './App.css';
import Hero from './components/Hero';
import { FaBrain } from 'react-icons/fa';
function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src="image.png" className="App-logo" alt="logo" />
        <p>
        Your AI Assistant test
for Business Efficiency <span className="heart"></span> 
        </p>
        <p className="small">
        Launch your own AI agent to automate workflows, respond instantly, and stay productive.
        </p>
        <p>
          {/* Main Sections */}
                <Hero />
                
                <div className="h-screen bg-slate-800 flex items-center justify-center text-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold">Scroll Test Section</h2>
          </div>
          <div className="text-center py-6 text-blue-400 text-5xl">
                  <FaBrain /> {/* ← This should show a brain icon at the top */}
                </div>
          <a
            className="App-link"
            href="https://youtube.com/@synagent?si=0DcaXGOLP91eL03E"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Video
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;