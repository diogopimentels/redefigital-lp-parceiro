"use client"; // <-- PRECISA SER CLIENT para 'useState' e 'hover'

import { cn } from "@/lib";
import Image from "next/image";
import Container from "../global/container";
// import Icons from "../global/icons"; // <-- Não precisamos mais dos ícones de rede social
// import Images from "../global/images"; // <-- Não precisamos mais da logo genérica
import Ripple from "../ui/ripple";
import { useState } from "react"; // <-- Importa o useState para a mágica do hover

// --- 1. DEFINIR O CONTEÚDO DO HUB ---
// (Textos que vão mudar no hover)
const hubContent = {
    default: {
        title: "Karuí HUB 5.0",
        description: "O ecossistema completo para marcas de moda e cosméticos. Da produção terceirizada da Karuí Cosméticos, à estratégia da Smartnudge, até o marketplace B2B2C da Redefigital, conectando suas marcas a consultoras prontas para vender."
    },
    redefigital: {
        title: "Redefigital (O Marketplace)",
        description: "O marketplace B2B2C que conecta suas marcas a um exército de consultoras e revendedoras prontas para vender seus produtos sem que você precise de estoque próprio."
    },
    smartnudge: {
        title: "Smartnudge (A Agência)",
        description: "A agência de marketing digital focada em performance para marcas de roupas e cosméticos, cuidando da sua estratégia para você focar no produto."
    },
    karui: {
        title: "Karuí Cosméticos (A Fábrica)",
        description: "Produção terceirizada (White Label / Private Label) de cosméticos. Cuidamos da sua fórmula, envase e regulamentação do zero."
    }
};

// --- 2. DEFINIR AS LOGOS ORBITANDO ---
// (Vamos usar 3 de cada lado para ficar cheio, como antes)
const HUB_LOGOS = [

    { 
        id: "karui",
        logo: "/logos/karui.png", // <-- Caminho para sua logo
        alt: "Karuí Cosméticos",
        position: "left-1", 
        size: "large", 
        iconSize: "large" 
    },
    { 
        id: "smartnudge",
        logo: "/logos/smartnudge.png", 
        alt: "Smartnudge",
        position: "right-1", 
        size: "large", 
        iconSize: "large" 
    },
    // Opcional: Adicione mais 2 (ex: logos genéricas do hub)
    // { id: "default", logo: "/images/icon-hub.svg", alt: "Hub", position: "left-3", size: "small", iconSize: "small", className: "hidden lg:flex" },
    // { id: "default", logo: "/images/icon-hub.svg", alt: "Hub", position: "right-3", size: "small", iconSize: "small", className: "hidden lg:flex" }
];


const Integration = () => {
    // --- 3. STATE PARA O TEXTO DINÂMICO ---
    const [content, setContent] = useState(hubContent.default);

    // Funções de helper (INTOCADAS, mas podemos simplificar se quiser)
    const getPositionClasses = (position: string) => {
        switch (position) {
            case "left-3": return "-translate-x-[285px]";
            case "left-2": return "-translate-x-[210px]";
            case "left-1": return "-translate-x-[125px]";
            case "right-1": return "translate-x-[125px]";
            case "right-2": return "translate-x-[210px]";
            case "right-3": return "translate-x-[285px]";
            default: return "";
        }
    };
    const getSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "size-20";
            case "medium": return "size-16";
            case "small": return "size-12";
            default: return "size-20";
        }
    };
    // Icon size não é mais tão relevante para <img>, mas mantemos
    const getIconSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "size-10";
            case "medium": return "size-7";
            case "small": return "size-5";
            default: return "size-10";
        }
    };


    // --- 4. FUNÇÕES DE HOVER ---
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
        <div className="relative flex flex-col items-center justify-center w-full py-20"> {/* Removido 'scale-' */}
            
            {/* --- Seção Mobile (INTOCADA, mas com caminhos corrigidos) --- */}
            <Container className="relative">
                <div className="relative flex flex-col lg:hidden items-center justify-center overflow-visible">
                    {/* Glow com cores da paleta */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-primary to-secondary rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>
                    <div className="max-w-sm w-full h-auto mx-auto mt-8">
                        <Image
                            src="/images/integration.svg" // <-- Seu SVG (pode trocar pelo /redefigital.png)
                            alt="Karuí HUB 5.0"
                            width={1000}
                            height={1000}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </Container>

            {/* --- Headline (INTOCADA) --- */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto lg:absolute lg:top-1/4 inset-x-0 mt-12 lg:mt-0 z-10">
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-semibold !leading-snug">
                    Conheça nosso HUB 5.0
                </h2>
            </div>
            
            {/* --- Texto Dinâmico (AGORA COM STATE) --- */}
            <div 
                className="flex flex-col items-center text-center max-w-3xl mx-auto lg:absolute lg:bottom-1/4 inset-x-0 z-20 mt-8 lg:mt-0 px-4"
                onMouseLeave={handleMouseLeave} // Reseta o texto quando o mouse sai da área toda
            >
                {/* O h3 foi trocado por um <p> para melhor semântica e animação */}
                <p className="text-muted-foreground transition-all duration-300">
                    {content.description}
                </p>
            </div>

            {/* --- Seção Desktop (AGORA REFATORADA) --- */}
            <Container delay={0.3}>
                <div className="relative hidden lg:flex items-center justify-center overflow-visible">
                    {/* Glow com cores da paleta */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-primary to-secondary rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>

                    <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-visible">
                        <Ripple />
                    </div>

                    {/* LOGO CENTRAL (O SOL) */}
                    <div 
                        className="absolute z-20 flex items-center justify-center group"
                        onMouseEnter={() => handleMouseEnter('redefigital')} // Ativa o texto da Redefigital
                    >
                        {/* Trocado <Images.logo> pela sua <Image> */}
                        <Image
                            src="/redefigital.png" // <-- SUA LOGO AQUI
                            alt="Redefigital"
                            width={96} // size-24
                            height={96} // size-24
                            className="group-hover:scale-110 transition-all duration-500"
                        />
                            <div className="absolute inset-0 bg-white/70 blur-lg -z-10 rounded-full scale-10"></div>
                    </div>

                    {/* LOGOS ORBITANDO (OS PLANETAS) */}
                    {HUB_LOGOS.map((logo, index) => (
                        <div
                            key={index}
                            className={cn(
                                "absolute z-20 p-2 rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:scale-110",
                                getPositionClasses(logo.position),
                                getSizeClasses(logo.size),
                                logo.className
                            )}
                            onMouseEnter={() => handleMouseEnter(logo.id)} // Ativa o texto da logo específica
                        >
                            <Image
                                src={logo.logo}
                                alt={logo.alt}
                                width={64} // Tamanho máximo (IconSize Large)
                                height={64}
                                className="object-contain" // Garante que a logo caiba
                            />

                        </div>
                    ))}
                    
                </div>
            </Container>
        </div>
    )
};

export default Integration;