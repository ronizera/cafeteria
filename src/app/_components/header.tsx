"use client"

import { useState } from "react"
import { Menu, X, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-stone-900/95 backdrop-blur-sm border-b border-amber-600/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-bold text-amber-100">Café Aroma</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-amber-100 hover:text-amber-400 transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-amber-100 hover:text-amber-400 transition-colors">
              Sobre
            </a>
            <a href="#cardapio" className="text-amber-100 hover:text-amber-400 transition-colors">
              Cardápio
            </a>
            <a href="#galeria" className="text-amber-100 hover:text-amber-400 transition-colors">
              Galeria
            </a>
            <a href="#contato" className="text-amber-100 hover:text-amber-400 transition-colors">
              Contato
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-amber-600/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#inicio" className="text-amber-100 hover:text-amber-400 transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-amber-100 hover:text-amber-400 transition-colors">
                Sobre
              </a>
              <a href="#cardapio" className="text-amber-100 hover:text-amber-400 transition-colors">
                Cardápio
              </a>
              <a href="#galeria" className="text-amber-100 hover:text-amber-400 transition-colors">
                Galeria
              </a>
              <a href="#contato" className="text-amber-100 hover:text-amber-400 transition-colors">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
