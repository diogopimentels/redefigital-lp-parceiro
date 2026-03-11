"use client";

// (Não precisa mais importar css, cn ou fontes aqui, pois já estão no layout.tsx)
import { Toaster } from "@/components/ui/sonner";
import { useState, useEffect, createContext, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { SiteLoader } from "@/components/global/siteloader"; 
import { ThemeProvider } from "@/components/global/theme-provider";

// --- SEU CÓDIGO DO LOADER ---
interface LoadingContextType {
    isLoading: boolean;
}
export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);
export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};
// ----------------------------

// Este é o componente que "abraça" todo o site
export function Providers({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); 
        
        return () => clearTimeout(timer);
    }, []);

    // --- SEM <html> e <body> AQUI ---
    return (
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
    );
}