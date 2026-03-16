import {
    SparklesIcon,        // Para "Produtos de múltiplas marcas"
    ShoppingBagIcon,     // Para "Sem investir em estoque"
    CreditCardIcon,      // Para "Receba suas vendas automaticamente"
    TrendingUpIcon,      // Para "Aumente sua renda" 
    HeadphonesIcon,      // Para "Suporte dedicado"
} from "lucide-react";

export const FEATURES_CONSULTORA = [
    {
        title: "Múltiplos segmentos, um só app",
        description: "Acesse um catálogo digital com moda, cosméticos, utilidades e mais. Deixe o cliente escolher pelo celular e gere o link na hora.",
        icon: SparklesIcon,
        image: "/images/placeholder-catalogo-produtos.png",
    },
    {
        title: "Zero Risco, Zero Estoque",
        description: "Chega de dinheiro parado. Você não compra nada antecipado. Vendeu, o sistema divide o dinheiro e a marca entrega. Simples assim.",
        icon: ShoppingBagIcon,
        image: "/images/placeholder-compra-pos-venda.png",
    },
    {
        title: "Adeus, fiado! Pagamento digital",
        description: "Seu cliente paga com cartão ou Pix direto na plataforma. Você recebe sua comissão automaticamente. Venda 100% segura e livre de cobranças.",
        icon: CreditCardIcon,
        image: "/images/placeholder-pagamentos.png",
    },
    {
        title: "Escale seus ganhos sem teto",
        description: "Diferente dos catálogos antigos, aqui não tem meta mínima ou trava. Seu faturamento depende apenas da sua vontade de crescer.",
        icon: TrendingUpIcon,
        image: "/images/placeholder-crescimento.png",
    },
    {
        title: "Suporte de quem entende de venda",
        description: "Nosso time de especialistas está pronto para te ajudar. Dicas de abordagem, tira-dúvidas e treinamentos focados em resultado.",
        icon: HeadphonesIcon,
        image: "/images/placeholder-suporte.png",
    }
]
