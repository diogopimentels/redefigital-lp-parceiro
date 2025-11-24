import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Testimonials = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 bg-background/50">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl font-heading font-medium !leading-snug">
                        Consultoras reais, resultados reais
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder testimonials since specific ones weren't provided in full detail, using the example structure */}
                    <MagicCard
                        gradientFrom="#8B2E52"
                        gradientTo="#B76A58"
                        className="p-6 rounded-2xl"
                        gradientColor="rgba(183, 106, 88, 0.1)"
                    >
                        <p className="text-foreground/90 italic mb-6">
                            "Antes eu passava horas fazendo conta no caderno. Agora em 5 minutos eu sei exatamente quanto vendi e quanto vou receber. Virou outra vida."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold">
                                MS
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Maria Silva</h4>
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
                            "Consigo vender muito mais marcas sem precisar investir em estoque. Minhas clientes adoram a variedade."
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
                            "O ranking me motiva a vender mais todo mês. Já ganhei prêmios incríveis!"
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
