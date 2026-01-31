import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.png";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] blur-2xl" />
            <img
              src={aboutImage}
              alt="About me"
              className="relative rounded-[2rem] w-full h-[500px] lg:h-[600px] object-cover shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Passion for Beauty,
              <span className="block italic text-primary">Dedication to You</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in the beauty industry, I've had the privilege of working with hundreds of clients, helping them discover and enhance their natural beauty.
              </p>
              <p>
                My philosophy is simple: makeup should enhance who you already are, not mask it. Whether you're preparing for your wedding day, a special event, or simply want to learn techniques for everyday confidence, I'm here to guide you.
              </p>
              <p>
                Beyond makeup artistry, I'm passionate about skincare education. I believe that great makeup starts with great skin, and I love empowering my clients with knowledge about their unique skin and how to care for it.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "10+", label: "Years Experience" },
                { number: "100+", label: "Students Taught" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-semibold text-primary">{stat.number}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
