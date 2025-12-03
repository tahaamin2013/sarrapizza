"use client"

import type React from "react"

import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"
import { Calendar, Users, Clock, MapPin, Mail, Phone } from "lucide-react"
import { useState } from "react"

export default function Booking() {
  const context = useLanguage()
  if (!context) {
    return <div>Language context not available</div>
  }
  const { t } = context
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    location: "varese",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen pt-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96 md:h-[500px] bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">{t("booking.title")}</h1>
          <p className="text-xl text-white/90">{t("booking.subtitle")}</p>
        </motion.div>
      </motion.section>

      {/* Booking Form Section */}
      <section className="py-20 md:py-32 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: MapPin, title: "Two Locations", desc: "Varese & Induno Olona" },
            { icon: Clock, title: "Extended Hours", desc: "Open daily 12:00 - 24:00" },
            { icon: Users, title: "Groups Welcome", desc: "Up to 10+ guests" },
          ].map((feature, i) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-secondary dark:bg-secondary/50 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card dark:bg-card/50 p-8 md:p-12 rounded-2xl border border-border shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-2">Reserve Your Table</h2>
          <p className="text-muted-foreground mb-8">Fill in the details below and we'll confirm your booking</p>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-accent/10 border border-accent rounded-lg text-accent font-medium"
            >
              Thank you! We've received your booking request. Check your email for confirmation.
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Users size={16} />
                Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-background dark:bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Mail size={16} />
                Email *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-background dark:bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Phone size={16} />
                Phone *
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 bg-background dark:bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                placeholder="+39 123 456 7890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <MapPin size={16} />
                Location *
              </label>
              <select
                className="w-full px-4 py-3 bg-background dark:bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              >
                <option value="varese">Varese</option>
                <option value="induno">Induno Olona</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Calendar size={16} />
                Date *
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-3 bg-background dark:bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Clock size={16} />
                Time *
              </label>
              <input
                type="time"
                required
                className="w-full px-4 py-3 bg-background dark:bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Users size={16} />
                Guests *
              </label>
              <select
                className="w-full px-4 py-3 bg-background dark:bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">Message (Optional)</label>
            <textarea
              className="w-full px-4 py-3 bg-background dark:bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition resize-none"
              placeholder="Any special requests or dietary requirements?"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 smooth-transition hover:shadow-lg"
          >
            Confirm Booking
          </button>
        </motion.form>
      </section>
    </div>
  )
}
