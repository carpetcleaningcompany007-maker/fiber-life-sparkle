import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Shield, Sparkles, Zap, FlaskConical, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import fiberTechImage from "@/assets/fiber-tech.jpg";

const technologies = [
  {
    icon: FlaskConical,
    title: "Polymer Encapsulation",
    description: "Our advanced polymer chemistry encapsulates dirt particles at the molecular level, crystallizing them for easy extraction without damaging carpet fibers.",
    color: "from-teal-dark to-teal-light",
  },
  {
    icon: Droplets,
    title: "Hydrogen Peroxide Activation",
    description: "Oxygen-based cleaning power breaks down organic stains and odors naturally, leaving carpets fresh and hygienically clean without harsh chemicals.",
    color: "from-teal-light to-primary",
  },
  {
    icon: Sparkles,
    title: "Hog's Hair Pad Technology",
    description: "Specially designed natural bristle pads work the cleaning solution deep into carpet fibers, lifting embedded dirt that vacuuming alone can't reach.",
    color: "from-primary to-teal-dark",
  },
  {
    icon: Shield,
    title: "Built-in Stain Guard",
    description: "Every clean includes our protective stain guard solution, creating an invisible barrier that repels spills and prevents future staining.",
    color: "from-gold to-gold-light",
  },
];

const benefits = [
  {
    title: "Longer Lasting Clean",
    description: "Carpets stay cleaner for longer with our encapsulation technology.",
  },
  {
    title: "Faster Drying Time",
    description: "Low-moisture process means carpets dry in hours, not days.",
  },
  {
    title: "Eco-Friendly Formula",
    description: "Biodegradable chemicals that are safe for people and planet.",
  },
  {
    title: "Fiber Protection",
    description: "Gentle on fibers while tough on stains - extending carpet life.",
  },
  {
    title: "Allergen Reduction",
    description: "Deep cleaning removes dust mites, pollen, and allergens.",
  },
  {
    title: "No Sticky Residue",
    description: "Crystallizing polymers leave no residue that attracts new dirt.",
  },
];

const process = [
  {
    step: 1,
    title: "Pre-Treatment",
    description: "We apply our polymer encapsulation solution to the carpet, allowing it to penetrate deep into the fibers and surround dirt particles.",
  },
  {
    step: 2,
    title: "Agitation",
    description: "Using our specialized hog's hair pads, we work the solution through the carpet, ensuring maximum contact with all soiling.",
  },
  {
    step: 3,
    title: "Hydrogen Peroxide Activation",
    description: "For tough stains, we activate hydrogen peroxide which releases oxygen to break down organic matter and brighten fibers.",
  },
  {
    step: 4,
    title: "Crystallization",
    description: "The polymer solution crystallizes around dirt particles, making them brittle and easy to extract.",
  },
  {
    step: 5,
    title: "Extraction",
    description: "Professional vacuuming removes the crystallized soil, leaving carpets clean and residue-free.",
  },
  {
    step: 6,
    title: "Stain Guard Application",
    description: "We apply our protective stain guard solution, creating an invisible shield against future spills.",
  },
];

export default function TechnologyPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={fiberTechImage}
            alt="Fiber technology background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Revolutionary Cleaning Science</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mt-4 mb-6">
              Fiber Life
              <span className="block text-gradient-gold">Technology</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              The science behind the cleanest carpets. Our proprietary four-stage cleaning system 
              delivers results that traditional methods simply cannot match.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">The Science</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Four Pillars of Clean
            </h2>
            <p className="text-muted-foreground text-lg">
              Each element of our Fiber Life Technology works together to deliver 
              the deepest, longest-lasting clean possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      {tech.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">The Process</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              How Fiber Life Works
            </h2>
            <p className="text-muted-foreground text-lg">
              A six-step process that transforms your carpets from the fiber up.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

              <div className="space-y-8">
                {process.map((item, index) => (
                  <div key={index} className="relative flex gap-8">
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full gradient-primary items-center justify-center text-primary-foreground font-display font-bold text-xl shadow-medium z-10">
                      {item.step}
                    </div>
                    <div className="flex-1 p-6 rounded-xl bg-card shadow-soft">
                      <div className="flex items-center gap-3 mb-2 md:hidden">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {item.step}
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2 hidden md:block">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">The Benefits</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Why Fiber Life Matters
            </h2>
            <p className="text-muted-foreground text-lg">
              The advantages of our technology extend far beyond just a clean carpet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-soft transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Experience Fiber Life Technology
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              See the difference for yourself. Request a free demonstration and quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Book a Demonstration
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
