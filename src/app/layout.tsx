import type { Metadata } from "next";
import { Providers } from "@/components/global/providers"; // Importa o Client Component
import { cn } from "@/lib"; // Importa o cn
import { base, heading } from "@/constants"; // Importa as fontes
import { subheading } from "@/constants/fonts"; // Importa as fontes
import "@/styles/globals.css"; // Importa os estilos globais

// --- 1. METADATA (TÍTULO E FAVICON) ---
export const metadata: Metadata = {
  title: "Redefigital - O Marketplace B2B2C",
  description: "Conecte sua marca a milhares de consultoras em todo o Brasil.",
  icons: {
    icon: '/icon.png', // (Confere se está na pasta /public)
    shortcut: '/favicon.ico', // (Confere se está na pasta /public)
    apple: '/apple-icon.png', // (Confere se está na pasta /public)
  },
};

// --- 2. LAYOUT (SERVER COMPONENT) ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      {/* O <body> FICA AQUI */}
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide",
          base.variable,
          heading.variable,
          subheading.variable,
        )}
      >
        {/* "Abraça" o conteúdo com o Provider (que é 'use client') */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}