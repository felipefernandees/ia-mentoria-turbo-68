import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, Users, BookOpen, MessageCircle, Calendar, Target, Handshake } from "lucide-react";
import { ElementType } from "react";
interface FeaturesProps {
  formUrl?: string;
}
type AccordionItemType = {
  icon: ElementType;
  value: string;
  title: string;
  description: string;
};
const Features = ({
  formUrl = "https://yayforms.link/eO45LRV"
}: FeaturesProps) => {
  const accordionItems: AccordionItemType[] = [{
    icon: Users,
    value: "item-1",
    title: "Acompanhamento 1x1",
    description: "3 meses de acompanhamento diretamente comigo, tendo calls semanais de 1 hora"
  }, {
    icon: BookOpen,
    value: "item-2",
    title: "Comunidade Vitalícia",
    description: "Acesso a todos os meus conteúdos gravados, que vão ajudar muito a tirarmos o máximo proveito da mentoria"
  }, {
    icon: MessageCircle,
    value: "item-3",
    title: "Mentorias em Grupo",
    description: "Calls de suporte feitas semanalmente para tirar dúvidas de alunos"
  }, {
    icon: Target,
    value: "item-4",
    title: "Planejamento Personalizado",
    description: "Todo o planejamento da mentoria é feito de acordo com aonde você está hoje e aonde quer chegar"
  }, {
    icon: Calendar,
    value: "item-5",
    title: "Grupo de Networking",
    description: "Contato direto com diversos players do mercado, abrindo possibilidades infinitas de colaborações"
  }, {
    icon: Handshake,
    value: "item-6",
    title: "Indicação para projetos e parcerias",
    description: "A mentoria é uma vitrine, você se empenhando, será prioridade para parcerias"
  }];
  const handleFormClick = () => {
    const urlWithUtm = `${formUrl}?utm_source=lp&utm_medium=cta&utm_campaign=mentoria_ia`;
    window.open(urlWithUtm, '_blank');
  };
  return <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center mb-12">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            O que você vai receber
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {accordionItems.map(({
            icon: Icon,
            value,
            title,
            description
          }) => <AccordionItem key={value} value={value} className="group border border-border rounded-md overflow-hidden transition-all duration-300 bg-muted/30">
                <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 bg-transparent text-left group-data-[state=open]:bg-muted/50 transition-colors hover:bg-muted/40">
                  <div className="flex items-center gap-3 flex-1">
                    <Icon className="w-5 h-5 transition-colors duration-300 text-muted-foreground group-data-[state=open]:text-foreground" />
                    <span className="text-base font-medium text-foreground">
                      {title}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground group-data-[state=open]:text-foreground">
                    {value.replace('item-', '').padStart(2, '0')}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="relative px-4 py-3 text-sm text-foreground border-t border-border bg-muted/20 before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-primary before:opacity-0 group-data-[state=open]:before:opacity-100 transition-all duration-300">
                  {description}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <RainbowButton onClick={handleFormClick} className="text-lg px-8 py-6 bg-slate-50">
            <span className="flex items-center gap-2">
              Quero participar da mentoria
              <ExternalLink className="h-5 w-5" />
            </span>
          </RainbowButton>
        </div>
      </div>
    </section>;
};
export default Features;