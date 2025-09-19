import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ExternalLink } from "lucide-react";

interface FinalCTAProps {
  formUrl?: string;
}

const FinalCTA = ({ 
  formUrl = "https://yayforms.link/eO45LRV"
}: FinalCTAProps) => {
  const handleFormClick = () => {
    const urlWithUtm = `${formUrl}?utm_source=lp&utm_medium=cta&utm_campaign=mentoria_ia`;
    window.open(urlWithUtm, '_blank');
  };

  return (
    <section className="py-20 px-4 gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Pronto para <span className="text-gradient">acelerar com IA</span>?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Não perca mais tempo estudando teoria. Aplique direto o que funciona e comece a faturar com IA em poucos meses.
        </p>
        
        <ShinyButton 
          className="text-xl px-12 py-8"
          onClick={handleFormClick}
        >
          <span className="flex items-center gap-3">
            Aplicar para a mentoria agora
            <ExternalLink className="h-6 w-6" />
          </span>
        </ShinyButton>
        
        <div className="mt-8 text-sm text-muted-foreground">
          Vagas limitadas • Processo seletivo • Início imediato
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;