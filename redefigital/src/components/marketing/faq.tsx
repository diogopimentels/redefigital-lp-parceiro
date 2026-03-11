import Container from "../global/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "Preciso ter CNPJ?",
        answer: "Não. Pode se cadastrar como pessoa física mesmo."
    },
    {
        question: "Tenho que comprar estoque?",
        answer: "Não. Você só registra as vendas que fizer. Sem investimento inicial além da mensalidade."
    },
    {
        question: "E se eu não vender nada no mês?",
        answer: "Você paga os R$ 29,90 e mantém o acesso. Não tem multa nem compromisso além da mensalidade."
    },
    {
        question: "Posso cancelar quando quiser?",
        answer: "Sim. Sem burocracia, sem fidelidade."
    },
    {
        question: "Funciona só no computador?",
        answer: "Não. Funciona no celular, tablet e computador. De onde você estiver."
    }
];

const Faq = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-4xl font-heading font-medium !leading-snug">
                        Perguntas que você pode estar se fazendo
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
