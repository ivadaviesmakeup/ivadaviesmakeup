import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Heart, Star } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Bridal Makeup",
    description: "Create your perfect bridal look with a personalized consultation, trial session, and flawless application for your special day.",
    features: ["Consultation", "Trial Session", "Day-of Application"],
  },
  {
    icon: Star,
    title: "Editorial & Events",
    description: "Professional makeup for photoshoots, fashion shows, special events, and any occasion where you want to shine.",
    features: ["Photoshoots", "Special Events", "Fashion Shows"],
  },
  {
    icon: GraduationCap,
    title: "Makeup Lessons",
    description: "Learn professional techniques tailored to your features. From everyday looks to special occasion glam.",
    features: ["One-on-One Sessions", "Custom Techniques", "Product Guidance"],
  },
  {
    icon: Heart,
    title: "Skincare Education",
    description: "Personalized skincare routines and product recommendations based on your unique skin type and concerns.",
    features: ["Skin Analysis", "Custom Routine", "Product Recommendations"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
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
            What I Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
            Services & Education
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From stunning makeup artistry to empowering education, discover how I can help you look and feel beautiful.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background p-8 lg:p-10 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="font-body text-xs font-medium px-3 py-1.5 bg-secondary rounded-full text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:bg-burgundy-light transition-all duration-300 hover:shadow-lg"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
