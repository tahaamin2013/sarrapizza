"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AboutSection() {
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  }

  const badgeVariants = {
    animate: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
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
            <div className="relative w-full max-w-sm">
              <motion.div
                className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center z-10 border-4 border-yellow-300"
                variants={badgeVariants}
                animate="animate"
              >
                <div className="text-center">
                  <div className="text-yellow-600 text-3xl font-bold leading-none">50%</div>
                  <div className="text-yellow-600 text-2xl font-bold leading-none">OFF</div>
                </div>
              </motion.div>

              <motion.img
                src="/images/sec.png"
                alt="Burger with fries"
                className="w-full h-auto relative z-0"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.p className="text-yellow-500 text-lg italic font-serif" whileHover={{ color: "#dc2626" }}>
                About Our Food
              </motion.p>
              <motion.h2 className="text-5xl lg:text-6xl font-bold text-slate-900" whileHover={{ scale: 1.02 }}>
                From Texas with
                <br />
                American Love
              </motion.h2>
            </motion.div>

            <motion.p className="text-slate-600 leading-relaxed text-lg" variants={itemVariants}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </motion.p>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3 text-base w-fit rounded-md">
                ORDER NOW
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
