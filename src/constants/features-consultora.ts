import {
    SparklesIcon,        // Para "Produtos de múltiplas marcas"
    ShoppingBagIcon,     // Para "Sem investir em estoque"
    CreditCardIcon,      // Para "Receba suas vendas automaticamente"
    TrendingUpIcon,      // Para "Aumente sua renda" 
    HeadphonesIcon,      // Para "Suporte dedicado"
} from "lucide-react";

export const FEATURES_CONSULTORA = [
    {
        title: "Centenas de produtos de várias marcas",
        description: "Acesse um catálogo completo de cosméticos de marcas renomadas. Mostre pros seus clientes, deixe eles escolherem e gere o link de pagamento na hora. Simples assim.",
        icon: SparklesIcon,
        image: "/images/placeholder-catalogo-produtos.png",
    },
    {
        title: "Sem investir em estoque",
        description: "Você não compra nada antecipado. Mostre os produtos, o cliente escolhe, você gera o link de pagamento e pronto. Sem dinheiro parado, sem risco, sem produto encalhado.",
        icon: ShoppingBagIcon,
        image: "/images/placeholder-compra-pos-venda.png",
    },
    {
        title: "Receba suas comissões automaticamente",
        description: "Seu cliente paga direto na plataforma e você recebe sua comissão automaticamente na sua conta. Simples, rápido e seguro. Sem precisar vender fiado e cobrar ninguém.",
        icon: CreditCardIcon,
        image: "/images/placeholder-pagamentos.png",
    },
    {
        title: "Aumente sua renda sem complicação",
        description: "Venda quanto quiser. Sem limitações, sem burocracia, sem meta mínima. Quanto mais você vende, mais você ganha.",
        icon: TrendingUpIcon,
        image: "/images/placeholder-crescimento.png",
    },
    {
        title: "Suporte dedicado para consultoras",
        description: "Nossa equipe está pronta para te ajudar a vender mais. Tire dúvidas, receba dicas e conte com nosso suporte sempre que precisar.",
        icon: HeadphonesIcon,
        image: "/images/placeholder-suporte.png",
    }
]
