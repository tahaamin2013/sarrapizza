"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "it"

const translations = {
  en: {
    "home.tagline": "Experience Culinary Excellence",
    "home.subtitle": "Handcrafted pizzas with premium Italian ingredients and modern innovation",
    "home.explore": "Explore Menu",
    "home.reserve": "Reserve Table",
    "home.about": "The Art of Perfect Pizza",
    "home.aboutText":
      "At Pizzerie Sara, we blend centuries-old Italian tradition with contemporary techniques. Each pizza tells a story of passion, quality, and dedication.",
    "home.materials": "Premium Materials",
    "home.materialsText":
      "We source only the finest ingredients from across Italy, ensuring every bite delivers authentic Italian flavor.",
    "home.locations": "Our Locations",
    "menu.title": "Explore Our Menu",
    "menu.subtitle": "Discover our signature pizzas crafted with passion",
    "booking.title": "Reserve Your Table",
    "booking.subtitle": "Book an unforgettable dining experience",
    "brand.title": "About Sara",
    "brand.subtitle": "The story behind our brand",
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.booking": "Book",
    "nav.brand": "Brand",
    "nav.format": "Format",
    "nav.product": "Product",
    "nav.tour": "Tour",
    "nav.locations": "Locations",
    "nav.franchising": "Franchising",
    "nav.careers": "Careers",
  },
  it: {
    "home.tagline": "Vivi l'Eccellenza Culinaria",
    "home.subtitle": "Pizze artigianali con ingredienti italiani premium e innovazione moderna",
    "home.explore": "Esplora Menu",
    "home.reserve": "Prenota Tavolo",
    "home.about": "L'Arte della Pizza Perfetta",
    "home.aboutText":
      "In Pizzerie Sara, mescoliamo la tradizione italiana centenaria con tecniche contemporanee. Ogni pizza racconta una storia di passione, qualità e dedizione.",
    "home.materials": "Materiali Premium",
    "home.materialsText":
      "Selezioniamo solo i migliori ingredienti da tutta Italia, garantendo autenticità in ogni boccone.",
    "home.locations": "Le Nostre Location",
    "menu.title": "Esplora il Nostro Menu",
    "menu.subtitle": "Scopri le nostre pizze firmate create con passione",
    "booking.title": "Prenota il Tuo Tavolo",
    "booking.subtitle": "Prenota un'esperienza culinaria indimenticabile",
    "brand.title": "Su Sara",
    "brand.subtitle": "La storia dietro il nostro brand",
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.booking": "Prenota",
    "nav.brand": "Brand",
    "nav.format": "Format",
    "nav.product": "Prodotto",
    "nav.tour": "Tour",
    "nav.locations": "Location",
    "nav.franchising": "Franchising",
    "nav.careers": "Carriere",
  },
}

interface LanguageContextType {
  language: Language
  t: (key: string) => string
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    const initialLanguage = savedLanguage || "en"

    setLanguage(initialLanguage)
    document.documentElement.lang = initialLanguage
    setMounted(true)
  }, [])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "it" : "en"
    setLanguage(newLanguage)
    document.documentElement.lang = newLanguage
    localStorage.setItem("language", newLanguage)
  }

  return <LanguageContext.Provider value={{ language, t, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  // if (context === undefined) {
  //   throw new Error("useLanguage must be used within LanguageProvider")
  // }
  return context
}
