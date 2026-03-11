import Container from "../global/container";
import { Button } from "../ui/button";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 bg-background/50">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-4xl font-heading font-medium !leading-snug">
                        Invista menos de R$ 1 por dia na sua carreira
                    </h2>
                </div>

                <div className="max-w-md mx-auto bg-card border border-border rounded-2xl p-8 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-secondary to-primary"></div>

                    <div className="text-center mb-8">
                        <span className="text-4xl font-bold">R$ 29,90</span>
                        <span className="text-muted-foreground">/mês</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                        {[
                            "Acesso a todo o catálogo de marcas parceiras",
                            "Registro ilimitado de vendas",
                            "Painel completo de performance",
                            "Gestão de clientes",
                            "Ranking e recompensas",
                            "Suporte via WhatsApp"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <CheckIcon className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm text-foreground/80">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="space-y-4">
                        <Link href="http://redefigital-frontend.onrender.com/sign-up" className="w-full block">
                            <Button size="lg" className="w-full">
                                Começar agora por R$ 29,90/mês
                            </Button>
                        </Link>
                        <p className="text-xs text-center text-muted-foreground">
                            Sem taxa de adesão. Sem fidelidade. Cancele quando quiser.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Pricing;
