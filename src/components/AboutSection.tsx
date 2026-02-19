import { motion } from "framer-motion";
import { Mic, Users, Star, Award } from "lucide-react";
import pointingImg from "@/assets/matata-pointing.png";

const stats = [
  { icon: Mic, value: "500+", label: "Events Hosted" },
  { icon: Users, value: "10K+", label: "Festival Attendees" },
  { icon: Star, value: "8+", label: "Years Experience" },
  { icon: Award, value: "#1", label: "MC North Rift" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-sm border border-border">
              <img src={pointingImg} alt="MC Matata" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-gold rounded-sm opacity-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-primary tracking-[0.3em] text-sm mb-4">WHO IS</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              MC <span className="text-gradient-gold">MATATA</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From Eldoret to commanding the biggest stages across the nation — 
              MC Matata is an all-round Master of Ceremonies, corporate hype man, and cultural architect. 
              Known for his versatility in hosting everything from high-energy Gengetone events to 
              organized corporate functions, he has become a regional icon and role model, 
              bringing world-class MC energy to every stage he graces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-secondary rounded-sm border border-border"
            >
              <stat.icon className="mx-auto mb-3 text-primary" size={28} />
              <p className="font-display text-3xl font-bold text-gradient-gold">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
