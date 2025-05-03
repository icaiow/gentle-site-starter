
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-background text-foreground overflow-x-hidden">
      {/* Left section with supporting hand image */}
      <div className="w-full sm:w-1/2 bg-gray-300 flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-gray-400/20 z-0"></div>
        <div className="relative z-10 text-center text-white max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            Você não está sozinho. Estamos aqui para ouvir e apoiar.
          </h2>
        </div>
      </div>

      {/* Right section with login form */}
      <div className="w-full sm:w-1/2 bg-[#162259] flex items-center justify-center p-8">
        <div className="w-full max-w-md border-2 border-blue-400 rounded-md p-8">
          <h1 className="text-2xl font-bold text-center mb-2">Entre com uma conta</h1>
          <p className="text-sm text-center text-gray-300 mb-8">
            Tudo mantemos começo com um passo. Seu apoio e sua palavra podem transformar.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="exemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black"
                required
              />
            </div>
            
            <div className="relative">
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white text-black pr-10"
                required
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => console.log("Toggle password visibility")}
              >
                <Eye size={18} />
              </button>
            </div>

            <p className="text-xs text-center text-gray-300 mt-4">
              Ao criar uma conta, você concordará com nossa Política de Privacidade e Política de Comunicação Eletrônica.
            </p>

            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
            >
              Entrar
            </Button>

            <p className="text-center text-sm text-gray-300 mt-4">
              Não possui uma conta? <Link to="/student-register" className="text-blue-400 hover:underline">Cadastrar</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
