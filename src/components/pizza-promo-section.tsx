"use client"

import { motion } from "framer-motion"

export function PizzaPromoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="w-full bg-black text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Image */}
          <motion.div
            className="flex justify-center relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={floatingVariants} animate="animate">
              <img src="/images/dds.png" alt="Super Delicious Pizza" className="w-full h-auto max-w-sm" />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              <motion.p className="text-white text-xl italic font-serif" whileHover={{ color: "#fbbf24" }}>
                Super
              </motion.p>
              <motion.p className="text-white text-3xl italic font-serif" whileHover={{ color: "#fbbf24", x: 10 }}>
                Delicious
              </motion.p>
              <motion.h2
                className="text-6xl lg:text-7xl font-bold text-yellow-400"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Pizza
              </motion.h2>
            </motion.div>

            <motion.p className="text-lg text-white font-semibold" variants={itemVariants} whileHover={{ x: 10 }}>
              Feel Hunger! Order Your Favourite Food.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
