import { useEffect } from "react";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import Features from "@/components/landing/Features";
import Roadmap from "@/components/landing/Roadmap";
import Guarantee from "@/components/landing/Guarantee";
import About from "@/components/landing/About";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyBar from "@/components/landing/StickyBar";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const Mentoria = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = "Mentoria 1x1 de IA e Automações — com Felipe";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Saia do CLT e comece a viver de IA. Mentoria 1x1 com 3 meses de acompanhamento, comunidade vitalícia e trilha prática de n8n. Aplique agora.');
    }

    // Add Open Graph meta tags
    const addMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    addMetaTag('og:title', 'Mentoria 1x1 de IA e Automações — com Felipe');
    addMetaTag('og:description', 'Saia do CLT e comece a viver de IA. Mentoria 1x1 com 3 meses de acompanhamento, comunidade vitalícia e trilha prática de n8n. Aplique agora.');
    addMetaTag('og:type', 'website');
    addMetaTag('og:image', 'https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/vwoBjECp5ipKWax7E7Gt42l1zmqsz3wr_43b6cdfd7991b37fde614d8004d3f77c99456fc62980769465cbb17abf7c0463.jpeg');
    
    // Twitter Card meta tags
    const addTwitterTag = (name: string, content: string) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    addTwitterTag('twitter:card', 'summary_large_image');
    addTwitterTag('twitter:title', 'Mentoria 1x1 de IA e Automações — com Felipe');
    addTwitterTag('twitter:description', 'Saia do CLT e comece a viver de IA. Mentoria 1x1 com 3 meses de acompanhamento, comunidade vitalícia e trilha prática de n8n. Aplique agora.');
    addTwitterTag('twitter:image', 'https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/vwoBjECp5ipKWax7E7Gt42l1zmqsz3wr_43b6cdfd7991b37fde614d8004d3f77c99456fc62980769465cbb17abf7c0463.jpeg');

    // Add structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Mentoria 1x1 de IA e Automações",
      "description": "Mentoria individual para sair do CLT e começar a viver de IA e automações em poucos meses",
      "provider": {
        "@type": "Person",
        "name": "Felipe",
        "image": "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/vwoBjECp5ipKWax7E7Gt42l1zmqsz3wr_43b6cdfd7991b37fde614d8004d3f77c99456fc62980769465cbb17abf7c0463.jpeg"
      },
      "courseMode": "online",
      "educationalLevel": "Beginner to Advanced",
      "teaches": ["Inteligência Artificial", "Automações", "n8n", "Vendas com IA"],
      "timeRequired": "P3M"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Configuration object with all URLs and assets
  const config = {
    formUrl: "https://yayforms.link/eO45LRV",
    whatsappUrl: "https://wa.me/5528999282371",
    logoUrl: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/ArHVQ67NlBHWq4JPzNmMqaMWGCaqESe1_6196f0ae6c4b05f279f448d89416e1373fd391f971e57631d16b58e8f6215b17.png",
    photoUrl: "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/vwoBjECp5ipKWax7E7Gt42l1zmqsz3wr_43b6cdfd7991b37fde614d8004d3f77c99456fc62980769465cbb17abf7c0463.jpeg",
    caseImages: [
      "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/WlGrPrsEYz9lZMQwD583r4r0SgMOZcs0_32b682f996cc63c1557dd6cc16a280c93b69a389a71b50a1051a7d3965caea3e.jpeg"
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.05}
        duration={3}
        repeatDelay={1}
        className="absolute inset-0 z-0 fill-muted-foreground/10 stroke-muted-foreground/10"
      />
      
      <div className="relative z-10">
        <Hero 
          formUrl={config.formUrl}
          whatsappUrl={config.whatsappUrl}
          logoUrl={config.logoUrl}
        />
        
        <SocialProof 
          formUrl={config.formUrl}
          caseImages={config.caseImages}
        />
        
        <Features formUrl={config.formUrl} />
        
        <Roadmap formUrl={config.formUrl} />
        
        <Guarantee />
        
        <About photoUrl={config.photoUrl} />
        
        <FAQ formUrl={config.formUrl} />
        
        <FinalCTA formUrl={config.formUrl} />
        
        <Footer />
      </div>
      
      <StickyBar formUrl={config.formUrl} />
    </div>
  );
};

export default Mentoria;