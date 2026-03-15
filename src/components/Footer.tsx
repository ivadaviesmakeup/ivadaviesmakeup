import { Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="font-display text-2xl font-semibold tracking-wide">
            Iva Davies Make-up
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/ivadaviesmakeup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:davies.iva@gmail.com"
              className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-cream/60 flex items-center gap-1">
            Vytvořeno s <Heart size={14} className="text-rose-gold fill-rose-gold" /> © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
