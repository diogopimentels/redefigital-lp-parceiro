"use client"; 

import "@/styles/globals.css";
import { cn } from "@/lib";
import { base, heading } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { subheading } from "@/constants/fonts";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SiteLoader } from "@/components/global/siteloader"; 

// --- IMPORTAÇÕES DO TEMA E LOADER ---
import { createContext, useContext } from 'react';
import { ThemeProvider } from "@/components/global/theme-provider"; // <-- 1. Importar o Provedor de Tema

// ... (seu código do LoadingContext e useLoading continua o mesmo) ...
interface LoadingContextType {
    isLoading: boolean;
}
export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);
export const useLoading = () => {
    // ... (código do hook) ...
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); 
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide",
                    base.variable,
                    heading.variable,
                    subheading.variable,
                )}
            >
                {/* 2. ABRAÇAR TUDO COM O THEME PROVIDER */}
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Toaster richColors theme="dark" position="top-right" />

                    <AnimatePresence>
                        {isLoading && <SiteLoader />}
                    </AnimatePresence>

                    <LoadingContext.Provider value={{ isLoading }}>
                        {children}
                    </LoadingContext.Provider>
                
                </ThemeProvider>
            </body>
        </html>
    );
};