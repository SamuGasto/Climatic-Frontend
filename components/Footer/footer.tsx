"use client";
import React from "react";
import { Image, Link, Input, Button } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Image src="/logo.png" alt="Di-Dema Logo" width={50} height={30} />
            <h4 className="text-lg font-semibold mt-2 text-white">Di-Dema</h4>
            <p className="text-sm text-gray-400">Climatic App</p>
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-2 text-white">Sitemap</h5>
            <div>
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

          <div className="flex flex-col">
            <h5 className="text-lg font-semibold mb-2 text-white">
              Enlaces externos
            </h5>
            <div>
              <Link
                href="https://cds.climate.copernicus.eu/cdsapp#!/dataset/reanalysis-era5-single-levels"
                color="foreground"
                className="text-gray-400 hover:text-white transition-colors inline-block"
              >
                Datos de ERA5
              </Link>
            </div>
            <div>
              <Link
                href="https://cl.linkedin.com/in/ra%C3%BAl-valenzuela-ruiz-5b9b05257"
                color="foreground"
                className="text-gray-400 hover:text-white transition-colors inline-block"
              >
                Cliente: Raúl Valenzuela
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Di-Dema. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
