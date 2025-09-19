import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";
const Guarantee = () => {
  return <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Garantia de resultado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eu acredito tanto no meu método que assumo todo o risco por você
          </p>
        </div>

        <Card className="border border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm shadow-card hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Icon and title */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-3xl mb-6 border border-primary/20">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Sem risco:
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Aplique todos os ensinamentos da mentoria
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Execute as atividades combinadas
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Comprove que seguiu o método
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Guarantee text */}
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                  Se você aplicar tudo o que eu te mostrar e não tiver resultados,{" "}
                  <span className="font-bold text-indigo-600">
                    eu te coloco para trabalhar comigo.
                  </span>
                </p>
                
                
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default Guarantee;