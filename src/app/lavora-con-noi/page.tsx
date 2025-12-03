"use client"

import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import { Briefcase, MapPin, ArrowRight } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function LavoraConNoi() {
  const context = useLanguage()
  if (!context) {
    return <div>Language context not available</div>
  }
  const { t } = context

  const positions = [
    { title: "Pizza Chef", location: "Induno Olona" },
    { title: "Front of House", location: "Varese" },
    { title: "Delivery Driver", location: "Both Locations" },
  ]

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
          {t("nav.careers")}
        </motion.h1>
      </motion.section>

      {/* Career Content */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl [font-family:var(--font-display)] font-bold text-foreground mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find your ideal role in the Pizzerie Sara family. We're always looking for passionate and motivated talents.
          </p>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-secondary p-8 rounded-2xl border border-border hover:border-primary smooth-transition hover:shadow-lg text-center"
            >
              <Briefcase size={32} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl [font-family:var(--font-display)] font-bold text-foreground mb-3">{pos.title}</h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <MapPin size={16} />
                {pos.location}
              </div>
              <button className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 smooth-transition flex items-center justify-center gap-2">
                Apply Now <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Culture */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 rounded-2xl"
        >
          <h3 className="text-3xl [font-family:var(--font-display)] font-bold text-center mb-12">Why Work With Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Dynamic and welcoming work environment",
              "Continuous training and professional development",
              "Competitive salary and benefits",
              "Career growth opportunities within the network",
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4">
                <div className="text-accent text-2xl flex-shrink-0 mt-1">•</div>
                <p className="text-lg text-white/90">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </section>
    </div>
  )
}
