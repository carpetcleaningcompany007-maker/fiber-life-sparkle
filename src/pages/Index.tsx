import { Link } from "react-router-dom";
import { ArrowRight, Shield, Sparkles, Clock, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-office.jpg";
import fiberTechImage from "@/assets/fiber-tech.jpg";
import commercialImage from "@/assets/commercial-office.jpg";

const features = [
  {
    icon: Shield,
    title: "Fiber Life Technology",
    description: "Our revolutionary cleaning system with polymer encapsulation and hydrogen peroxide activation.",
  },
  {
    icon: Sparkles,
    title: "Deep Stain Removal",
    description: "Hog's hair pad activation removes even the toughest embedded stains effectively.",
  },
  {
    icon: Clock,
    title: "Quick Drying",
    description: "Minimal disruption to your business with our fast-drying cleaning solutions.",
  },
  {
    icon: Award,
    title: "Built-in Stain Guard",
    description: "Long-lasting protection included in every clean to prevent future staining.",
  },
];

const testimonials = [
  {
    quote: "The Carpet Cleaning Company transformed our office. The Fiber Life Technology is remarkable - our carpets look brand new.",
    author: "Sarah Mitchell",
    role: "Facilities Manager, TechCorp UK",
  },
  {
    quote: "Professional, punctual, and the results speak for themselves. Highly recommend for any commercial space.",
    author: "James Richardson",
    role: "Operations Director, Kingsley Hotels",
  },
  {
    quote: "The stain guard solution has saved us countless cleanings. Our carpets stay cleaner for much longer now.",
    author: "Emma Thompson",
    role: "Office Manager, Sterling & Partners",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "10M+", label: "Sq Ft Cleaned" },
  { value: "100%", label: "Satisfaction" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Professional commercial carpet cleaning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by Fiber Life Technology</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up opacity-0 delay-100">
              Commercial Carpet
              <span className="block text-gradient-gold">Cleaning Excellence</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in-up opacity-0 delay-200">
              Transform your workspace with our revolutionary cleaning technology. 
              Deep clean, stain removal, and long-lasting protection for commercial carpets.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 delay-300">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="xl" asChild>
                <Link to="/technology">Learn About Fiber Life</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Advanced Carpet Care Technology
            </h2>
            <p className="text-muted-foreground text-lg">
              Our proprietary Fiber Life Technology combines cutting-edge chemistry with professional expertise 
              to deliver unmatched cleaning results for commercial spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl gradient-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
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

      {/* Technology Preview Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={fiberTechImage}
                  alt="Fiber Life Technology close-up"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 gradient-gold rounded-2xl -z-10 opacity-50" />
            </div>

            <div>
              <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Innovation</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Fiber Life Technology
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our revolutionary three-stage cleaning system provides the deepest clean possible 
                while protecting your carpet fibers for years to come.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Polymer encapsulation technology traps and lifts dirt",
                  "Hydrogen peroxide activation for tough stain removal",
                  "Hog's hair pad application for deep fiber cleaning",
                  "Built-in stain guard protection included",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/technology">
                  Discover The Science
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Services</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Complete Commercial Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From offices to hotels, retail spaces to healthcare facilities, 
              we provide tailored carpet care solutions for every commercial environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Office Buildings",
                description: "Keep your workspace looking professional with regular deep cleaning services.",
                image: commercialImage,
              },
              {
                title: "Hotels & Hospitality",
                description: "Maintain pristine guest areas with our quick-drying cleaning solutions.",
                image: heroImage,
              },
              {
                title: "Retail Spaces",
                description: "High-traffic areas need special attention. We deliver lasting results.",
                image: fiberTechImage,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
              Trusted by Businesses Across the UK
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 text-gold" />
                  ))}
                </div>
                <blockquote className="text-primary-foreground/90 text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-primary-foreground">{testimonial.author}</div>
                  <div className="text-primary-foreground/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl animate-float-delayed" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Carpets?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Get a free, no-obligation quote today and discover the Fiber Life difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Request Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="xl" asChild>
                <a href="tel:08001234567">Call 0800 123 4567</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
