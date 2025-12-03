import { AboutSection } from '@/components/about-section'
import { HeroSection } from '@/components/hero-section'
import { PizzaPromoSection } from '@/components/pizza-promo-section'
import { ProductGrid } from '@/components/product-grid'
import React from 'react'

const page = () => {
  return (
    <div className='font-display'>
         <HeroSection />
      <PizzaPromoSection />
      <ProductGrid />
      <AboutSection />
    </div>
  )
}

export default page

// "use client"

// import { useLanguage } from "@/context/language-context"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import { ArrowRight, Star, Zap, Heart } from "lucide-react"
// import Herosection1 from "@/components/Herosection1"
// import Herosection2 from "@/components/Herosection2"

//           const fadeInUp = {
//             hidden: { opacity: 0, y: 30 },
//             visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//           }

//           const staggerContainer = {
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: { staggerChildren: 0.15, delayChildren: 0.2 },
//             },
//           }

//           const scaleIn = {
//             hidden: { opacity: 0, scale: 0.9 },
//             visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
//           }

//           const slideInRight = {
//             hidden: { opacity: 0, x: 50 },
//             visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
//           }

// export default function Home() {
//   const context = useLanguage()
  
//   if (!context) {
//     return <div>Error: Language context not available</div>
//   }
  
//   const { t } = context

  
//   return (
//     <div className="min-h-screen pt-20">
// <Herosection1/>
// <Herosection2/>
//       {/* About Section */}
//       <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
//         >
//           <motion.div variants={fadeInUp}>
//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: 60 }}
//               transition={{ duration: 0.8 }}
//               className="h-1 bg-accent mb-6 rounded-full"
//             />
//             <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">{t("home.about")}</h2>
//             <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("home.aboutText")}</p>
//             <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//               At Pizzerie Sara, we believe that the perfect pizza is a balance of tradition and innovation. Every
//               ingredient is carefully selected, every technique refined over years of passion.
//             </p>
//             <Link
//               href="/brand"
//               className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 smooth-transition group"
//             >
//               Learn Our Story
//               <ArrowRight size={20} className="group-hover:translate-x-1 smooth-transition" />
//             </Link>
//           </motion.div>

//           <motion.div variants={scaleIn} className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
//             <img
//               src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=700&fit=crop"
//               alt="Pizzerie Sara"
//               className="w-full h-full object-cover hover:scale-110 smooth-transition"
//             />
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 md:py-32 bg-secondary dark:bg-secondary/50 smooth-transition">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-16"
//           >
//             Why Choose Us
//           </motion.h2>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={staggerContainer}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           >
//             {[
//               {
//                 icon: Star,
//                 title: "Premium Quality",
//                 desc: "Only the finest ingredients from local producers",
//               },
//               {
//                 icon: Zap,
//                 title: "Innovation",
//                 desc: "Blending tradition with modern techniques",
//               },
//               {
//                 icon: Heart,
//                 title: "Passion",
//                 desc: "Every pizza made with dedication and care",
//               },
//             ].map((feature, i) => {
//               const IconComponent = feature.icon
//               return (
//                 <motion.div
//                   key={i}
//                   variants={fadeInUp}
//                   className="bg-background dark:bg-card p-8 rounded-xl border border-border hover:border-accent smooth-transition hover:shadow-lg group"
//                 >
//                   <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 smooth-transition">
//                     <IconComponent className="text-accent" size={24} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
//                   <p className="text-muted-foreground">{feature.desc}</p>
//                 </motion.div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* Materials Section */}
//       <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
//         >
//           <motion.div
//             variants={slideInRight}
//             className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=700&fit=crop"
//               alt="Premium Materials"
//               className="w-full h-full object-cover hover:scale-110 smooth-transition"
//             />
//           </motion.div>

//           <motion.div variants={fadeInUp}>
//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: 60 }}
//               transition={{ duration: 0.8 }}
//               className="h-1 bg-accent mb-6 rounded-full"
//             />
//             <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">{t("home.materials")}</h2>
//             <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("home.materialsText")}</p>
//             <ul className="space-y-4 mb-8">
//               {[
//                 "San Marzano tomatoes from Campania",
//                 "Buffalo mozzarella from Campania",
//                 "Extra virgin olive oil from Tuscany",
//                 "Fresh basil and seasonal vegetables",
//               ].map((item, i) => (
//                 <motion.li
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   className="flex items-start gap-3"
//                 >
//                   <Star size={20} className="text-accent flex-shrink-0 mt-1" />
//                   <span className="text-muted-foreground">{item}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 md:py-32 bg-gradient-to-r from-accent to-accent/80 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-7xl mx-auto px-6 text-center relative z-10"
//         >
//           <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
//             Ready to Experience Excellence?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Reserve your table today and discover why Pizzerie Sara is the world's finest pizzeria.
//           </p>
//           <Link
//             href="/booking"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-semibold rounded-lg hover:shadow-lg hover:scale-105 smooth-transition"
//           >
//             Book Now <ArrowRight size={20} />
//           </Link>
//         </motion.div>
//       </section>

//       {/* Locations Preview */}
//       <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-display font-bold text-foreground text-center mb-16"
//         >
//           {t("home.locations")}
//         </motion.h2>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="grid grid-cols-1 md:grid-cols-2 gap-8"
//         >
//           {[
//             {
//               name: "Varese",
//               address: "Via Dandolo 5, 21100 Varese",
//               image: "https://images.unsplash.com/photo-1517521271924-fc3ee12eec60?w=600&h=400&fit=crop",
//             },
//             {
//               name: "Induno Olona",
//               address: "Via Bruno Jamoretti 181, 21056 Induno Olona",
//               image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
//             },
//           ].map((location, i) => (
//             <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
//               <div className="relative h-64 rounded-xl overflow-hidden mb-4 shadow-lg">
//                 <img
//                   src={location.image || "/placeholder.svg"}
//                   alt={location.name}
//                   className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
//                 />
//               </div>
//               <h3 className="text-2xl font-semibold text-foreground mb-2">{location.name}</h3>
//               <p className="text-muted-foreground mb-4">{location.address}</p>
//               <Link
//                 href="/locations"
//                 className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 smooth-transition"
//               >
//                 View Details <ArrowRight size={20} />
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//     </div>
//   )
// }
