import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import Sidebar from "@/components/Dashboard/Sidebar/sidebar";
import ModalConfirm from "@/components/Dashboard/Modals/modal-confirm";
import ModalCreateBoard from "@/components/Dashboard/Modals/modal-create-board";
import ModalCreateChart from "@/components/Dashboard/Modals/modal-create-chart";
import ModalEditBoard from "@/components/Dashboard/Modals/modal-edit-board";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <Toaster position="top-center" />
            <main className="flex-1 my-24">{children}</main>
            <Footer />
            <section>
              <ModalCreateBoard />
              <ModalCreateChart />
              <ModalEditBoard />
              <ModalConfirm />
            </section>
          </div>
        </Providers>
      </body>
    </html>
  );
}
