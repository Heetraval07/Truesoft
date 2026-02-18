import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "ERPNext", path: "/erpnext" },
  { label: "CRM", path: "/crm" },
  { label: "Digital Marketing", path: "/digital-marketing" },
  { label: "Web Application", path: "/web-application" },
  { label: "Odoo", path: "/odoo" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="Truesoft Logo"
            width={160}
            height={50}
            loading="eager"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2 rounded-lg bg-[#f07b49] text-white font-medium text-sm hover:bg-[#d96535] transition-all hover:shadow-[0_10px_25px_rgba(240,123,73,0.3)] hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg bg-[#f07b49] text-white font-medium text-sm text-center hover:bg-[#d96535] transition-colors"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
