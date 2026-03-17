import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Star } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Svatební líčení",
    description: "Vypadat skvěle naživo i na fotkách a hlavně, to budete pořád vy. Součástí služby je líčení v den svatby a zkouška líčení předem.",
    price: "6 000 Kč",
  },
  {
    icon: Star,
    title: "Líčení",
    description: "Denní, večerní nebo speciální příležitost, líčení přizpůsobím vám, vaší pleti i tomu, jak se chcete cítit.",
    price: "2 000-3 000 Kč",
  },
  {
    icon: GraduationCap,
    title: "Kurzy líčení & péče o pleť",
    description: "Individuální kurz (2-3 hodiny), kde si ujasníte skincare, pochopíte svůj make-up a natrénujete líčení na míru. Zaměříme se na to, co opravdu využijete, od každodenního looku až po jeho úpravu na večer.",
    price: "4 000 Kč",
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
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>
              <span className="font-display text-lg font-semibold text-primary">
                {service.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
