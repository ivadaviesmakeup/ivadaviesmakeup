import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Veronika K.",
    text: "Moc děkuji Ivě za individuální kurz make-upu, který velmi doporučuji. Iva je skvělá, všechno mi ukazovala a nechala vyzkoušet, takže jsem v průběhu (a následně i doma) byla schopná líčení bez problémů zreplikovat. Od té doby se doma umím nalíčit jako na kurzu s Ivou. Oceňuji, že Iva při kurzu využívala především věci, co jsem si s sebou přinesla, nemusela jsem si tak kupovat spoustu nových malovátek a skin care, ale začala jsem se na ty moje dívat jinýma očima a opravdu nyní využívám jejich potenciál. Kurz je jako tři hodiny s kámoškou, při kterých se naučíte se hezky namalovat, dozvíte se spoustu věcí, můžete se na cokoliv zeptat a za neznalost ani nešikovnost vás nikdo nesoudí.",
    rating: 5,
  },
  {
    name: "Renata H.",
    text: "Pořídila jsem si kurz u Ivy zejména kvůli skin care, ale nakonec jsem byla moc ráda, že pokrýval i makeup. K Ivě jsem jela s minimálními znalostmi i povědomím o obojím (čti: vím, že mám používat SPFko, krém a lehce se maluju). Ale z kurzu jsem odjížděla nabitá informacemi o celé skin care routine. Dozvěděla jsem se, co a jak s make-upem vzhledem k mé pleti a dostala konkrétní tipy na produkty. Takže jsem se těšila, až si to projdu doma znovu a pořídím všechno potřebné. Strávila jsem s Ivou asi 3 hodiny, které neuvěřitelně utekly. Strašně jsem si to užila, a navíc se fakt nasmála. Všechno, co jsme probraly jsem pak byla schopná jednoduše převést do praxe a teď si to dost užívám. A ano, tohle píšu zatímco mám aplikovaný retinal, který zařídí, že budu forever young. Pokud hledáte někoho, kdo vám všechno vysvětlí od základu, poradí co a jak a ještě s ním strávíte příjemný čas, Iva it is!",
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
