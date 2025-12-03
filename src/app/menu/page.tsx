"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Pizza } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export default function Menu() {
  const context = useLanguage()
  if (!context) {
    return <div>Language context not available</div>
  }
  const { t } = context

  const categories = [
    {
      name: "Classiche",
      icon: Pizza,
      desc: "Traditional Italian pizzas",
      pizzas: [
        { name: "Margherita", desc: "Tomato, mozzarella, basil", price: "€12" },
        { name: "Marinara", desc: "Tomato, garlic, oregano", price: "€11" },
        { name: "Quattro Formaggi", desc: "Four Italian cheeses", price: "€14" },
        { name: "Carbonara", desc: "Guanciale, egg, pecorino", price: "€13" },
      ],
    },
    {
      name: "Speciali",
      icon: Pizza,
      desc: "Our signature creations",
      pizzas: [
        { name: "Sara Deluxe", desc: "Truffle, prosciutto, mushrooms", price: "€18" },
        { name: "Innovation", desc: "Burrata, arugula, balsamic", price: "€16" },
        { name: "Truffle Dream", desc: "Black truffle, porcini", price: "€20" },
        { name: "Spicy Passion", desc: "Calabrian chili, nduja", price: "€15" },
      ],
    },
    {
      name: "Vegetariane",
      icon: Pizza,
      desc: "Fresh vegetable options",
      pizzas: [
        { name: "Verdure", desc: "Seasonal vegetables", price: "€13" },
        { name: "Vegan Sara", desc: "100% plant-based", price: "€14" },
        { name: "Caprese", desc: "Tomato, mozzarella, basil oil", price: "€13" },
        { name: "Garden", desc: "Fresh herbs and greens", price: "€12" },
      ],
    },
    {
      name: "Dolci",
      icon: Pizza,
      desc: "Sweet dessert pizzas",
      pizzas: [
        { name: "Nutella", desc: "Chocolate hazelnut spread", price: "€10" },
        { name: "Frutta", desc: "Fresh fruit & cream", price: "€11" },
        { name: "Tiramisu", desc: "Mascarpone, coffee", price: "€12" },
        { name: "Choco Bliss", desc: "Dark chocolate, berries", price: "€12" },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96 md:h-[500px] bg-gradient-to-br from-foreground to-foreground/80 dark:from-accent dark:to-accent/80 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white dark:text-foreground mb-4">
            {t("menu.title")}
          </h1>
          <p className="text-xl text-white/90 dark:text-foreground/90">{t("menu.subtitle")}</p>
        </motion.div>
      </motion.section>

      {/* Categories Grid */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {categories.map((category, i) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-card dark:bg-card/50 p-8 rounded-2xl border border-border hover:border-accent smooth-transition hover:shadow-xl group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 smooth-transition flex items-center justify-center">
                    <IconComponent className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-foreground">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.desc}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.pizzas.map((pizza, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.05 }}
                      className="bg-background/50 dark:bg-background/30 p-4 rounded-lg hover:bg-background/80 dark:hover:bg-background/50 smooth-transition group/item"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-semibold text-foreground group-hover/item:text-accent smooth-transition">
                          {pizza.name}
                        </p>
                        <span className="text-accent font-semibold text-sm">{pizza.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{pizza.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary to-secondary/50 dark:from-secondary/50 dark:to-background p-12 rounded-2xl text-center border border-border"
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ready to Taste?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Each pizza is prepared with carefully selected ingredients and natural yeast, following our traditional
            recipes and modern techniques.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 smooth-transition"
          >
            Book Your Table <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
