"use client";
import React from "react"
import { Image, Link, Input, Button } from "@nextui-org/react"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-left">
            <Image
              src="/logo.png"
              alt="Di-Dema Logo"
              width={50}
              height={35}
            />
            <h4 className="text-lg font-semibold mt-2 text-white">Di-Dema</h4>
            <p className="text-sm text-gray-400">Climatic App</p>
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-2 text-white">Enlaces</h5>
            <Link href="/visualizer" color="foreground" className="text-gray-400 hover:text-white transition-colors">Herramienta Re-análisis</Link>
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-2 text-white">Suscríbete</h5>
            <h6 className="text-lg font-light mb-1 text-white">Para estar al día con actualizaciones</h6>
            <div className="flex flex-col space-y-2">
              <Input
                aria-label="Email para suscripción"
                placeholder="Tu email"
                type="email"
                classNames={{
                  input: "bg-gray-800 text-white placeholder-gray-500",
                  inputWrapper: "bg-gray-800 hover:bg-gray-700 focus:bg-gray-700",
                }}
              />
              <Button color="primary" className="bg-blue-600 hover:bg-blue-700 text-white">
                Suscribíte pelotudo
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Di-Dema. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}