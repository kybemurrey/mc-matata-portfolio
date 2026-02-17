import { motion } from "framer-motion";
import corporateImg from "@/assets/matata-corporate.png";
import pointingImg from "@/assets/matata-pointing.png";
import stageImg from "@/assets/matata-stage.png";
import micImg from "@/assets/matata-mic.png";

const images = [
  { src: pointingImg, alt: "MC Matata portrait", span: "md:row-span-2" },
  { src: stageImg, alt: "MC Matata on stage with crowd", span: "md:col-span-2" },
  { src: corporateImg, alt: "MC Matata corporate look", span: "" },
  { src: micImg, alt: "MC Matata with microphone", span: "" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-display text-primary tracking-[0.3em] text-sm mb-4">IN ACTION</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            THE <span className="text-gradient-gold">GALLERY</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`overflow-hidden rounded-sm border border-border group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
