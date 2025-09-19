import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

interface SocialProofProps {
  formUrl?: string;
  caseImages?: string[];
}

const SocialProof = ({ 
  formUrl = "https://yayforms.link/eO45LRV",
  caseImages = [
    "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/WlGrPrsEYz9lZMQwD583r4r0SgMOZcs0_32b682f996cc63c1557dd6cc16a280c93b69a389a71b50a1051a7d3965caea3e.jpeg"
  ]
}: SocialProofProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Dados dos casos de sucesso
  const cases = [
    { 
      image: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/WlGrPrsEYz9lZMQwD583r4r0SgMOZcs0_32b682f996cc63c1557dd6cc16a280c93b69a389a71b50a1051a7d3965caea3e.jpeg", 
      legend: "Projeto vendido por R$9.000 + R$3.600/mês" 
    },
    { 
      image: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/GGLrQG9JWpXFVtb6UkzCTLrL0R4rmWew_62199a4acbd6797dcff9a8057eb78afcca177c8debb308367edb8b634d09396e.jpeg", 
      legend: "Primeiro projeto vendido por R$6.000" 
    },
    { 
      image: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/uQzFVd24RWVj2OIVwtx8v6BckaieCXy7_5f2f9158af9aaa9ef9d6ed1dca415dfdeffe8a00a99ca3cb417b966bbf33f013.jpeg", 
      legend: "Feedback diretamente da comunidade" 
    },
  ];

  const handleFormClick = () => {
    const urlWithUtm = `${formUrl}?utm_source=lp&utm_medium=cta&utm_campaign=mentoria_ia`;
    window.open(urlWithUtm, '_blank');
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados reais de alunos
          </h2>
          <p className="text-xl text-muted-foreground">
            Alguns prints enviados por quem aplicou o método.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cases.map((case_, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-4 shadow-card border-border/50">
                    <CardContent className="p-0">
                      <div className="aspect-[4/5] bg-card rounded-lg overflow-hidden">
                        <img 
                          src={case_.image}
                          alt={case_.legend}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23374151'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%23fff' font-size='16'%3EResultado de Aluno%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-lg font-semibold text-center">
                          {case_.legend}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-card transition-smooth"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-card/80 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-card transition-smooth"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <ShinyButton 
            className="px-8 py-4"
            onClick={handleFormClick}
          >
            <span className="flex items-center gap-2">
              Aplicar para a mentoria
              <ExternalLink className="h-4 w-4" />
            </span>
          </ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;