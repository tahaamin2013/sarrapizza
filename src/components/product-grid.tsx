"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    category: "Fash Food",
    name: "Meals",
    description: "NEW PHENOMENON BURGER TASTE",
    price: "$19.90",
    bg: "bg-emerald-500",
  },
  {
    id: 2,
    category: "House",
    name: "Burgers",
    description: "NEW PHENOMENON BURGER TASTE",
    price: "$12.90",
    bg: "bg-orange-500",
  },
  {
    id: 3,
    category: "Hot Fresh",
    name: "Salads",
    description: "NEW PHENOMENON BURGER TASTE",
    price: "$10.90",
    bg: "bg-yellow-400",
  },
  {
    id: 4,
    category: "Spicy",
    name: "Combos",
    description: "NEW PHENOMENON BURGER TASTE",
    price: "$15.90",
    bg: "bg-red-600",
  },
]

export function ProductGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="w-full py-0 px-0">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className={`${product.bg} p-8 lg:p-12 flex flex-col justify-between min-h-80 text-${
              index === 2 ? "slate-900" : "white"
            }`}
            variants={itemVariants}
            whileHover="hover"
            custom={index}
          >
            <motion.div className="space-y-2 mb-6" whileHover={{ x: 5 }}>
              <motion.p className="text-sm font-semibold opacity-90">{product.category}</motion.p>
              <motion.h3
                className="text-5xl lg:text-6xl font-bold"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {product.name}
              </motion.h3>
            </motion.div>
            <div className="flex-grow"></div>
            <motion.div className="space-y-4">
              <motion.div whileHover={{ opacity: 0.7 }}>
                <p className="text-xs font-bold tracking-wide opacity-90 mb-4">{product.description}</p>
              </motion.div>
              <motion.div className="space-y-4">
                <motion.p className="text-3xl font-bold" whileHover={{ scale: 1.1 }}>
                  {product.price}
                </motion.p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-md">
                    ORDER NOW
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
