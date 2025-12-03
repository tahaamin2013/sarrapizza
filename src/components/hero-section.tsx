"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const circleVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: [0, 0, 1, 1],
      },
    },
  }

  return (
    <section className="w-full min-h-screen bg-white flex items-center relative overflow-hidden">
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-400 rounded-full opacity-30 -z-10"
        variants={circleVariants}
        animate="animate"
      />

      <div className="px-4 sm:px-6 md:pl-[100px] mx-auto w-full">
        <div className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] md:w-[1000px] md:h-[1000px] lg:w-[1200px] lg:h-[1200px] bg-yellow-500 rounded-full -right-[300px] sm:-right-[400px] md:-right-[500px] lg:-right-30 -top-[300px] sm:-top-[400px] md:-top-[500px] lg:-top-70 z-10" />
        
        <div className="flex flex-col md:flex-row justify-center relative z-30 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center space-y-4 sm:space-y-6 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-1" variants={itemVariants}>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Bronte
              </motion.h1>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-4 font-bold text-yellow-400"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Pizza
              </motion.h1>
            </motion.div>

            <motion.div className="space-y-1" variants={itemVariants}>
              <p className="text-base sm:text-lg text-emerald-500 font-semibold">
                Medium 2-topping* pizza
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                *Additional charge for premium toppings. Minimum of 2 required.
              </p>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 pt-4 flex-wrap" 
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-md">
                  ORDER NOW
                </Button>
              </motion.div>
              <motion.div className="flex items-center gap-2 sm:gap-3" whileHover={{ scale: 1.05 }}>
                <span className="text-3xl sm:text-4xl font-bold text-emerald-500">$12.99</span>
                <span className="text-base sm:text-lg text-slate-400 line-through">$19.99</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end relative mt-8 md:mt-0"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ y: -10, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-30"
            >
              <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] flex items-center justify-center">
                <img 
                  src="/onions.png" 
                  alt="Onions" 
                  className="absolute w-[210px] h-[210px] sm:w-[300px] sm:h-[300px] md:w-[375px] md:h-[375px] lg:w-[525px] lg:h-[525px] xl:w-[600px] xl:h-[600px] rotate-90" 
                />
                <img 
                  src="/leafs.png" 
                  alt="Leafs" 
                  className="absolute w-[230px] h-[230px] sm:w-[330px] sm:h-[330px] md:w-[412px] md:h-[412px] lg:w-[577px] lg:h-[577px] xl:w-[660px] xl:h-[660px] rotate-12" 
                />
                <img 
                  src="/pizza.png" 
                  alt="Pizza" 
                  className="relative w-[245px] h-[245px] sm:w-[350px] sm:h-[350px] md:w-[437px] md:h-[437px] lg:w-[612px] lg:h-[612px] xl:w-[700px] xl:h-[700px]" 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}