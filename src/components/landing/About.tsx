import { Card, CardContent } from "@/components/ui/card";
import { ProfileCard } from "@/components/ui/profile-card";

interface AboutProps {
  photoUrl?: string;
}

const About = ({ 
  photoUrl = "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/vwoBjECp5ipKWax7E7Gt42l1zmqsz3wr_43b6cdfd7991b37fde614d8004d3f77c99456fc62980769465cbb17abf7c0463.jpeg"
}: AboutProps) => {

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quem vai te acompanhar
          </h2>
        </div>

        <ProfileCard
          name="Felipe"
          title="Especialista em IA e Automações"
          description="Vivo do mercado de IA e automações há 1 ano. Antes, eu era estagiário de infraestrutura de TI ganhando R$1.000/mês. Em 12 meses, faturei mais de R$170.000 com IA. Agora, ensino o caminho para você construir seu negócio surfando a maior onda do digital."
          imageUrl={photoUrl}
          youtubeUrl="https://www.youtube.com/@FelipeFernandesT"
        />
        
      </div>
    </section>
  );
};

export default About;