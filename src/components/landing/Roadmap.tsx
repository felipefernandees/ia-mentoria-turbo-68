import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { RoadmapCard } from "@/components/ui/roadmap-card";
import { ExternalLink } from "lucide-react";

interface RoadmapProps {
  formUrl?: string;
}

const Roadmap = ({ 
  formUrl = "https://yayforms.link/eO45LRV"
}: RoadmapProps) => {
  const roadmapItems = [
    {
      quarter: "Fase 1",
      title: "Preparação Técnica",
      description: "Onboarding completo, configuração VPS e primeiro agente de IA",
      status: "done" as const
    },
    {
      quarter: "Fase 2", 
      title: "Construção de Projeto",
      description: "Escolha do nicho e desenvolvimento do primeiro projeto",
      status: "in-progress" as const
    },
    {
      quarter: "Fase 3",
      title: "Estratégia de Vendas", 
      description: "Posicionamento, Instagram para vendas e proposta comercial",
      status: "upcoming" as const
    },
    {
      quarter: "Fase 4",
      title: "Entrega e Escala",
      description: "Modelo de entrega validado e eficiência operacional",
      status: "upcoming" as const
    }
  ];

  const handleFormClick = () => {
    const urlWithUtm = `${formUrl}?utm_source=lp&utm_medium=cta&utm_campaign=mentoria_ia`;
    window.open(urlWithUtm, '_blank');
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sua jornada dentro da mentoria
          </h2>
          <p className="text-xl text-muted-foreground">
            Três pilares para sair do zero ao faturamento com IA.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="flex justify-center mb-12">
          <RoadmapCard
            title="Sua jornada dentro da mentoria" 
            description="Três pilares para sair do zero ao faturamento com IA."
            items={roadmapItems}
          />
        </div>

        {/* Central CTA */}
        <div className="text-center">
          <ShinyButton 
            className="text-xl px-10 py-8"
            onClick={handleFormClick}
          >
            <span className="flex items-center gap-2">
              Aplicar agora
              <ExternalLink className="h-6 w-6" />
            </span>
          </ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;