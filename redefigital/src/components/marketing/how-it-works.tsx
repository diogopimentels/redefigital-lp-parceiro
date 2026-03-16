import Container from "../global/container";
import { ArrowRightIcon } from "lucide-react";

const steps = [
    {
        title: "Assine sua franquia de bolso",
        description: "Por apenas R$ 29,90/mês. Mais barato que seu pacote de internet. Sem taxa de adesão extra."
    },
    {
        title: "Acesse os catálogos digitais",
        description: "Navegue por centenas de produtos das melhores marcas. Escolha o que faz sentido para seus clientes."
    },
    {
        title: "Venda no boca a boca ou WhatsApp",
        description: "Use o link digital para mostrar os produtos de forma profissional. Do jeito que você já sabe fazer."
    },
    {
        title: "Registre tudo em 30 segundos",
        description: "A venda é confirmada no sistema e o split garante que o dinheiro da sua comissão está seguro."
    },
    {
        title: "Veja seu dinheiro crescer",
        description: "Entre no app, acompanhe seus lucros em tempo real e concorra no ranking dos melhores vendedores."
    }
];

const HowItWorks = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl font-heading font-medium !leading-snug">
                        Como funciona a Venda Direta 2.0?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col p-6 rounded-2xl border border-border bg-card">
                            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 mt-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                                    <ArrowRightIcon className="w-6 h-6 text-muted-foreground/30" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default HowItWorks;
