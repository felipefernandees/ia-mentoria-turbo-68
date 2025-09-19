// Página inicial que redireciona para a landing page da mentoria
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona automaticamente para a landing page da mentoria
    navigate('/mentoria-ia', { replace: true });
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Redirecionando...</h1>
        <p className="text-xl text-muted-foreground">Você será redirecionado para a mentoria de IA</p>
      </div>
    </div>
  );
};

export default Index;
