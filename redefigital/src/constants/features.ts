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
        title: "Uma legião pronta para vender",
        description: "Esqueça o custo de aquisição (CAC) alto. Conecte sua marca diretamente a uma rede de vendedores focados em conversão.",
        icon: UsersRoundIcon,
        image: "/images/placeholder-rede-consultoras.png", 
    },
    {
        title: "Custo zero para escalar!",
        description: "O cadastro é 100% gratuito. Você não paga mensalidade, apenas uma comissão transparente após a venda ser concluída.",
        icon: DollarSignIcon,
        image: "/images/placeholder-dashboard-comissao.png",
    },
    {
        title: "Catálogo digital e estoque unificado",
        description: "Cadastre produtos e gerencie estoques em um só lugar. Nossa força de vendas acessa seu catálogo sempre atualizado em tempo real.",
        icon: LayoutGridIcon,
        image: "/images/placeholder-dashboard-produtos.png",
    },
    {
        title: "Split de pagamentos nativo",
        description: "O cliente paga, a tecnologia divide. Nós cuidamos do split automático da comissão entre a sua marca e o vendedor direto.",
        icon: TruckIcon,
        image: "/images/placeholder-dashboard-pedidos.png",
    },
    {
        title: "Inteligência de Venda Direta (BI)",
        description: "Acompanhe mapa de calor, produtos campeões e performance da rede em tempo real. Dados precisos para decisões de CEO.",
        icon: LineChartIcon,
        image: "/images/placeholder-dashboard-analytics.png",
    }
]
