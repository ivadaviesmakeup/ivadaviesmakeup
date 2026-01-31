import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-cream to-secondary/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 block"
            >
              Makeup Artist & Educator
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-6"
            >
              Enhance Your
              <span className="block italic text-primary">Natural Beauty</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-body text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Professional makeup artistry and personalized skincare education to help you look and feel your absolute best, every single day.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:bg-burgundy-light transition-all duration-300 hover:shadow-lg"
              >
                Explore Services
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground/20 text-foreground font-body font-medium rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                View Portfolio
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-gold/30 to-accent/20 rounded-[2rem] blur-2xl" />
              <img
                src={heroImage}
                alt="Professional makeup artistry"
                className="relative rounded-[2rem] w-full h-[500px] lg:h-[600px] object-cover shadow-2xl"
              />
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -left-4 lg:-left-8 bottom-20 bg-background/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl border border-border"
              >
                <p className="font-display text-3xl font-semibold text-primary">10+</p>
                <p className="font-body text-sm text-muted-foreground">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
