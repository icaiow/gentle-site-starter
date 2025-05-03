
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EyeIcon } from "lucide-react";

const StudentRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic
    console.log("Registration attempt with:", { name, email, gender });
    // Navigate to login after registration
    navigate('/student-login');
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-background text-foreground overflow-x-hidden">
      {/* Left section with image */}
      <div className="w-full sm:w-1/2 bg-gray-300 flex items-center justify-center p-8 relative">
        <div className="absolute inset-0 bg-gray-400/20 z-0"></div>
        <div className="relative z-10 text-center text-white max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            Você não está sozinho. Estamos aqui para ouvir e apoiar.
          </h2>
        </div>
      </div>

      {/* Right section with registration form */}
      <div className="w-full sm:w-1/2 bg-[#162259] flex items-center justify-center p-8">
        <div className="w-full max-w-md border-2 border-blue-400 rounded-md p-8">
          <h1 className="text-2xl font-bold text-center mb-2">Cadastre uma conta</h1>
          <p className="text-sm text-center text-gray-300 mb-8">
            Toda mudança começa com um passo. Se cadastre e prepare ações transformadoras.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Nome da Instituição"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white text-black"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="exemplo@instituicao.edu.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black"
                required
              />
            </div>
            
            <div>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="bg-white text-black">
                  <SelectValue placeholder="Sexo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="feminino">Feminino</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <p className="text-xs text-gray-300 mt-4">
              Ao criar uma conta, você concordará com nossa Política de Privacidade e Política de Comunicação Eletrônica.
            </p>

            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
            >
              Cadastre
            </Button>

            <p className="text-center text-sm text-gray-300 mt-4">
              Possui uma conta? <a href="/student-login" className="text-blue-400 hover:underline">Entrar</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;
