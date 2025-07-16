import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Menu() {
  const menuItems = [
    {
      category: "Cafés Especiais",
      items: [
        { name: "Espresso Tradicional", price: "R$ 4,50", description: "Café puro e encorpado" },
        { name: "Cappuccino", price: "R$ 7,00", description: "Espresso com leite vaporizado e espuma" },
        { name: "Café com Leite", price: "R$ 6,00", description: "Blend perfeito de café e leite" },
        { name: "Mocha", price: "R$ 8,50", description: "Café com chocolate e chantilly" },
      ],
    },
    {
      category: "Doces & Salgados",
      items: [
        { name: "Pão de Açúcar", price: "R$ 5,00", description: "Tradicional doce brasileiro" },
        { name: "Croissant", price: "R$ 6,50", description: "Massa folhada crocante" },
        { name: "Sanduíche Natural", price: "R$ 8,00", description: "Ingredientes frescos e saudáveis" },
        { name: "Bolo do Dia", price: "R$ 4,50", description: "Fatia generosa do bolo especial" },
      ],
    },
  ]

  return (
    <section id="cardapio" className="py-20 bg-stone-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-100 mb-4">Nosso Cardápio</h2>
          <p className="text-lg text-stone-300">Sabores únicos preparados com ingredientes selecionados</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((category, index) => (
            <Card key={index} className="bg-stone-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-100">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-amber-100">{item.name}</h4>
                        <p className="text-sm text-stone-300">{item.description}</p>
                      </div>
                      <span className="font-bold text-amber-400 ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
