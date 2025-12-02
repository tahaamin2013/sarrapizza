"use client"

import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { Leaf, Flame, Award, Zap } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Product() {
  const languageContext = useLanguage()
  const t = languageContext?.t ?? ((key: string) => key)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96 bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl [font-family:var(--font-display)] font-bold text-white text-center px-4"
        >
          {t("nav.product")}
        </motion.h1>
      </motion.section>

      {/* Product Hero */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl [font-family:var(--font-display)] font-bold text-foreground mb-6"
          >
            The Perfect Pizza
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every Pizzerie Sara pizza is crafted with precision, using the finest ingredients and innovative techniques
            perfected over years of dedication.
          </motion.p>
        </motion.div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&h=700&fit=crop"
              alt="Pizzerie Sara Pizza"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-3xl [font-family:var(--font-display)] font-bold text-foreground mb-6"
            >
              Crafted to Perfection
            </motion.h3>

            {[
              {
                icon: Leaf,
                title: "Premium Ingredients",
                desc: "Only the finest, fresh ingredients sourced from trusted local producers",
              },
              {
                icon: Flame,
                title: "Perfect Heat",
                desc: "Precisely controlled temperatures for ideal crust and toppings",
              },
              {
                icon: Award,
                title: "Quality Assured",
                desc: "Every pizza meets our exacting standards before leaving the kitchen",
              },
              {
                icon: Zap,
                title: "Innovation",
                desc: "Modern techniques combined with traditional Italian pizza-making",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-4 mb-6 pb-6 border-b border-border last:border-b-0"
                >
                  <Icon size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Pizzas */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl [font-family:var(--font-display)] font-bold text-foreground text-center mb-16"
          >
            Our Pizza Collection
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Margherita",
                image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop",
                desc: "The classic Italian pizza with fresh mozzarella and basil",
              },
              {
                name: "Sara Deluxe",
                image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=400&fit=crop",
                desc: "Truffle, prosciutto, and wild mushrooms for the ultimate experience",
              },
              {
                name: "Verdure",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
                desc: "Seasonal fresh vegetables with roasted garlic and herbs",
              },
            ].map((pizza, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative h-64 rounded-xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src={pizza.image || "/placeholder.svg"}
                    alt={pizza.name}
                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{pizza.name}</h3>
                <p className="text-muted-foreground">{pizza.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
