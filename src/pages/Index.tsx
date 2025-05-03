
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full min-h-[100vh] overflow-hidden flex items-center justify-center">
        {/* Content with solid background instead of image */}
        <div className="absolute inset-0 z-0 bg-black"></div>
        
        {/* Content */}
        <div 
          className={`relative z-20 max-w-4xl mx-auto text-center px-4 transition-all duration-1000 ease-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Diga não ao cyberbullying. Denuncie. Acolha. Transforme.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Um espaço seguro onde estudantes podem falar, escolas podem agir, e juntos podemos 
            construir um ambiente mais humano e empático.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md"
              onClick={() => navigate('/student-login')}
            >
              Sou um aluno
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-md"
            >
              Sou uma instituição
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="w-full bg-black py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Statistic Card 1 - Removed background image */}
            <div className="statistic-card p-6 rounded-lg flex flex-col items-center text-center bg-black/90">
              <div className="relative z-10">
                <p className="text-2xl font-bold text-primary mb-2">+20%</p>
                <p className="text-sm text-gray-300">DOS ADOLESCENTES JÁ SOFRERAM CYBERBULLYING NA ESCOLA</p>
              </div>
            </div>

            {/* Statistic Card 2 - Removed background image */}
            <div className="statistic-card p-6 rounded-lg flex flex-col items-center text-center bg-black/90">
              <div className="relative z-10">
                <p className="text-2xl font-bold text-primary mb-2">+30%</p>
                <p className="text-sm text-gray-300">RELATAM SENTIR-SE INSEGUROS NAS REDES SOCIAIS</p>
              </div>
            </div>

            {/* Statistic Card 3 - Removed background image */}
            <div className="statistic-card p-6 rounded-lg flex flex-col items-center text-center bg-black/90">
              <div className="relative z-10">
                <p className="text-2xl font-bold text-primary mb-2">+40%</p>
                <p className="text-sm text-gray-300">DOS CASOS NÃO SÃO REPORTADOS POR MEDO</p>
              </div>
            </div>

            {/* Statistic Card 4 - Removed background image */}
            <div className="statistic-card p-6 rounded-lg flex flex-col items-center text-center bg-black/90">
              <div className="relative z-10">
                <p className="text-2xl font-bold text-primary mb-2">+65%</p>
                <p className="text-sm text-gray-300">PRECISAM DE APOIO PSICOLÓGICO APÓS CASOS DE CYBERBULLYING</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full py-16 bg-gradient-to-b from-black to-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossa Missão</h2>
          <p className="text-lg mb-8 text-gray-300">
            Criamos uma plataforma dedicada a combater o cyberbullying nas escolas e universidades, 
            oferecendo ferramentas para denúncia segura e anônima, suporte às vítimas e 
            orientação para instituições implementarem políticas efetivas de prevenção.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md"
            >
              Como denunciar
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-md"
            >
              Recursos para escolas
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 bg-black/80 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">© 2025 Stop Cyberbullying Initiative. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
