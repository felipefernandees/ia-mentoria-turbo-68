const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-8">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Felipe - Mentoria IA & Automações. Todos os direitos reservados.
          </div>
          
          <div className="text-xs text-muted-foreground/70">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;