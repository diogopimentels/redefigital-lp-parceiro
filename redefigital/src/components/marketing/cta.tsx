import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "../global/container";

const Cta = () => {
    return (
        <Container className="py-20">
            <div className="bg-background border rounded-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Pronto para revolucionar seu faturamento?</h2>
                        <p className="text-muted-foreground mt-4">Junte-se à inovação do mercado B2B2C e coloque sua marca no maior canal de vendas diretas do Brasil. Entre para a era FIGITAL (Físico + Digital): o relacionamento físico escalando seus resultados no digital.</p>
                    </div>
                    <div className="text-center md:text-right">
                        {/* TODO: Adicione o link para o seu aplicativo aqui */}
                        <Link href="http://app.redefigital.com.br/partner/sign-up">
                            <Button size="lg">Começar agora</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Cta;