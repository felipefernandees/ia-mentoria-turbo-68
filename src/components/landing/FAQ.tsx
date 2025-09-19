import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

interface FAQProps {
  formUrl?: string;
}

const FAQ = ({ 
  formUrl = "https://yayforms.link/eO45LRV"
}: FAQProps) => {
  const faqs = [
    {
      question: "Preciso saber programar?",
      answer: "Não. Você vai aprender o necessário para implementar fluxos práticos sem precisar de conhecimento técnico avançado."
    },
    {
      question: "Funciona para qualquer nicho?",
      answer: "Sim. A metodologia se adapta para serviços, infoprodutos e negócios locais. Você aprenderá a aplicar IA em qualquer segmento."
    },
    {
      question: "Qual a duração da mentoria?",
      answer: "3 meses de acompanhamento direto comigo + acesso vitalício à comunidade e todos os conteúdos gravados."
    },
    {
      question: "E se eu não tiver tempo todo dia?",
      answer: "Planejamento semanal com metas realistas e todos os encontros gravados. Você estuda no seu ritmo."
    },
    {
      question: "Quando posso começar?",
      answer: "Assim que sua aplicação for aprovada e o pagamento confirmado. O início é imediato."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Se você aplicar tudo que eu ensinar e não tiver resultados, eu te coloco para trabalhar comigo."
    }
  ];

  const handleFormClick = () => {
    const urlWithUtm = `${formUrl}?utm_source=lp&utm_medium=cta&utm_campaign=mentoria_ia`;
    window.open(urlWithUtm, '_blank');
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Tire suas dúvidas sobre a mentoria
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-8 px-8">
            <RainbowButton 
              className="text-lg px-8 py-6"
              onClick={handleFormClick}
            >
              <span className="flex items-center gap-2">
                Quero participar da mentoria
                <ExternalLink className="h-5 w-5" />
              </span>
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;