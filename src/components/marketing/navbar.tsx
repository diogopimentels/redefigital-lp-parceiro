"use client"; // Necessário para hooks

import { MenuIcon } from 'lucide-react'; // Manteve o MenuIcon para o mobile
import { useState, useEffect } from "react"; // Hooks do React para scroll
import { cn } from "@/lib"; // Utilitário de classes
import { motion, AnimatePresence } from "framer-motion"; // Para a logo animada
import { useLoading } from "@/components/global/providers";
import Image from "next/image"; // Para a logo Redefigital
import Link from "next/link"; // Para os links

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '@/components/global/ThemeToggle'; // Nosso botão de tema
import { NAV_LINKS } from "@/constants"; // Seus links customizados

// Removido Logo e SearchIcon que não vamos usar
// import Logo from '@/components/shadcn-studio/logo'
// import { SearchIcon } from 'lucide-react'

// O tipo NavigationItem continua útil para o Dropdown
type NavigationItem = {
    title: string
    href: string
}[]

// Renomeamos para NavbarComponent01 para evitar conflito se você tiver outros Navbars
const NavbarComponent01 = () => { // Removida a prop navigationData, vamos usar NAV_LINKS direto
    const [scrolled, setScrolled] = useState(false);
    const { isLoading } = useLoading();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        // Header agora controla a posição sticky e o espaço inicial
        <header className='sticky top-0 w-full z-50 py-2'>
            {/* O Div interno agora é a "Pílula" animada */}
            <div className={cn(
                'mx-auto flex items-center justify-between', // Layout base
                'transition-all duration-500 ease-in-out', // Animação
                'bg-background/80 backdrop-blur-sm', // Estilo visual
                scrolled
                    ? 'max-w-5xl h-14 rounded-full border border-border px-6' // Estado Rolado (Pílula)
                    : 'max-w-7xl h-16 rounded-none border-transparent px-4 sm:px-6' // Estado Topo (Full)
            )}>

                {/* --- LOGO ANIMADA (Esquerda) --- */}
                <div className="flex items-center flex-shrink-0"> {/* Adicionado flex-shrink-0 */}
                    <Link href="/" className="flex items-center gap-2">
                        <AnimatePresence>
                            {!isLoading && (
                                <motion.div
                                    key="navbar-logo"
                                    layoutId="logo-principal-da-redefigital"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        layout: { duration: 1.2, ease: "circOut" }
                                    }}
                                    className="relative w-8 h-8"
                                >
                                    <Image
                                        src="/redefigital.png"
                                        alt="Logo Redefigital"
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        {/* Mostra o nome só no estado "Full" para caber na pílula */}
                        <span className={cn(
                             "text-xl font-semibold transition-opacity duration-300",
                             scrolled ? "hidden lg:hidden" : "hidden lg:block" // Esconde rápido na pílula
                        )}>
                            Redefigital
                        </span>
                    </Link>
                </div>

                {/* --- LINKS DE NAVEGAÇÃO (Centro - Desktop) --- */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-8 font-medium text-muted-foreground">
                    {NAV_LINKS.map((link, index) => (
                        <Link key={index} href={link.href} className="text-sm hover:text-primary transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* --- BOTÕES (Direita) --- */}
                <div className='flex items-center gap-2'> {/* Ajustado gap */}
                    {/* Botão CTA (Desktop) */}
                    <Link href="http://redefigital-frontend.onrender.com/partner/sign-up" className="hidden lg:block">
                        <Button>
                            Marca parceira
                        </Button>
                    </Link>
                    
                    <Link href="http://redefigital-frontend.onrender.com/sign-up" className="hidden lg:block">
                        <Button>
                            Consultora
                        </Button>
                    </Link>

                    {/* Botão de Tema */}
                    <ThemeToggle />

                    {/* Menu Mobile (Dropdown) */}
                    <div className="md:hidden"> {/* Só mostra em telas menores que 'md' */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant='outline' size='icon'>
                                    <MenuIcon />
                                    <span className='sr-only'>Menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='w-56' align='end'>
                                <DropdownMenuGroup>
                                    {NAV_LINKS.map((item, index) => ( // Usando NAV_LINKS aqui
                                        <DropdownMenuItem key={index} asChild>
                                            <Link href={item.href}>{item.name}</Link>
                                        </DropdownMenuItem>
                                    ))}
                                    {/* Adiciona os botões CTA no menu mobile */}
                                    <DropdownMenuItem asChild>
                                        <Link href="http://redefigital-frontend.onrender.com/partner/sign-up">Marca parceira</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="http://redefigital-frontend.onrender.com/sign-up">Consultora</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavbarComponent01; // Exportando com o novo nome