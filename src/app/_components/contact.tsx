import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-stone-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-100 mb-4">Entre em Contato</h2>
          <p className="text-lg text-stone-300">Venha nos visitar ou entre em contato conosco</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="bg-stone-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-amber-100">
                  <MapPin className="h-5 w-5" />
                  <span>Endereço</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-300">
                  Rua das Flores, 123
                  <br />
                  Centro - Sua Cidade
                  <br />
                  CEP: 12345-678
                </p>
              </CardContent>
            </Card>

            <Card className="bg-stone-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-amber-100">
                  <Phone className="h-5 w-5" />
                  <span>Telefone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-300">(11) 9999-9999</p>
              </CardContent>
            </Card>

            <Card className="bg-stone-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-amber-100">
                  <Clock className="h-5 w-5" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-stone-300">
                  <p>Segunda a Sexta: 7h às 19h</p>
                  <p>Sábado: 8h às 18h</p>
                  <p>Domingo: 8h às 16h</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-stone-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-100">
                <Mail className="h-5 w-5" />
                <span>Envie uma Mensagem</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <Input type="email" placeholder="Seu e-mail" />
                </div>
                <div>
                  <Input placeholder="Assunto" />
                </div>
                <div>
                  <Textarea placeholder="Sua mensagem" rows={4} />
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-500">Enviar Mensagem</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
