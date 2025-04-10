import './App.css';

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