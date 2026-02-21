import { motion } from "framer-motion";
import heroImage from "@/assets/mc-matata-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MC Matata"
          className="w-full h-full object-cover object-[30%_top]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-primary tracking-[0.3em] text-sm mb-4"
          >
            MASTER OF CEREMONIES • ELDORET, KENYA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-display font-bold leading-none mb-6"
          >
            MC{" "}
            <span className="text-gradient-gold">MATATA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-lg mb-8 font-body"
          >
            Corporate Hype Man & Cultural Architect. Founder of the Cross Culture Festival. 
            Bringing infectious energy to every stage across the North Rift.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#booking"
              className="inline-block bg-gradient-gold text-primary-foreground font-display font-semibold tracking-widest text-sm px-8 py-4 rounded-sm hover:opacity-90 transition-opacity animate-pulse-gold"
            >
              BOOK MC MATATA
            </a>
            <a
              href="#festival"
              className="inline-block border border-primary text-primary font-display font-semibold tracking-widest text-sm px-8 py-4 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              CROSS CULTURE FESTIVAL
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
