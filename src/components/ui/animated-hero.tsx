import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
interface AnimatedHeroProps {
  formUrl?: string;
  whatsappUrl?: string;
  logoUrl?: string;
}
function AnimatedHero({
  formUrl = "https://yayforms.link/eO45LRV",
  whatsappUrl = "https://wa.me/5528999282371",
  logoUrl = "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/ArHVQ67NlBHWq4JPzNmMqaMWGCaqESe1_6196f0ae6c4b05f279f448d89416e1373fd391f971e57631d16b58e8f6215b17.png"
}: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["IA", "Automações", "N8N", "SAAS"], []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  const handleFormClick = () => {
    const urlWithUtm = `${formUrl}?utm_source=lp&utm_medium=cta&utm_campaign=mentoria_ia`;
    window.open(urlWithUtm, '_blank');
  };
  return <div className="w-full min-h-screen flex items-center justify-center gradient-hero">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          {/* Logo */}
          {logoUrl && <div className="mb-4">
              <img src={logoUrl} alt="Logo" className="h-16 w-auto" onError={e => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }} />
            </div>}


          {/* Animated Title */}
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
              <span className="text-foreground">Saia da CLT e viva de</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => <motion.span key={index} className="absolute font-semibold text-gradient" initial={{
                opacity: 0,
                y: "-100"
              }} transition={{
                type: "spring",
                stiffness: 50
              }} animate={titleNumber === index ? {
                y: 0,
                opacity: 1
              } : {
                y: titleNumber > index ? -150 : 150,
                opacity: 0
              }}>
                    {title}
                  </motion.span>)}
              </span>
              <span className="text-foreground">em poucos meses</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center">
              Entre para a minha mentoria 1x1 e poupe 1 ano de estudos aplicando direto o que funciona. 
              Acompanhamento personalizado, comunidade vitalícia e trilha prática de n8n.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <RainbowButton className="text-lg px-8 py-6" onClick={handleFormClick}>
              <span className="flex items-center gap-2">
                Quero participar da mentoria <MoveRight className="w-4 h-4" />
              </span>
            </RainbowButton>
            <Button size="lg" className="gap-4" variant="outline" onClick={() => window.open(whatsappUrl, '_blank')}>
              Falar no WhatsApp <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>;
}
export { AnimatedHero };