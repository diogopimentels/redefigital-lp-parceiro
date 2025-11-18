"use client";

import { MenuIcon } from 'lucide-react';
import { useState, useEffect } from "react";
import { cn } from "@/lib";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/components/global/providers";
import Image from "next/image";
import Link from "next/link";

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '@/components/global/ThemeToggle';
import { NAV_LINKS } from "@/constants";

const NavbarComponent01 = () => {
    const [scrolled, setScrolled] = useState(false);
    const { isLoading } = useLoading();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // Diminui a sensibilidade no mobile
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="sticky top-0 w-full z-50">
            
            {/* ========================================================
                1. VERSÃO MOBILE (Só aparece em telas pequenas 'md:hidden')
               ======================================================== */}
            <div className={cn(
                "flex md:hidden items-center justify-between px-4 h-16 w-full transition-all duration-300 border-b",
                scrolled 
                    ? "bg-background/80 backdrop-blur-md border-border/40" // Vidro quando rola
                    : "bg-transparent border-transparent" // Transparente no topo
            )}>
                {/* Lado Esquerdo: Logo + Nome (Sempre visível) */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/redefigital.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-foreground">
                        Redefigital
                    </span>
                </Link>

                {/* Lado Direito: Tema + Menu Hambúrguer */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <MenuIcon className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64 mr-2 mt-2 p-2" align="end">
                            <DropdownMenuGroup className="flex flex-col gap-1">
                                {NAV_LINKS.map((item, index) => (
                                    <DropdownMenuItem key={index} asChild className="py-3 text-base cursor-pointer">
                                        <Link href={item.href}>{item.name}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                            
                            <DropdownMenuSeparator className="my-2" />
                            
                            <div className="flex flex-col gap-2 p-1">
                                <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                                    <Link href="http://app.redefigital.com.br/partner/sign-up" className="w-full">
                                        <Button size="sm" className="w-full justify-center">
                                            Começar agora
                                        </Button>
                                    </Link>
                                </DropdownMenuItem>                               
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>


            {/* ========================================================
                2. VERSÃO DESKTOP/TABLET (Oculte no mobile 'hidden md:flex')
                (Mantida intacta conforme seu pedido)
               ======================================================== */}
            <div className={cn(
                "hidden md:flex mx-auto items-center justify-between py-2 mt-2", // Layout base
                "transition-all duration-500 ease-in-out",
                "bg-background/80 backdrop-blur-sm",
                scrolled
                    ? "max-w-5xl h-14 rounded-full border border-border px-6" // Pílula
                    : "max-w-7xl h-16 rounded-none border-transparent px-6" // Full
            )}>
                {/* LOGO ANIMADA */}
                <div className="flex items-center flex-shrink-0">
                    <Link href="/" className="flex items-center gap-2">
                        <AnimatePresence>
                            {!isLoading && (
                                <motion.div
                                    key="navbar-logo"
                                    layoutId="logo-desk"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="relative w-8 h-8"
                                >
                                    <Image src="/redefigital.png" alt="Logo" fill className="object-contain" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <span className={cn(
                            "text-xl font-semibold transition-opacity duration-300",
                            scrolled ? "hidden lg:hidden" : "hidden lg:block"
                        )}>
                            Redefigital
                        </span>
                    </Link>
                </div>

                {/* LINKS */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-8 font-medium text-muted-foreground">
                    {NAV_LINKS.map((link, index) => (
                        <Link key={index} href={link.href} className="text-sm hover:text-primary transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* BOTÕES */}
                <div className="flex items-center gap-2">
                    <Link href="http://app.redefigital.com.br/partner/sign-up" className="hidden lg:block">
                        <Button size="sm">Começar agora</Button>
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};

export default NavbarComponent01;