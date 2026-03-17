import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jana K.",
    text: "Iva je úžasná! Svatební líčení bylo přesně takové, jaké jsem si přála. Vydrželo celý den a na fotkách vypadám skvěle.",
    rating: 5,
  },
  {
    name: "Petra M.",
    text: "Kurz líčení mi otevřel oči. Konečně vím, co funguje na mou pleť a líčení mi zabere polovinu času.",
    rating: 5,
  },
  {
    name: "Lucie S.",
    text: "Profesionální přístup a krásný výsledek. Cítila jsem se jako lepší verze sebe, ne jako někdo jiný.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
            Co říkají klientky
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Recenze
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 lg:p-10 rounded-2xl border border-border text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                "{review.text}"
              </p>
              <span className="font-display text-base font-medium text-foreground">
                {review.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
