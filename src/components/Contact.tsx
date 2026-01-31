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
              Chcete si rezervovat termín nebo máte dotazy? Ráda vám pomůžu. Ozvěte se a vytvoříme spolu něco krásného.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: Mail, label: "Email", value: "info@beaute.cz", href: "mailto:info@beaute.cz" },
              { icon: Phone, label: "Telefon", value: "+420 123 456 789", href: "tel:+420123456789" },
              { icon: Instagram, label: "Instagram", value: "@beaute_cz", href: "https://instagram.com" },
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-card p-8 lg:p-12 rounded-3xl border border-border"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="font-body text-sm font-medium text-foreground block mb-2">
                    Jméno
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Vaše jméno"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-body text-sm font-medium text-foreground block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="vas@email.cz"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="font-body text-sm font-medium text-foreground block mb-2">
                  Zájem o službu
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                >
                  <option value="">Vyberte službu</option>
                  <option value="bridal">Svatební líčení</option>
                  <option value="editorial">Společenské & Eventy</option>
                  <option value="lessons">Kurzy líčení</option>
                  <option value="skincare">Péče o pleť</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="font-body text-sm font-medium text-foreground block mb-2">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Napište mi o vaší akci nebo co byste se chtěla naučit..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:bg-burgundy-light transition-all duration-300 hover:shadow-lg"
              >
                Odeslat zprávu
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
