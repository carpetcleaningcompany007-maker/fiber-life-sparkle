import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Heart, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-office.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We never settle for 'good enough'. Every carpet we clean receives our full attention and expertise.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships with our clients, becoming a trusted extension of their facilities team.",
  },
  {
    icon: Heart,
    title: "Care",
    description: "We care about our work, our clients, and our planet. Eco-friendly solutions are standard, not an upgrade.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Our Fiber Life Technology represents our commitment to always finding better ways to clean.",
  },
];

const timeline = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Started with a single van and a passion for making commercial spaces cleaner.",
  },
  {
    year: "2012",
    title: "Fiber Life Developed",
    description: "After years of research, our revolutionary cleaning technology was born.",
  },
  {
    year: "2016",
    title: "National Expansion",
    description: "Expanded operations to serve businesses across the entire UK.",
  },
  {
    year: "2020",
    title: "500+ Clients",
    description: "Reached the milestone of serving over 500 regular commercial clients.",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as a leading commercial carpet cleaning provider in the UK.",
  },
];

const team = [
  {
    name: "James Crawford",
    role: "Founder & CEO",
    description: "20+ years in commercial cleaning, passionate about innovation.",
  },
  {
    name: "Sarah Williams",
    role: "Operations Director",
    description: "Ensures every job meets our exacting quality standards.",
  },
  {
    name: "Michael Thompson",
    role: "Head of Technology",
    description: "Developed and continues to refine our Fiber Life system.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-medium uppercase tracking-wider text-sm">About Us</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
                The Carpet Cleaning
                <span className="block text-primary">Company</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                For over 15 years, we've been transforming commercial spaces across the UK 
                with our innovative cleaning solutions and unwavering commitment to excellence.
              </p>
              <div className="flex flex-wrap gap-8 text-center">
                <div>
                  <div className="font-display text-4xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground">Team Members</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={heroImage}
                  alt="Our professional team at work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 gradient-gold rounded-2xl -z-10 opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              From Humble Beginnings
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              What started as a small local operation has grown into one of the UK's most trusted 
              commercial carpet cleaning companies. Our journey has been driven by a simple belief: 
              that every business deserves a clean, professional environment.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row gap-8 items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="p-6 rounded-xl bg-card shadow-soft">
                        <div className="font-display text-2xl font-bold text-gold mb-2">
                          {item.year}
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full gradient-primary shadow-soft z-10 hidden md:block" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Values</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg">
              These core values guide everything we do, from how we treat our clients 
              to how we develop our cleaning solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Team</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Leadership
            </h2>
            <p className="text-muted-foreground text-lg">
              Meet the people behind The Carpet Cleaning Company.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl gradient-card shadow-soft border border-border/50"
              >
                <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-3xl font-bold text-primary-foreground">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <div className="text-gold font-medium text-sm mb-3">{member.role}</div>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">Credentials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
              Certified & Trusted
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Fully Insured",
              "ISO 9001 Certified",
              "NCCA Member",
              "CRB Checked Staff",
            ].map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
              >
                <CheckCircle className="w-6 h-6 text-gold" />
                <span className="text-primary-foreground font-medium">{cert}</span>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join the hundreds of businesses that trust us with their carpet care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Get in Touch
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
