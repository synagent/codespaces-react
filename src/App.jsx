import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
// Optional: BackgroundCircuits, VideoSection, etc.

function App() {
  return (
    <div className="relative bg-radial text-white font-sans overflow-x-hidden">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
