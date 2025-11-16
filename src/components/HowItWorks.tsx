const steps = [
  {
    number: "01",
    title: "Share Your Goals",
    description: "Tell us about your aesthetic aspirations and any concerns you may have.",
  },
  {
    number: "02",
    title: "Get Matched",
    description: "Our AI analyzes your profile to recommend personalized procedures and providers.",
  },
  {
    number: "03",
    title: "Book with Confidence",
    description: "Connect with verified professionals and schedule consultations seamlessly.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your transformation journey, simplified in three steps
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="text-6xl md:text-7xl font-serif font-bold bg-gradient-accent bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
