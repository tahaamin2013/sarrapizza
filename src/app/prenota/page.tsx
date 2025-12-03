"use client"

import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Prenota() {
  const context = useLanguage()
  if (!context) {
    return <div>Language context not available</div>
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
          {t("nav.booking")}
        </motion.h1>
      </motion.section>

      {/* Booking Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {[
            {
              name: "Induno Olona",
              desc: "Book your table at our Induno Olona location and enjoy our delicious pizzas.",
            },
            {
              name: "Varese",
              desc: "Book your table at our Varese location and discover our specialties.",
            },
          ].map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary p-8 rounded-2xl border border-border hover:shadow-lg smooth-transition"
            >
              <h2 className="text-3xl [font-family:var(--font-display)] font-bold text-foreground mb-4">{loc.name}</h2>
              <p className="text-muted-foreground mb-8">{loc.desc}</p>
              <div className="space-y-3">
                <Link
                  href="/booking"
                  className="block py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 smooth-transition text-center"
                >
                  Book Table
                </Link>
                <button className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 smooth-transition flex items-center justify-center gap-2">
                  Order Online <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-white p-8 rounded-2xl text-center"
        >
          <p className="text-lg">
            <strong>For information about booking,</strong> contact us by phone at our location numbers.
          </p>
        </motion.div>
      </section>
    </div>
  )
}
