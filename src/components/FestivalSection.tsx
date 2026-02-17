import { motion } from "framer-motion";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import festivalImage from "@/assets/festival-hero.jpg";

const FestivalSection = () => {
  return (
    <section id="festival" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={festivalImage} alt="Cross Culture Festival" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-display text-primary tracking-[0.3em] text-sm mb-4">FLAGSHIP EVENT</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            CROSS CULTURE{" "}
            <span className="text-gradient-gold">FESTIVAL</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming Eldoret into a global stage where cultures converge through art, music, 
            fashion, and food. An inclusive ecosystem celebrating diversity while empowering youth talent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="text-primary" size={20} />
            <span>Edition 3 Coming Soon</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="text-primary" size={20} />
            <span>Eldoret, Uasin Gishu County</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
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
        </motion.div>

        {/* Festival highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { title: "Live Music & Dance", desc: "Top regional artists and cultural performances" },
            { title: "Hustle Clinics", desc: "Entrepreneurship workshops for young creatives" },
            { title: "Art & Fashion", desc: "Showcasing diverse cultural expressions" },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-card/80 backdrop-blur border border-border rounded-sm text-center">
              <h3 className="font-display text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FestivalSection;
