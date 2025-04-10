import Hero from './components/Hero';
import { FaBrain } from 'react-icons/fa';

import VideoSection from './components/VideoSection';
import Animation from './components/Animation';
import Footer from './components/Footer';
import Feature from './components/Feature';
import BackgroundCircuits from './components/BackgroundCircuits';

import './App';



function App() {
  return (
    <div className="relative bg-radial text-white font-sans overflow-x-hidden min-h-screen">
      {/* Visual SVG Glow Background */}
      <BackgroundCircuits />
{/* Optional: Test if icon renders */}
<div className="text-center py-6 text-blue-400 text-5xl">
        <FaBrain /> {/* ← This should show a brain icon at the top */}
      </div>
      {/* Main Sections */}
      <Hero />
      
      <div className="h-screen bg-slate-800 flex items-center justify-center text-white" data-aos="fade-up">
  <h2 className="text-3xl font-bold">Scroll Test Section</h2>
</div>

      <VideoSection />
      <Features />
      
      <Animation />
      <Footer />
       {/* Optional: Scroll space to trigger AOS */}
       <div className="h-screen bg-black flex justify-center items-center text-2xl">
        👋 Scroll test block
      </div>
    </div>
  );
}

export default App;
