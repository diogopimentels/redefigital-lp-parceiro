import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "../global/container";

const CtaConsultora = () => {
    return (
        <Container className="py-20">
            <div className="bg-background border rounded-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Junte-se à nova era das vendas!</h2>
                        <p className="text-muted-foreground mt-4">Aposente o caderninho, o fiado e as dores de cabeça. Profissionalize seu trabalho e comece a escalar seus lucros agora.</p>
                    </div>
                    <div className="text-center md:text-right">
                        {/* TODO: Adicione o link para o seu aplicativo aqui */}
                        <Link href="http://app.redefigital.com.br/consultant/sign-up">
                            <Button size="lg">Criar minha conta profissional</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CtaConsultora;
