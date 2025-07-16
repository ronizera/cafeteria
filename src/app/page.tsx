import { Header } from "@/app/_components/header"
import { Hero } from "@/app/_components/hero"
import { About } from "@/app/_components/about"
import { Menu } from "@/app/_components/menu"
import { Gallery } from "@/app/_components/gallery"
import { Contact } from "@/app/_components/contact"
import { Footer } from "@/app/_components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
