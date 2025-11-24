import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "../global/container";

const CtaConsultora = () => {
    return (
        <Container className="py-20">
            <div className="bg-background border rounded-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Conecte, venda e cresça!</h2>
                        <p className="text-muted-foreground mt-4">Junte-se às consultoras que estão usando dados para vender mais. Profissionalize sua operação hoje mesmo.</p>
                    </div>
                    <div className="text-center md:text-right">
                        {/* TODO: Adicione o link para o seu aplicativo aqui */}
                        <Link href="http://app.redefigital.com.br/sign-up">
                            <Button size="lg">Criar minha conta profissional</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CtaConsultora;
