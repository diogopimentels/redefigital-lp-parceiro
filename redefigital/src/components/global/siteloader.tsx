"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const SiteLoader = () => {
  return (
    // O "fundo" da splash screen
    <motion.div
      key="site-loader-background"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.8, delay: 0.3, ease: "easeIn" } 
      }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-background"
    >
      {/* A "caixa" da logo que vai ser animada */}
      <motion.div
        layoutId="logo-principal-da-redefigital" // O ID MÁGICO
        
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.3,
          delay: 0.2, 
          ease: "circIn",
          
          // === A MÁGICA DO "LISINHO" ESTÁ AQUI ===
          // Trocamos o array de ease por uma string "circOut"
          // E aumentamos um pouco a duração da viagem para 1.2s
          layout: { duration: 0.8, ease: "circOut" } 
        }}
        
        className="relative w-16 h-16"
      >
        <Image
          src="/redefigital.png"
          alt="Logo Redefigital"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
};