import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";
import portfolio4 from "@/assets/portfolio-4.png";
import portfolio5 from "@/assets/portfolio-5.png";
import portfolio6 from "@/assets/portfolio-6.png";

const portfolioImages = [
  { src: portfolio1, alt: "Editorial beauty makeup with bold red lips" },
  { src: portfolio2, alt: "Natural glam makeup look with coral lips" },
  { src: portfolio3, alt: "Artistic black and white beauty portrait" },
  { src: portfolio4, alt: "Classic elegant makeup with red lip" },
  { src: portfolio5, alt: "Soft romantic bridal makeup" },
  { src: portfolio6, alt: "Creative glitter makeup look" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
            My Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Portfolio
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            A curated collection of my favorite looks, from editorial glamour to natural beauty.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                index === 0 || index === 5 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 || index === 5 ? "h-full min-h-[400px]" : "h-[250px] md:h-[300px]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-body text-sm text-cream">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
