import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "ERPNext", path: "/erpnext" },
    { label: "CRM Solutions", path: "/crm" },
    { label: "Digital Marketing", path: "/digital-marketing" },
    { label: "Web Application", path: "/web-application" },
    { label: "Odoo", path: "/odoo" },
  ],
  company: [
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="hero-gradient text-hero-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="TrueSoft Logo"
                  width={140}
                  height={45}
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-hero-foreground/70 text-sm leading-relaxed">
              Enterprise software solutions that transform your business. From ERP to CRM, we deliver excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-hero-foreground/70 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-hero-foreground/70 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-hero-foreground/70 text-sm">
                <Mail size={16} className="text-accent flex-shrink-0" />
                info@truesoft.com
              </li>
              <li className="flex items-center gap-2 text-hero-foreground/70 text-sm">
                <Phone size={16} className="text-accent flex-shrink-0" />
                054 765 8506
              </li>
              <li className="flex items-start gap-2 text-hero-foreground/70 text-sm">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                Office 201-09, Al Nisf Building, Dubai Airport Road, Dubai, UAE
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hero-foreground/10 mt-12 pt-8 text-center">
          <p className="text-hero-foreground/50 text-sm">
            © {new Date().getFullYear()} TrueSoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
