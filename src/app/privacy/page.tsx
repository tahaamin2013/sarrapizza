"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: September 4, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Benvenuto nella privacy policy</h2>
              <p className="text-muted-foreground">
                di www.pizzeriesara.it. Questa policy ti aiuterà a comprendere quali dati raccogliamo, perché li
                raccogliamo e quali sono i tuoi diritti in merito.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Titolare del Trattamento dei Dati</h2>
              <p className="text-muted-foreground">Food Innovation Srl - Via Dandolo 5, Varese (VA), 21100, IT</p>
              <p className="text-muted-foreground">Indirizzo email del Titolare: info@pizzeriesara.it</p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Tipologie di Dati raccolti</h2>
              <p className="text-muted-foreground">
                Il Titolare non fornisce una lista di tipologie di Dati Personali raccolti. I Dati Personali possono
                essere liberamente forniti dall'Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante
                l'uso di questa Applicazione.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Modalità e luogo del trattamento dei Dati</h2>
              <p className="text-muted-foreground">
                Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la
                modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento viene effettuato mediante
                strumenti informatici e/o telematici.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Diritti dell'Utente</h2>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li>Revocare il consenso in ogni momento</li>
                <li>Opporsi al trattamento dei propri Dati</li>
                <li>Accedere ai propri Dati</li>
                <li>Verificare e chiedere la rettificazione</li>
                <li>Ottenere la limitazione del trattamento</li>
                <li>Ottenere la cancellazione dei propri Dati Personali</li>
                <li>Ricevere i propri Dati o farli trasferire ad altro titolare</li>
                <li>Proporre reclamo all'autorità di controllo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Come esercitare i diritti</h2>
              <p className="text-muted-foreground">
                Eventuali richieste di esercizio dei diritti dell'Utente possono essere indirizzate al Titolare
                attraverso i recapiti forniti in questo documento. La richiesta è gratuita e il Titolare risponderà nel
                più breve tempo possibile, in ogni caso entro un mese.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-4">Contattaci</h2>
              <p className="text-muted-foreground">
                Per qualsiasi domanda riguardante questa privacy policy, puoi contattarci a info@pizzeriesara.it
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
