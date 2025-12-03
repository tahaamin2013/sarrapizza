"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export default function Footer() {
  const context = useLanguage()
  if (!context) return null
  const { t } = context

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/menu", label: t("nav.menu") },
    { href: "/booking", label: t("nav.booking") },
    { href: "/brand", label: t("nav.brand") },
    { href: "/format", label: t("nav.format") },
    { href: "/product", label: t("nav.product") },
    { href: "/tour", label: t("nav.tour") },
    { href: "/locations", label: t("nav.locations") },
    { href: "/franchising", label: t("nav.franchising") },
    { href: "/careers", label: t("nav.careers") },
  ]

  return (
    <footer className="bg-foreground text-background dark:bg-secondary dark:text-foreground py-16 smooth-transition">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="font-display text-2xl mb-4">SARA</h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Pizzerie Sara sono un brand di Food Innovation S.r.l.
            </p>
            <div className="text-sm opacity-80 space-y-1">
              <p>Via Dandolo 5</p>
              <p>Varese VA 21100</p>
              <p>P.iva 03899470128</p>
              <p>
                <a href="mailto:info@pizzeriesara.it" className="hover:opacity-100 smooth-transition">
                  info@pizzeriesara.it
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Navigation</h4>
            <ul className="text-sm opacity-80 space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:opacity-100 smooth-transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-display text-lg mb-4">More</h4>
            <ul className="text-sm opacity-80 space-y-2">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:opacity-100 smooth-transition">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:opacity-100 smooth-transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:opacity-100 smooth-transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 dark:border-border pt-8 text-center text-sm opacity-60">
          <p>&copy; 2025 Pizzerie Sara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
