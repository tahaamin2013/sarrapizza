"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Globe, Moon, Sun } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/context/theme-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const languageContext = useLanguage()
  const { language, toggleLanguage, t } = languageContext || { language: "en", toggleLanguage: () => {}, t: (key: string) => key }
  const { theme, toggleTheme } = useTheme() || { theme: "light", toggleTheme: () => {} }

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/menu", label: t("menu") },
    { href: "/booking", label: t("booking") },
    { href: "/brand", label: t("brand") },
    { href: "/format", label: t("format") },
    { href: "/product", label: t("product") },
    { href: "/tour", label: t("tour") },
    { href: "/locations", label: t("locations") },
    { href: "/franchising", label: t("franchising") },
    { href: "/careers", label: t("careers") },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-border smooth-transition">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="text-2xl font-display font-bold  hover:text-accent smooth-transition">
            SARA
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-secondary/50 smooth-transition rounded-md"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side: Theme Toggle + Language Toggle + Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 p-2.5 text-foreground hover:bg-secondary/50 smooth-transition rounded-lg"
            aria-label="Toggle theme"
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary/50 smooth-transition rounded-lg"
            aria-label="Toggle language"
            title={language === "en" ? "Passa all'italiano" : "Switch to English"}
          >
            <Globe size={18} />
            <span className="hidden sm:inline">{language.toUpperCase()}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 text-foreground hover:bg-secondary/50 smooth-transition rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary/50 dark:bg-secondary/20 backdrop-blur-sm border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 px-6 py-4 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-background/50 smooth-transition rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
