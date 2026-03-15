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
              className="relative rounded-[2rem] w-full h-[500px] lg:h-[600px] object-cover object-[center_20%] shadow-xl"
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
                Za více než deset let v beauty světě jsem nalíčila stovky žen. A jednu věc jsem za tu dobu pochopila velmi rychle. Většina z nás nepotřebuje víc make-upu. Potřebujeme jen vědět, jak ho lépe použít.
              </p>
              <p>
                Nevěřím na make-up, který vás schová nebo z vás udělá někoho jiného. Věřím na make-up, který zvýrazní to, co už tam dávno je. Ať už se chystáte na svatbu, velkou událost nebo se jen chcete naučit pár triků pro každodenní líčení, které vám ušetří čas i nervy, jsem tu pro vás.
              </p>
              <p>
                Minimálně stejně důležitá je pro mě péče o pleť. Protože ten nejlepší make-up vždy začíná skvělou skincare, ne u další vrstvy make-upu.
              </p>
              <p className="font-medium text-foreground">A moje filozofie?</p>
              <ul className="space-y-2 list-none">
                <li>• Obličej máte na celý život. Kabelky se mění.</li>
                <li>• SPF není letní doplněk, ale každodenní základ.</li>
                <li>• Micelární voda není odličování.</li>
                <li>• Dobrá rtěnka zvládne víc než složité líčení očí.</li>
                <li>• Pokud víte, co je BH90210, retinol by měl být váš kamarád.</li>
              </ul>
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
