import { Link } from "react-router-dom";
import { ArrowRight, Building2, Hotel, ShoppingBag, Stethoscope, GraduationCap, Warehouse, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import commercialImage from "@/assets/commercial-office.jpg";
import heroImage from "@/assets/hero-office.jpg";

const services = [
  {
    icon: Building2,
    title: "Office Buildings",
    description: "Comprehensive carpet care for corporate environments. We work around your schedule to minimize disruption while delivering exceptional results.",
    features: ["After-hours cleaning", "High-traffic area focus", "Regular maintenance plans"],
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description: "Maintain the pristine appearance your guests expect. Our quick-drying solutions mean rooms are ready faster.",
    features: ["Fast turnaround times", "Hallway & lobby cleaning", "Guest room refreshes"],
  },
  {
    icon: ShoppingBag,
    title: "Retail Spaces",
    description: "Keep your store looking inviting with carpets that make a great first impression on every customer.",
    features: ["Weekend availability", "Display area protection", "Entrance matting care"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Facilities",
    description: "Hygienic cleaning solutions that meet the stringent requirements of medical environments.",
    features: ["Sanitizing treatments", "Allergen reduction", "Compliance-ready documentation"],
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Safe, non-toxic cleaning for schools and universities. Protecting students and staff alike.",
    features: ["School holiday scheduling", "Classroom deep cleans", "Common area maintenance"],
  },
  {
    icon: Warehouse,
    title: "Industrial & Warehouses",
    description: "Heavy-duty cleaning for tough commercial environments. We tackle the dirtiest carpets.",
    features: ["Industrial-strength cleaning", "Large area coverage", "Flexible scheduling"],
  },
];

const process = [
  {
    step: "01",
    title: "Initial Assessment",
    description: "We survey your space to understand your specific needs and provide an accurate quote.",
  },
  {
    step: "02",
    title: "Custom Plan",
    description: "We develop a tailored cleaning plan using Fiber Life Technology suited to your carpet type.",
  },
  {
    step: "03",
    title: "Professional Clean",
    description: "Our trained technicians execute the deep clean with minimal disruption to your operations.",
  },
  {
    step: "04",
    title: "Quality Check",
    description: "Final inspection ensures every area meets our exacting standards before sign-off.",
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Services</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
              Commercial Carpet
              <span className="block text-primary">Cleaning Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From offices to hotels, retail to healthcare - we provide expert carpet cleaning 
              solutions tailored to every commercial environment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/20"
              >
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">How It Works</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Our Cleaning Process
            </h2>
            <p className="text-muted-foreground text-lg">
              A systematic approach ensures consistent, exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-8xl font-display font-bold text-primary/10 absolute -top-4 left-0">
                  {item.step}
                </div>
                <div className="relative pt-12">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image & Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={commercialImage}
                  alt="Commercial carpet cleaning service"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 gradient-primary rounded-2xl -z-10 opacity-30" />
            </div>

            <div>
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="font-display text-4xl font-bold text-foreground mt-4 mb-6">
                The Professional Choice for Commercial Spaces
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                With over 15 years of experience and our proprietary Fiber Life Technology, 
                we deliver results that exceed expectations.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Fully insured and trained technicians",
                  "Eco-friendly, non-toxic cleaning solutions",
                  "Flexible scheduling to suit your business",
                  "Competitive pricing with no hidden costs",
                  "Satisfaction guaranteed on every job",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Contact us today for a free assessment and quote. No obligation, just honest advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request Free Quote
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
