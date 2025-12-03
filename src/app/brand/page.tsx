"use client"

import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { Heart, Lightbulb, Leaf } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Brand() {
  const context = useLanguage()
  
  if (!context) {
    return null
  }
  
  const { t } = context

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl [font-family:var(--font-display)] font-bold text-white text-center px-4"
        >
          {t("nav.brand")}
        </motion.h1>
      </motion.section>

      {/* Story Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl [font-family:var(--font-display)] font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Everything began with a visionary idea: to revolutionize the way pizza is made and enjoyed. We believed
              that exceptional quality and innovative techniques should be accessible to everyone.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With a commitment to excellence, Pizzerie Sara developed unique cooking methods and sourcing practices
              that guarantee the highest quality while remaining true to Italian tradition.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we've grown into a beloved brand, but our core mission remains unchanged: crafting the perfect
              pizza.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=700&fit=crop"
              alt="Pizzerie Sara Brand"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl [font-family:var(--font-display)] font-bold text-white text-center mb-16"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Quality",
                desc: "We select only the finest ingredients and maintain the highest standards in every pizza.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Modern techniques combined with traditional methods create our unique approach.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                desc: "We're committed to environmental responsibility and supporting our local community.",
              },
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur p-8 rounded-xl text-white hover:bg-white/20 smooth-transition"
                >
                  <Icon size={40} className="mb-4 text-accent" />
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-white/80">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl [font-family:var(--font-display)] font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To create extraordinary pizza experiences that bring people together, honoring Italian tradition while
            embracing culinary innovation. We're not just making pizza—we're crafting moments of joy, one slice at a
            time.
          </p>
        </motion.div>
      </section>
    </div>
  )
}
