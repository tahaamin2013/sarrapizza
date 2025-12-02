"use client"

import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Franchising() {
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
          {t("nav.franchising")}
        </motion.h1>
      </motion.section>

      {/* Franchising Content */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl [font-family:var(--font-display)] font-bold text-foreground mb-6">
            Join Our Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how to become part of the Pizzerie Sara family and share in our proven and profitable business
            success.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 rounded-2xl mb-16"
        >
          <h3 className="text-4xl [font-family:var(--font-display)] font-bold text-center mb-12">
            Franchising Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Recognized and appreciated brand on the market",
              "Complete support from commercial assistance to opening",
              "Continuous staff training",
              "Guaranteed supply of raw materials",
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4">
                <div className="text-accent text-2xl flex-shrink-0 mt-1">✓</div>
                <p className="text-lg text-white/90">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl [font-family:var(--font-display)] font-bold text-foreground mb-4">Interested?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to learn more about franchising opportunities
          </p>
          <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 smooth-transition hover:shadow-lg inline-flex items-center gap-2">
            Request Information <ArrowRight size={20} />
          </button>
        </motion.div>
      </section>
    </div>
  )
}
