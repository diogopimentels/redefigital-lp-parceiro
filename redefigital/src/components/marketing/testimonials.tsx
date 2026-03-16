import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Testimonials = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 bg-background/50">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl font-heading font-medium !leading-snug">
                        Quem vive de vendas já mudou para a Redefigital
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <MagicCard
                        gradientFrom="#8B2E52"
                        gradientTo="#B76A58"
                        className="p-6 rounded-2xl"
                        gradientColor="rgba(183, 106, 88, 0.1)"
                    >
                        <p className="text-foreground/90 italic mb-6">
                            &quot;Eu passava horas batendo perna e somando pedido no caderno. Hoje resolvo tudo pelo zap com o catálogo digital. Minha renda dobrou.&quot;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold">
                                MS
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Marcos Silva</h4>
                                <p className="text-xs text-muted-foreground">São Paulo/SP</p>
                            </div>
                        </div>
                    </MagicCard>

                    <MagicCard
                        gradientFrom="#8B2E52"
                        gradientTo="#B76A58"
                        className="p-6 rounded-2xl"
                        gradientColor="rgba(183, 106, 88, 0.1)"
                    >
                        <p className="text-foreground/90 italic mb-6">
                            &quot;O medo de investir em kit inicial acabou. Consigo oferecer vários produtos e não tomo mais calote porque o cliente paga no link.&quot;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold">
                                AL
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Ana Lúcia</h4>
                                <p className="text-xs text-muted-foreground">Rio de Janeiro/RJ</p>
                            </div>
                        </div>
                    </MagicCard>

                    <MagicCard
                        gradientFrom="#8B2E52"
                        gradientTo="#B76A58"
                        className="p-6 rounded-2xl"
                        gradientColor="rgba(183, 106, 88, 0.1)"
                    >
                        <p className="text-foreground/90 italic mb-6">
                            &quot;A plataforma é tão fácil de usar! Ver minha comissão ali na tela em tempo real e subir no ranking me motiva a vender todos os dias.&quot;
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold">
                                CP
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Carla Pereira</h4>
                                <p className="text-xs text-muted-foreground">Belo Horizonte/MG</p>
                            </div>
                        </div>
                    </MagicCard>
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;
