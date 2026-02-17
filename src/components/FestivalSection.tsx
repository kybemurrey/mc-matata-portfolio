import { motion } from "framer-motion";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import festivalImage from "@/assets/festival-hero.jpg";
import festivalPoster from "@/assets/festival-poster.png";

const FestivalSection = () => {
  return (
    <section id="festival" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={festivalImage} alt="Cross Culture Festival" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Poster */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-sm mx-auto"
          >
            <img
              src={festivalPoster}
              alt="Cross Culture Festival Edition 2 Poster"
              className="w-full rounded-sm border border-border shadow-gold"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-primary tracking-[0.3em] text-sm mb-4">FLAGSHIP EVENT</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              CROSS CULTURE{" "}
              <span className="text-gradient-gold">FESTIVAL</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Transforming Eldoret into a global stage where cultures converge through art, music, 
              fashion, and food. An inclusive ecosystem celebrating diversity while empowering youth talent.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="text-primary" size={20} />
                <span>Edition 3 Coming Soon</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="text-primary" size={20} />
                <span>Eldoret, Uasin Gishu County</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://crossculturefestival.hustlesasa.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-display font-semibold tracking-widest text-sm px-8 py-4 rounded-sm hover:opacity-90 transition-opacity"
              >
                BUY TICKETS <ExternalLink size={16} />
              </a>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 border border-primary text-primary font-display font-semibold tracking-widest text-sm px-8 py-4 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                PARTNER WITH US
              </a>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Live Music & Dance", desc: "Top regional artists" },
                { title: "Hustle Clinics", desc: "Youth entrepreneurship" },
                { title: "Art & Fashion", desc: "Cultural expressions" },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-card/80 backdrop-blur border border-border rounded-sm text-center">
                  <h3 className="font-display text-sm font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;
