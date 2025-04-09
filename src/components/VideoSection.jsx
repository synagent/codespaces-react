const VideoSection = () => (
    <section id="video" className="bg-slate-800 py-16 px-6 text-center" data-aos="fade-in">
      <h3 className="text-3xl font-bold mb-6">See SynAgent in Action</h3>
      <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="SynAgent Demo Video"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
  
  export default VideoSection;
  