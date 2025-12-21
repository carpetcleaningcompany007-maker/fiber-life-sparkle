import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Fiber Life Technology", href: "/technology" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Commercial Carpet Cleaning",
  "Office Carpet Care",
  "Stain Removal",
  "Deep Cleaning",
  "Maintenance Programs",
];

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-gold">
                <span className="text-accent-foreground font-display font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight">
                  The Carpet Cleaning
                </span>
                <span className="text-xs text-primary-foreground/60 font-medium tracking-wider uppercase">
                  Company
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Professional commercial carpet cleaning services using our revolutionary Fiber Life Technology. 
              Trusted by businesses across the UK.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Call Us</p>
                  <a href="tel:+441onal" className="text-sm font-medium hover:text-gold transition-colors">
                    0800 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Email Us</p>
                  <a href="mailto:info@thecarpetcleaningcompany.co.uk" className="text-sm font-medium hover:text-gold transition-colors">
                    info@thecarpetcleaningcompany.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Location</p>
                  <p className="text-sm font-medium">Serving All UK Commercial Areas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} The Carpet Cleaning Company. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
