"use client"

import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import { Phone, MapPin, Clock } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Locations() {
  const context = useLanguage()
  if (!context) {
    return <div>Language context not available</div>
  }
  const { t } = context

  const locations = [
    {
      name: "Induno Olona",
      address: "Via Bruno Jamoretti 181",
      city: "21056 Induno Olona (VA)",
      phone: "+39 0332 123456",
      hours: "Mon-Sun: 11:30-23:00",
    },
    {
      name: "Varese",
      address: "Via Dandolo 5",
      city: "21100 Varese (VA)",
      phone: "+39 0332 789012",
      hours: "Mon-Sun: 11:30-23:00",
    },
  ]

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
          {t("nav.locations")}
        </motion.h1>
      </motion.section>

      {/* Locations Grid */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary p-8 rounded-2xl border border-border hover:border-primary smooth-transition hover:shadow-lg"
            >
              <h2 className="text-3xl [font-family:var(--font-display)] font-bold text-foreground mb-6">{loc.name}</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">{loc.address}</p>
                    <p className="text-muted-foreground">{loc.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-accent flex-shrink-0" />
                  <p className="text-muted-foreground">{loc.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-accent flex-shrink-0" />
                  <p className="text-muted-foreground">{loc.hours}</p>
                </div>
              </div>
              <button className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 smooth-transition">
                {t("common.bookTable")}
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
