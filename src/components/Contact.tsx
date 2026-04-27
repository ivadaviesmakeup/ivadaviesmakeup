import { motion } from "framer-motion";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
              Kontakt
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
              Pojďme spolupracovat
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Chcete si rezervovat termín nebo máte dotazy? Ráda vám pomůžu. Ozvěte se, budu se na vás těšit.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {[
              { icon: Mail, label: "Email", value: "davies.iva@gmail.com", href: "mailto:davies.iva@gmail.com" },
              { icon: Phone, label: "Telefon", value: "+420 731 644 040", href: "tel:+420731644040" },
              { icon: MapPin, label: "Lokalita", value: "Praha", href: "#" },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="group bg-secondary/50 p-6 rounded-2xl text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <contact.icon className="w-6 h-6 mx-auto mb-3 text-primary group-hover:text-primary-foreground transition-colors" />
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground group-hover:text-primary-foreground/80 mb-1 transition-colors">
                  {contact.label}
                </p>
                <p className="font-body font-medium text-foreground group-hover:text-primary-foreground transition-colors">
                  {contact.value}
                </p>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
