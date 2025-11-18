"use client";

import { cn } from "@/lib";
import Image from "next/image";
import Container from "../global/container";
import Ripple from "../ui/ripple";
import { useState } from "react";

// --- CONTEÚDO ---
const hubContent = {
    default: {
        title: "Karuí HUB 5.0",
        description: "O ecossistema completo para marcas de moda e cosméticos."
    },
    redefigital: {
        title: "Redefigital",
        description: "O marketplace B2B2C que conecta suas marcas a um exército de consultoras prontas para vender."
    },
    smartnudge: {
        title: "Smartnudge",
        description: "Agência de marketing focada em performance, cuidando da estratégia para você focar no produto."
    },
    karui: {
        title: "Karuí Cosméticos",
        description: "Produção terceirizada (White Label) de cosméticos. Fórmula, envase e regulamentação do zero."
    }
};

// --- LOGOS ---
const HUB_LOGOS = [
    { 
        id: "karui",
        logo: "/logos/karui.png",
        alt: "Karuí Cosméticos",
        position: "left-1", 
        size: "large", 
        className: undefined
    },
    { 
        id: "smartnudge",
        logo: "/logos/smartnudge.png", 
        alt: "Smartnudge",
        position: "right-1", 
        size: "large", 
        className: undefined,
    },
];

const Integration = () => {
    const [content, setContent] = useState(hubContent.default);

    // Funções auxiliares para o Desktop
    const getPositionClasses = (position: string) => {
        switch (position) {
            case "left-1": return "-translate-x-[125px]";
            case "right-1": return "translate-x-[125px]";
            default: return "";
        }
    };

    const handleMouseEnter = (id: string) => {
        if (id === 'smartnudge') setContent(hubContent.smartnudge);
        else if (id === 'karui') setContent(hubContent.karui);
        else if (id === 'redefigital') setContent(hubContent.redefigital);
        else setContent(hubContent.default);
    };

    const handleMouseLeave = () => {
        setContent(hubContent.default);
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-12 lg:py-24">
            
            {/* TÍTULO (Igual para ambos) */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 z-20 mb-12 lg:absolute lg:top-[15%] lg:mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-heading font-semibold !leading-snug">
                    Conheça nosso HUB 5.0
                </h2>
            </div>

            {/* ========================================================
                1. VERSÃO MOBILE / TABLET (Lista Vertical)
               ======================================================== */}
            <div className="flex flex-col items-center w-full px-4 gap-6 lg:hidden">
                
                {/* Card Principal: Redefigital */}
                <div className="relative flex flex-col items-center p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm w-full max-w-md text-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl -z-10"/>
                    <div className="mb-4 relative">
                         <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full"/>
                         <Image src="/redefigital.png" alt="Redefigital" width={64} height={64} className="relative z-10" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Redefigital</h3>
                    <p className="text-sm text-muted-foreground">{hubContent.redefigital.description}</p>
                </div>

                {/* Conector Visual (Linha) */}
                <div className="w-[1px] h-8 bg-gradient-to-b from-primary/50 to-transparent"></div>

                {/* Cards dos Parceiros */}
                <div className="grid gap-4 w-full max-w-md">
                    {/* Smartnudge */}
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-background/30">
                        <div className="bg-neutral-900 p-2 rounded-full border border-neutral-800 shrink-0">
                            <Image src="/logos/smartnudge.png" alt="Smartnudge" width={32} height={32} className="object-contain" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-foreground">Smartnudge</h4>
                            <p className="text-xs text-muted-foreground mt-1">{hubContent.smartnudge.description}</p>
                        </div>
                    </div>

                    {/* Karui */}
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-background/30">
                        <div className="bg-neutral-900 p-2 rounded-full border border-neutral-800 shrink-0">
                            <Image src="/logos/karui.png" alt="Karui" width={32} height={32} className="object-contain" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-foreground">Karuí Cosméticos</h4>
                            <p className="text-xs text-muted-foreground mt-1">{hubContent.karui.description}</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* ========================================================
                2. VERSÃO DESKTOP (Animação Orbital)
               ======================================================== */}
            <Container delay={0.3} className="hidden lg:flex w-full items-center justify-center">
                <div className="relative flex items-center justify-center overflow-visible w-full h-dvh">

                    {/* Texto Dinâmico Desktop */}
                    <div className="absolute bottom-[20%] text-center max-w-2xl px-4 z-20">
                        <p className="text-lg text-muted-foreground transition-all duration-300">
                            {content.description}
                        </p>
                    </div>

                    <Ripple />

                    {/* LOGO CENTRAL (Redefigital) */}
                    <div 
                        className="absolute z-20 flex items-center justify-center group relative"
                        onMouseEnter={() => handleMouseEnter('redefigital')}
                    >
                        <div className="absolute inset-0 bg-white/30 blur-xl rounded-full scale-90 z-0"></div>
                        <Image
                            src="/redefigital.png"
                            alt="Redefigital"
                            width={96}
                            height={96}
                            className="group-hover:scale-110 transition-all duration-500 relative z-10 cursor-pointer"
                        />
                    </div>

                    {/* LOGOS ORBITANDO */}
                    {HUB_LOGOS.map((logo, index) => (
                        <div
                            key={index}
                            className={cn(
                                "relative absolute z-20 p-2 rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:scale-110 cursor-pointer size-20",
                                getPositionClasses(logo.position),
                                logo.className
                            )}
                            onMouseEnter={() => handleMouseEnter(logo.id)}
                        >
                            <div className="absolute inset-0 bg-white/20 blur-lg rounded-full scale-90 z-0"></div>
                            <Image
                                src={logo.logo}
                                alt={logo.alt}
                                width={64}
                                height={64}
                                className="object-contain relative z-10"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
};

export default Integration;