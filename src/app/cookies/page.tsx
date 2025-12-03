"use client"

import { motion } from "framer-motion"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-display font-bold mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: September 4, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Benvenuto nella cookie policy</h2>
              <p className="text-muted-foreground">
                di www.pizzeriesara.it. Questa policy ti aiuterà a comprendere quali cookie e tecnologie di tracciamento
                utilizziamo, come li utilizziamo e quali sono i tuoi diritti in merito.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Titolare del Trattamento dei Dati</h2>
              <p className="text-muted-foreground">Food Innovation Srl - Via Dandolo 5, Varese (VA), 21100, IT</p>
              <p className="text-muted-foreground">Indirizzo email del Titolare: info@pizzeriesara.it</p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Cosa sono i Cookie?</h2>
              <p className="text-muted-foreground">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti il nostro
                sito. Utilizziamo i cookie per migliorare la tua esperienza, ricordare le tue preferenze e analizzare
                come utilizzi il nostro sito.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Tipi di Cookie che utilizziamo</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Cookie Tecnici</h3>
                  <p className="text-muted-foreground">
                    Necessari per il funzionamento del sito e per fornirti il servizio richiesto.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Cookie di Preferenza</h3>
                  <p className="text-muted-foreground">
                    Utilizzati per ricordare le tue preferenze, come la lingua selezionata e il tema (chiaro/scuro).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Come gestire i Cookie</h2>
              <p className="text-muted-foreground">
                Puoi controllare e/o eliminare i cookie come desideri. Per ulteriori informazioni, visita
                allaboutcookies.org. Puoi eliminare tutti i cookie già presenti sul tuo computer e configurare la
                maggior parte dei browser in modo da impedire il deposito di nuovi cookie.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Contattaci</h2>
              <p className="text-muted-foreground">
                Per qualsiasi domanda riguardante questa cookie policy, puoi contattarci a info@pizzeriesara.it
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
