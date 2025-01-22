import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Instagram, Twitter, Linkedin, Send } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),   
  email: z.string().email({
    message: "Por favor, introduce un email válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

const socialLinks = [
  { name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500', link: 'https://www.instagram.com/tu_usuario' },
  { name: 'Twitter', icon: Twitter, color: 'bg-blue-400', link: 'https://twitter.com/tu_usuario' },
  { name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700', link: 'https://www.linkedin.com/in/tu_usuario' },
]

function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

onSubmit()

  return (
    <div className="w-full px-[12%] py-16 bg-gray-50" id="contact">
      <h2 className="text-center text-4xl font-bold mb-8">Contáctame</h2>
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            <div className="bg-primary text-primary-foreground p-8">
              <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6" />
                  <a href="mailto:luisveravr.dev@gmail.com" className="hover:underline">
                    luisveravr.dev@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6" />
                  <a href="tel:+573233653285" className="hover:underline">
                    +57 323 365 3285
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-2">Sígueme en</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} p-3 rounded-full text-white hover:opacity-80 transition-opacity`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Envíame un mensaje</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Escribe tu mensaje aquí" 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Enviar mensaje
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Contact;