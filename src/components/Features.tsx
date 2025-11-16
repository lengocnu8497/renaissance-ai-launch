import { Sparkles, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Matching",
    description: "Our intelligent system analyzes your goals and preferences to recommend the perfect procedures and providers for you.",
  },
  {
    icon: Users,
    title: "Verified Providers",
    description: "Access a curated network of board-certified professionals with verified credentials and proven track records.",
  },
  {
    icon: Shield,
    title: "Transparent Guidance",
    description: "Get honest, unbiased information about procedures, costs, and recovery times—no surprises, just clarity.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Why Choose Renaissance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making informed decisions about cosmetic procedures shouldn't be overwhelming. We're here to simplify your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-smooth group"
            >
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
