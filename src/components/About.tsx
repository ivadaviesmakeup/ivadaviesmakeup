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
              alt="O mně"
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
              O mně
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Vášeň pro krásu,
              <span className="block italic text-primary">péče o vás</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                S více než desetiletou zkušeností v beauty průmyslu jsem měla tu čest spolupracovat se stovkami klientek a pomáhat jim objevit a podtrhnout jejich přirozenou krásu.
              </p>
              <p>
                Moje filozofie je jednoduchá: make-up by měl zvýraznit to, kým už jste, ne vás maskovat. Ať se chystáte na svatbu, speciální příležitost, nebo se chcete naučit techniky pro každodenní sebevědomí – jsem tu, abych vás provedla.
              </p>
              <p>
                Kromě líčení se vášnivě věnuji vzdělávání v péči o pleť. Věřím, že skvělý make-up začíná skvělou pletí, a ráda své klientky vzdělávám o jejich jedinečné pleti a jak o ni pečovat.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {[
                { number: "500+", label: "Spokojených klientek" },
                { number: "10+", label: "Let zkušeností" },
                { number: "100+", label: "Absolventek kurzů" },
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
