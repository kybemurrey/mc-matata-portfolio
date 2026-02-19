import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
  </svg>
);

const socialLinks = [
  {
    href: "https://www.instagram.com/mc_matataa",
    icon: Instagram,
    label: "Instagram",
    handle: "@mc_matataa",
  },
  {
    href: "https://www.facebook.com/arnold.birgen",
    icon: Facebook,
    label: "Facebook",
    handle: "@Mc-MATATA",
  },
  {
    href: "https://www.tiktok.com/@mcmatataa",
    icon: TikTokIcon,
    label: "TikTok",
    handle: "@mcmatataa",
  },
];

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
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-1 mt-4">
              {socialLinks.map(({ label, handle }) => (
                <p key={label} className="text-muted-foreground text-xs">{handle}</p>
              ))}
            </div>
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
