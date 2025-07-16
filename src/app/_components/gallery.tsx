import Image from "next/image"
import img1 from "../../../public/cafe1.jpg"
import img2 from "../../../public/cafe2.jpg"
import img3 from "../../../public/cafe3.jpg"
import img4 from "../../../public/cafe4.jpg" 
import img5 from "../../../public/cafe5.jpg"
import img6 from "../../../public/cafe6.jpg"

export function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6,]

  return (
    <section id="galeria" className="py-20 bg-stone-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-100 mb-4">Nossa Galeria</h2>
          <p className="text-lg text-stone-300">Conheça nosso ambiente aconchegante e nossos produtos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
              src={img}
              alt={`Imagem ${index + 1}`}
              objectFit="cover"
              width={20000}
              className="object-cover hover:scale-105 transition-transform duration-300"
             />

              

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
