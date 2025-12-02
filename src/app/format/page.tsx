"use client"

import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { Award, Clock, Users, Zap } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Format() {
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
          {t("nav.format")}
        </motion.h1>
      </motion.section>

      {/* Format Overview */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div variants={fadeInUp} className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517521271924-fc3ee12eec60?w=600&h=700&fit=crop"
              alt="Pizzerie Sara Format"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl [font-family:var(--font-display)] font-bold text-foreground mb-6">
              Our Unique Format
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Pizzerie Sara format is designed for simplicity and functionality, creating a fast yet pleasant dining
              experience. Our spaces are welcoming and contemporary, offering an informal atmosphere where every guest
              feels valued.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Each detail has been carefully considered to ensure maximum comfort, quality service, and an unforgettable
              pizza experience.
            </p>

            <div className="space-y-4">
              {[
                { icon: Clock, text: "Fast service without compromising quality" },
                { icon: Users, text: "Welcoming atmosphere for everyone" },
                { icon: Award, text: "Consistently excellent experience" },
                { icon: Zap, text: "Modern technology & traditional methods" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-center gap-3">
                    <Icon size={24} className="text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Format Benefits */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl [font-family:var(--font-display)] font-bold text-foreground text-center mb-16"
          >
            Why Our Format Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Efficient Design",
                desc: "Optimized layout for smooth workflow and minimal wait times",
              },
              {
                title: "Premium Comfort",
                desc: "Elegant spaces that reflect our commitment to quality",
              },
              {
                title: "Community Focus",
                desc: "Spaces designed for connection and memorable moments",
              },
              {
                title: "Innovation Hub",
                desc: "Latest technology integrated seamlessly with tradition",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-xl border border-border hover:border-primary smooth-transition"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
