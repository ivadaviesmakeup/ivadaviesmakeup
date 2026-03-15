import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Star } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Svatební líčení",
    features: ["Konzultace", "Zkušební líčení", "Líčení v den svatby"],
  },
  {
    icon: Star,
    title: "Společenské líčení",
    features: ["Focení", "Speciální příležitosti", "Módní přehlídky"],
  },
  {
    icon: GraduationCap,
    title: "Kurzy líčení & péče o pleť",
    features: ["Individuální lekce", "Vlastní techniky", "Výběr produktů", "Analýza pleti", "Sestavení rutiny"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
            Co nabízím
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background p-8 lg:p-10 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl text-center"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mx-auto mb-5">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="font-body text-xs font-medium px-3 py-1.5 bg-secondary rounded-full text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
