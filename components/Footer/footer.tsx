"use client";
import { Image } from "@nextui-org/image";
import {Link} from "@nextui-org/react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-6 flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <Image src="/logo.png" alt="Di-Dema Logo" width={50} height={50} />
            <h4 className="text-lg font-semibold mt-2 text-white">Di-Dema</h4>
            <p className="text-sm text-gray-400">Climatic App</p>
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-2 text-white">Sitemap</h5>
            <div className="space-y-2">
              <Link
                href="./"
                color="foreground"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Página principal
              </Link>
            </div>
            <div>
              <Link
                href="/visualizer"
                color="foreground"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Herramienta Re-análisis
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h5 className="text-lg font-semibold mb-3 text-white">
              Enlaces externos
            </h5>
            <div className="space-y-2">
              <Link
                isExternal showAnchorIcon
                href="https://cloud.google.com/storage/docs/public-datasets/era5?hl=es-419"
                color="foreground"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Datos de ERA5
              </Link>
            </div>
            <div>
              <Link
                isExternal showAnchorIcon
                href="https://cl.linkedin.com/in/ra%C3%BAl-valenzuela-ruiz-5b9b05257"
                color="foreground"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cliente: Raúl Valenzuela
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Di-Dema. Todos los derechos
            reservados.
          </p>
        </div>
      </div>

      {/* Margen inferior ajustado para dispositivos pequeños */}
      <style jsx>{`
        footer {
          margin-bottom: env(safe-area-inset-bottom); /* Ajuste para dispositivos con notch o safe-area */
        }
        @media (max-width: 640px) {
          footer {
            padding-bottom: 16px; /* Ajuste para pantallas pequeñas */
          }
        }
      `}</style>
    </footer>
  );
}