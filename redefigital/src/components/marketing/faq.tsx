import Container from "../global/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "Preciso ter CNPJ para vender?",
        answer: "Não! Você pode começar hoje mesmo usando apenas o seu CPF."
    },
    {
        question: "Tenho que comprar kit inicial ou estoque?",
        answer: "Nunca mais. Você só vende usando nosso catálogo digital. Seu único custo é a assinatura da plataforma."
    },
    {
        question: "E se eu ficar um mês sem vender?",
        answer: "Fique tranquilo. Você paga a mensalidade de R$ 29,90 e mantém sua estrutura rodando. Não cobramos multa por falta de vendas."
    },
    {
        question: "O cancelamento é fácil?",
        answer: "Sim. Direto pelo aplicativo, sem pegadinhas ou atendentes insistentes."
    },
    {
        question: "Preciso de computador?",
        answer: "De jeito nenhum. O aplicativo foi desenhado para rodar perfeito e rápido no seu celular."
    }
];

const Faq = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-4xl font-heading font-medium !leading-snug">
                        Dúvidas sobre o novo modelo de vendas?
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto w-full">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Container>
        </div>
    );
};

export default Faq;
