"use client";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import React from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-dark text-gray-300 py-4">
      <div className="container mx-auto px-2">
        <div
          className={`grid grid-cols-3 gap-8 ${
            isMobile ? "sm:grid-cols-3" : "sm:grid-cols-3"
          }`}
        >
          <div className={`flex flex-col items-center ${isMobile ? "order-1" : "order-2"}`}>
            <Image src="/logo.png" alt="Di-Dema Logo" width={50} height={50} />
            <h4 className="text-lg font-semibold mt-2 text-white">Di-Dema</h4>
            <p className="text-sm text-gray-400">Climatic App</p>
          </div>
          <div className={`flex flex-col ${isMobile ? "order-1" : "order-2"}`}>

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

          <div className={`flex flex-col ${isMobile ? "order-3" : "order-2"}`}>
            <h5 className="text-lg font-semibold mb-2 text-white">
              Enlaces externos
            </h5>
            <div>
              <Link
                isExternal
                showAnchorIcon
                href="https://cloud.google.com/storage/docs/public-datasets/era5?hl=es-419"
                color="foreground"
                className="text-gray-400 hover:text-white transition-colors inline-block"
                legacyBehavior
              >
                <a target="_blank">Datos de ERA5</a>
              </Link>
            </div>
            <div>
              <Link
                isExternal
                showAnchorIcon
                href="https://cl.linkedin.com/in/ra%C3%BAl-valenzuela-ruiz-5b9b05257"
                color="foreground"
                className="text-gray-400 hover:text-white transition-colors inline-block"
                legacyBehavior             >
                <a target="_blank">Cliente: Raúl Valenzuela</a>
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