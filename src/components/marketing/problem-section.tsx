import { XCircleIcon } from "lucide-react";
import Container from "../global/container";

const ProblemSection = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 bg-background overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />
            </div>

            <Container>
                <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium !leading-tight text-foreground">
                        Você reconhece alguma dessas situações?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                        Se você enfrenta esses desafios no dia a dia, saiba que não está sozinha.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto relative z-10">
                    {[
                        "Tem que pedir catálogo impresso de cada marca e gastar com frete",
                        "Perde tempo anotando pedido no caderno e depois passando pro WhatsApp",
                        "Esquece de cobrar cliente porque não tem controle organizado",
                        "Não sabe quanto já vendeu no mês ou quanto vai receber de comissão",
                        "Quer revender mais marcas mas não tem capital pra estocar"
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-border hover:shadow-lg transition-all duration-300"
                        >
                            <div className="p-3 rounded-xl bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                                <XCircleIcon className="w-6 h-6 text-red-500" />
                            </div>
                            <p className="text-muted-foreground group-hover:text-foreground transition-colors text-base leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center max-w-3xl mx-auto relative z-10">
                    <div className="inline-flex flex-col items-center gap-2 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                        <p className="text-lg md:text-xl font-medium text-foreground">
                            Se você respondeu <span className="text-primary font-bold">"sim"</span> pra pelo menos uma dessas, a Redefigital foi feita pra você.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProblemSection;
