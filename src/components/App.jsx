import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Animation from './components/Animation';
import Footer from './components/Footer';
import Features from './components/Features';
import BackgroundCircuits from './components/BackgroundCircuits';
import './index.css';



function App() {
  return (
    <div className="relative bg-radial text-white font-sans overflow-x-hidden min-h-screen">
      {/* Visual SVG Glow Background */}
      <BackgroundCircuits />

      {/* Main Sections */}
      <Hero />
      <div className="h-screen bg-slate-800 flex items-center justify-center text-white" data-aos="fade-up">
  <h2 className="text-3xl font-bold">Scroll Test Section</h2>
</div>

      <VideoSection />
      <Animation />
      <Footer />
    </div>
  );
}

export default App;
