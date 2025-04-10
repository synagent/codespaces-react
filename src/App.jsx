import React from 'react';
import LandingPage from './components/LandingPage';
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Animation from "./components/Animation";
import Footer from "./components/Footer";
import BackgroundCircuits from "./components/BackgroundCircuits";
import './index.css';

function App() {
  return (
    <div className="relative bg-radial text-white font-sans overflow-x-hidden">
      <BackgroundCircuits />
      <Hero />
      <VideoSection />
      <Animation />
      <Footer />
    </div>)
}

export default App;