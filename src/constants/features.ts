import {
    // ÍCONES ANTIGOS:
    // ChartColumnBigIcon,
    // DatabaseIcon,
    // TrendingUpIcon,
    // WandSparklesIcon,
    // ZapIcon

    // --- NOVOS ÍCONES (MAIS RELEVANTES) ---
    UsersRoundIcon,     // Para o "1"
    DollarSignIcon,     // Para "2"
    LayoutGridIcon,     // Para "3"
    TruckIcon,          // Para "4"
    LineChartIcon,      // Para "5"
} from "lucide-react";

export const FEATURES = [
    {
        title: "Consultoras prontas para vender seus produtos",
        description: "Conecte sua marca em nossa rede de consultoras prontas para vender seu produto.",
        icon: UsersRoundIcon,
        image: "/images/placeholder-rede-consultoras.png", 
    },
    {
        title: "Custo zero!",
        description: "O cadastro é 100% gratuito. Você não paga mensalidade, apenas uma comissão transparente *após* a venda ser concluída.",
        icon: DollarSignIcon,
        image: "/images/placeholder-dashboard-comissao.png", // <- Trocar pela imagem do seu dashboard
    },
    {
        title: "Gestão de estoque e catálogo simplificado",
        description: "Cadastre seus produtos e defina seu estoque em um único lugar. Todas as consultoras vendem seu catálogo atualizado.",
        icon: LayoutGridIcon,
        image: "/images/placeholder-dashboard-produtos.png", // <- Trocar pela imagem do seu dashboard
    },
    {
        title: "Pagamentos",
        description: "O cliente paga na plataforma. Nós cuidamos do split automático da comissão (para você e para a consultora)",
        icon: TruckIcon,
        image: "/images/placeholder-dashboard-pedidos.png", // <- Trocar pela imagem do seu dashboard
    },
    {
        title: "Dashboard e BI (Business Intelligence)",
        description: "Acompanhe suas vendas, comissões pagas e o desempenho das consultoras em tempo real. Dados precisos para decisões inteligentes.",
        icon: LineChartIcon,
        image: "/images/placeholder-dashboard-analytics.png", // <- Trocar pela imagem do seu dashboard
    }
]
