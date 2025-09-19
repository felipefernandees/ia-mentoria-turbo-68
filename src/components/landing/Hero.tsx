import { AnimatedHero } from "@/components/ui/animated-hero";

interface HeroProps {
  formUrl?: string;
  whatsappUrl?: string;
  logoUrl?: string;
}

const Hero = ({ 
  formUrl,
  whatsappUrl,
  logoUrl
}: HeroProps) => {
  return (
    <AnimatedHero 
      formUrl={formUrl}
      whatsappUrl={whatsappUrl}
      logoUrl={logoUrl}
    />
  );
};

export default Hero;