import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    
                    {/* === COPY DA MARCA AQUI === */}
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Acompanhe seu <br /><span className="font-subheading italic">Dashboard de Vendas</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Veja em tempo real quais produtos vendem mais, quais consultoras estão performando e quanto você está faturando. Total transparência.
                    </p>
                    {/* === FIM DA COPY === */}

                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                {/* --- CARD 1: FOCO EM VENDAS/FATURAMENTO --- */}
                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        {/* === CORES DA REDEFIGITAL AQUI === */}
                        <MagicCard
                            gradientFrom="#8B2E52" // Rosa (Secondary)
                            gradientTo="#B76A58" // Terracota (Primary)
                            gradientColor="rgba(183, 106, 88, 0.1)" // Glow Terracota
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            {/* === COR DO BLUR AQUI === */}
                            <div className="absolute bottom-0 right-0 bg-primary w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Performance de Vendas
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Acompanhe seu faturamento, comissões e ticket médio.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">
                                                R$ 12.834,00
                                            </div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                +25% último mês
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Produto</div>
                                            <div>Status</div>
                                            <div>Vendas</div>
                                            <div>Comissão</div>
                                        </div>
                                        {[
                                            { name: "Creme X", status: "Ativo", sales: "120", com: "R$ 1.200" },
                                            { name: "Sérum Y", status: "Ativo", sales: "88", com: "R$ 950" },
                                            { name: "Kit Z", status: "Pausado", sales: "30", com: "R$ 400" },
                                        ].map((item) => (
                                            <div key={item.name} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div>{item.name}</div>
                                                <div>{item.status}</div>
                                                <div>{item.sales}</div>
                                                <div className="font-semibold">{item.com}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                {/* --- CARD 2: FOCO EM REDE/CONSULTORAS --- */}
                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        {/* === CORES DA REDEFIGITAL AQUI === */}
                        <MagicCard
                            gradientFrom="#8B2E52" // Rosa (Secondary)
                            gradientTo="#B76A58" // Terracota (Primary)
                            gradientColor="rgba(183, 106, 88, 0.1)" // Glow Terracota
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            {/* === COR DO BLUR AQUI === */}
                            <div className="absolute bottom-0 right-0 bg-secondary w-1/4 h-1/4 blur-[8rem] z-20"></div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Performance da Rede
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Visualize o crescimento da sua rede de consultoras.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">1.204</div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                +12% novas consultoras
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Audience Table */}
                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Região</div>
                                            <div>Consultoras</div>
                                            <div>Vendas</div>
                                            <div>Conversão</div>
                                        </div>
                                        {[
                                            { region: "Sudeste", users: "850", sales: "R$ 8.200", rate: "5.1%" },
                                            { region: "Nordeste", users: "210", sales: "R$ 2.400", rate: "3.2%" },
                                            { region: "Sul", users: "144", sales: "R$ 2.234", rate: "4.5%" },
                                        ].map((metric) => (
                                            <div key={metric.region} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div>{metric.region}</div>
                                                <div>{metric.users}</div>
                                                <div>{metric.sales}</div>
                                                <div className="font-semibold">{metric.rate}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;