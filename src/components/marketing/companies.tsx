"use client"; 

import Container from "../global/container";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib"; 

const partnerLogos = [
    { alt: "Loftstyle", srcDark: "/images/logo1.png", srcLight: "/images/logo9.png" },
    { alt: "Raizz", srcDark: "/images/logo2.png", srcLight: "/images/logo10.png" },
    { alt: "Murau", srcDark: "/images/logo3.png", srcLight: "/images/logo11.png" },
    { alt: "Perfect Way", srcDark: "/images/logo4.png", srcLight: "/images/logo12.png" },
    { alt: "Choulette", srcDark: "/images/logo5.png", srcLight: "/images/logo13.png" },
    { alt: "Gloria Coelho", srcDark: "/images/logo6.png", srcLight: "/images/logo14.png" },
    { alt: "Clara Cottle", srcDark: "/images/logo7.png", srcLight: "/images/logo15.png" },
    { alt: "Loftstyle 2", srcDark: "/images/logo8.png", srcLight: "/images/logo16.png" },
];

const Companies = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    // Duplicamos a lista para o efeito de loop infinito
    const logosToShow = [...partnerLogos, ...partnerLogos]; 

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 companies overflow-hidden">
            <Container>
                {/* Headline (Intocada) */}
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-2xl lg:text-4xl font-medium">
                        Marcas que faturam com a Redefigital
                    </h4>
                </div>
            </Container>

            {/* --- O CARROSSEL MÁGICO COMEÇA AQUI --- */}
            <div 
                className="w-full max-w-6xl mx-auto mt-16 overflow-hidden"
                // O "DEGRADÊ" (MÁSCARA DE FADE NAS LATERAIS)
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
            >
                {/* O "TRENZINHO" DE LOGOS COM A ANIMAÇÃO */}
                <div className={cn(
                    "flex w-max animate-infinite-scroll" // Aplica a animação
                    // "hover:[animation-play-state:paused]" // <-- LINHA REMOVIDA
                )}>
                    
                    {logosToShow.map((logo, index) => {
                        // Lógica de placeholder
                        if (!mounted) {
                            return (
                                <div 
                                    key={index} 
                                    // --- TAMANHO E ESPAÇO AUMENTADOS ---
                                    className="h-20 w-36 mx-20 bg-muted/30 rounded-md animate-pulse" 
                                />
                            );
                        }

                        // Lógica de troca de logo (Preta/Branca)
                        const logoSrc = resolvedTheme === 'dark' ? logo.srcDark : logo.srcLight;

                        return (
                            <img
                                key={index}
                                src={logoSrc}
                                alt={logo.alt}
                                // --- TAMANHO E ESPAÇO AUMENTADOS ---
                                // h-20 = 80px | mx-20 = 80px (160px de espaço total)
                                className="h-20 w-auto mx-20 opacity-80" 
                            />
                        );
                    })}

                </div>
            </div>
            {/* --- FIM DO CARROSSEL --- */}
        </div>
    )
};

export default Companies;