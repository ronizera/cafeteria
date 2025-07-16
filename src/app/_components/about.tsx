import { Heart, Award, Users } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="py-20 bg-stone-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-100 mb-4">Nossa História</h2>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">
            Há mais de 15 anos servindo o melhor café da região, com grãos selecionados e um ambiente acolhedor para
            toda a família.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/interior.jpg width=600"
              alt="Interior da cafeteria"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Heart className="h-8 w-8 text-amber-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-amber-100 mb-2">Feito com Amor</h3>
                <p className="text-stone-300">
                  Cada xícara é preparada com carinho e atenção aos detalhes, garantindo a melhor experiência para
                  nossos clientes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-amber-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-amber-100 mb-2">Qualidade Premium</h3>
                <p className="text-stone-300">
                  Trabalhamos apenas com grãos selecionados e equipamentos de última geração para garantir o sabor
                  perfeito.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-amber-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-amber-100 mb-2">Ambiente Familiar</h3>
                <p className="text-stone-300">
                  Um espaço aconchegante onde amigos e famílias se encontram para compartilhar bons momentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
