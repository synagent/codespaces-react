const Features = () => {
    const features = [
      {
        icon: "🧠",
        title: "AI-Powered Assistant",
        description: "Respond to customer inquiries automatically and intelligently.",
        aos: "fade-right",
      },
      {
        icon: "🔄",
        title: "Workflow Automation",
        description: "Trigger actions, schedule tasks, and reduce manual work.",
        aos: "fade-up",
      },
      {
        icon: "⚡",
        title: "Real-Time Notifications",
        description: "Get instant updates via email, SMS, or chat when actions occur.",
        aos: "fade-left",
      },
      {
        icon: "🤖",
        title: "Easy Integrations",
        description: "Connect with Slack, Zapier, CRMs, and your internal tools.",
        aos: "zoom-in",
      },
    ];
  
    return (
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
          Powerful Features to Boost Your Productivity
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-slate-800 shadow-lg"
              data-aos={feature.aos}
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  
        