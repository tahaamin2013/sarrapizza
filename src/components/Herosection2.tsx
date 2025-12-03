import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
  

      {/* Hero Section */}
      <div className="px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="flex flex-col gap-10">
            <button className="text-xs font-semibold text-red-500 border border-red-500 rounded-full px-4 py-2 w-fit hover:bg-red-500/10 transition">
              Book Reservation
            </button>

            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Sip, Slurp &<br />
                <span className="text-red-500">Savor</span> Authenticity
              </h1>
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Embark on an unforgettable culinary journey at Itadori Ramen House, where each bowl tells a story of
                perfection.
              </p>
            </div>

            <Button className="bg-red-500 hover:bg-red-600 text-white w-fit rounded-full px-8 py-6 text-base font-semibold">
              Explore menu
            </Button>

            {/* Happy Customers */}
     
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center">
            <img
              src="/99b198ae50ba2213462ac43a0bf08b8a.png"
              alt="Premium Ramen Bowl"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

    
      </div>
    </div>
  )
}
