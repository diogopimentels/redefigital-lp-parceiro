import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "../global/container";

const Cta = () => {
    return (
        <Container className="py-20">
            <div className="bg-background border rounded-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Pronto para escalar suas vendas?</h2>
                        <p className="text-muted-foreground mt-4">Junte-se à Redefigital e conecte sua marca a milhares de consultoras em todo o Brasil.</p>
                    </div>
                    <div className="text-center md:text-right">
                        {/* TODO: Adicione o link para o seu aplicativo aqui */}
                        <Link href="https://app.redefigital.com.br/partner/sign-up">
                            <Button size="lg">Começar agora</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Cta;