import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "JCI Industrial | Engenharia que Move Grandes Operações",
  description: "Projetos mecânicos, automação industrial, esteiras transportadoras, correias vulcanizadas, usinagem e estruturas metálicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
