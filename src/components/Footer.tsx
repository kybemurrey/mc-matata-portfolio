import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">MC MATATA</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premier Master of Ceremonies & Cultural Architect. Founder of the Cross Culture Festival. 
              Based in Eldoret, Kenya.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-4">CONTACT</h4>
            <div className="space-y-3">
              <a href="tel:+254769652170" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone size={16} /> +254 769 652 170
              </a>
              <a href="mailto:birgenarnold5@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail size={16} /> birgenarnold5@gmail.com
              </a>
              <p className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={16} /> Eldoret, Kenya (North Rift Region)
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-4">FOLLOW</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/mcmatata" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/mcmatata" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm mt-4">@mcmatata</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} MC Matata Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
