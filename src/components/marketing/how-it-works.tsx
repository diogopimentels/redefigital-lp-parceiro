import Container from "../global/container";
import { ArrowRightIcon } from "lucide-react";

const steps = [
    {
        title: "Assine por R$ 29,90/mês",
        description: "Menos que um lanche por semana. Sem taxa de adesão, sem pegadinha."
    },
    {
        title: "Acesse o catálogo completo",
        description: "Navegue por centenas de produtos de várias marcas. Escolha o que faz sentido pro seu público."
    },
    {
        title: "Mostre pros seus clientes e venda",
        description: "Use o catálogo digital, mande pelo WhatsApp, mostre pessoalmente. Do jeito que você já vende hoje."
    },
    {
        title: "Registre a venda na plataforma",
        description: "Leva menos de 30 segundos. A comissão já fica registrada automaticamente."
    },
    {
        title: "Acompanhe seus ganhos em tempo real",
        description: "Entre no app e veja quanto você já faturou, quantas vendas fez e qual sua posição no ranking."
    }
];

const HowItWorks = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl font-heading font-medium !leading-snug">
                        Como funciona na prática?
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
