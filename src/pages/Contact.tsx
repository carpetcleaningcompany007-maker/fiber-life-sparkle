import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "0800 123 4567",
    subtext: "Mon-Fri, 8am-6pm",
    href: "tel:08001234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@thecarpetcleaningcompany.co.uk",
    subtext: "We reply within 24 hours",
    href: "mailto:info@thecarpetcleaningcompany.co.uk",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Serving All UK",
    subtext: "Commercial areas nationwide",
    href: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "24/7 Emergency Service",
    subtext: "Regular hours: Mon-Sat",
    href: "#",
  },
];

const propertyTypes = [
  "Office Building",
  "Hotel/Hospitality",
  "Retail Space",
  "Healthcare Facility",
  "Educational Institution",
  "Industrial/Warehouse",
  "Other",
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    propertyType: "",
    squareFootage: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Quote Request Received!",
      description: "We'll be in touch within 24 hours to discuss your requirements.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      propertyType: "",
      squareFootage: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold font-medium uppercase tracking-wider text-sm">Contact Us</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
              Get Your
              <span className="block text-primary">Free Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your commercial space? Fill out the form below and we'll 
              provide a detailed, no-obligation quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12 border border-border/50">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your space and we'll provide a tailored quote.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="07123 456789"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type *</Label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        required
                        className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select property type</option>
                        {propertyTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="squareFootage">Approximate Size (sq ft)</Label>
                      <Input
                        id="squareFootage"
                        name="squareFootage"
                        value={formData.squareFootage}
                        onChange={handleChange}
                        placeholder="e.g., 5000"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about any specific requirements, stains, or concerns..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="hero"
                      size="xl"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Free Quote
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-navy rounded-2xl p-8 text-primary-foreground">
                <h3 className="font-display text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-accent-foreground transition-all duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-primary-foreground/60 text-sm">{item.title}</div>
                        <div className="font-medium group-hover:text-gold transition-colors">{item.value}</div>
                        <div className="text-primary-foreground/50 text-sm">{item.subtext}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Free, no-obligation quotes",
                    "Response within 24 hours",
                    "Fully insured service",
                    "Flexible scheduling",
                    "Satisfaction guaranteed",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">FAQ</span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How long does a commercial carpet clean take?",
                  a: "Timing depends on the size and condition of your carpets. A typical office floor (5,000 sq ft) takes 3-4 hours. We can work outside business hours to minimize disruption.",
                },
                {
                  q: "How soon can carpets be walked on after cleaning?",
                  a: "With our low-moisture Fiber Life Technology, carpets are typically dry and walkable within 2-4 hours. Light furniture can be replaced immediately.",
                },
                {
                  q: "Do you offer regular maintenance contracts?",
                  a: "Yes! We offer flexible maintenance plans from monthly to quarterly visits, tailored to your traffic levels and budget. Contract clients receive priority scheduling and discounted rates.",
                },
                {
                  q: "Is your cleaning process safe for allergies?",
                  a: "Absolutely. Our Fiber Life Technology uses hypoallergenic, eco-friendly solutions. The deep cleaning process actually reduces allergens by removing dust mites and trapped particles.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
