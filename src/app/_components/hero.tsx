import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 to-stone-800"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
        }}
      ></div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Morioka Café</h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">O melhor café da cidade, feito com amor e tradição</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3">
            Ver Cardápio
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-3 bg-transparent"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  )
}
