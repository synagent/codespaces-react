const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative z-10">
    <img
      src="/image.png"
      alt="SynAgent Logo"
      className="w-28 md:w-40 drop-shadow-[0_0_6px_#4f6b6b] mb-6"
      data-aos="zoom-in"
      data-aos-duration="800"
    />

    <h1
      className="text-4xl md:text-5xl font-extrabold mb-4"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Your AI Assistant<br />for Business Efficiency 
    </h1>

    <p
      className="max-w-xl text-lg text-slate-300 mb-6"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      Launch your own AI agent to automate workflows, respond instantly, and stay productive.
    </p>

    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all"
      data-aos="zoom-in"
      data-aos-delay="500"
    >
      Watch Demo
    </a>
  </section>
);

export default Hero;

