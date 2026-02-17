import { motion } from "framer-motion";
import { Heart, GraduationCap, PartyPopper, Megaphone, Home, Users } from "lucide-react";

const services = [
  { icon: Heart, title: "Weddings & Koitos", desc: "Traditional and modern ceremonies with cultural flair" },
  { icon: GraduationCap, title: "Graduation Parties", desc: "Celebrate your milestones with unforgettable energy" },
  { icon: PartyPopper, title: "Birthdays", desc: "Make your special day truly memorable" },
  { icon: Megaphone, title: "Corporate Events", desc: "Product launches, galas, and brand activations" },
  { icon: Home, title: "Homecoming Ceremonies", desc: "Bringing communities together with pride" },
  { icon: Users, title: "Road Shows & Gatherings", desc: "High-energy crowd engagement at any scale" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-primary tracking-[0.3em] text-sm mb-4">WHAT I DO</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            EVENT <span className="text-gradient-gold">COVERAGE</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-8 bg-card border border-border rounded-sm hover:border-primary transition-colors"
            >
              <service.icon className="mb-4 text-primary" size={32} />
              <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
