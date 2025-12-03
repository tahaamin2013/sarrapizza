import { useLanguage } from "@/context/language-context"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Herosection1 = () => {
    const context = useLanguage()
  
  if (!context) {
    return <div>Error: Language context not available</div>
  }
  
  const { t } = context
  return (
    <div>
            <section className="relative h-screen md:h-[120vh] overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source
              src="/herovideo.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 text-white py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 backdrop-blur-sm">
              Premium Italian Pizzeria
            </span>
          </motion.div>

          {/* Main Heading with letter-by-letter animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight"
          >
            {t("home.tagline")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            {t("home.subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FB2C36] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 smooth-transition"
            >
              {t("home.explore")}
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 smooth-transition backdrop-blur-sm"
            >
              {t("home.reserve")}
            </Link>
          </motion.div>
        </motion.div>

      </section>

    </div>
  )
}

export default Herosection1
