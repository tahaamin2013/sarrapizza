"use client"

import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function Tour() {
  const { t } = useLanguage()

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
          {t("nav.tour")}
        </motion.h1>
      </motion.section>

      {/* Tour Content */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl [font-family:var(--font-display)] font-bold text-foreground mb-6">
            Explore Our Pizzerias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take an immersive 360° tour of our beautiful locations and discover the atmosphere where we craft your
            perfect pizza.
          </p>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary p-12 md:p-16 rounded-2xl border border-border text-center"
        >
          <div className="inline-block p-6 bg-primary rounded-full mb-6">
            <Play size={40} className="text-white" fill="white" />
          </div>
          <h3 className="text-3xl font-semibold text-foreground mb-4">Virtual Tour Coming Soon</h3>
          <p className="text-muted-foreground text-lg mb-8">
            We're preparing immersive 360° tours of all our locations. Check back soon to explore our pizzerias from
            home!
          </p>
          <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 smooth-transition">
            Notify Me
          </button>
        </motion.div>
      </section>
    </div>
  )
}
