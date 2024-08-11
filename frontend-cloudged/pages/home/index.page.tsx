import { css } from "../../styled-system/css";
import { Button } from "~/components/ui/button";
import { Box, Flex } from "../../styled-system/jsx";
import { useRouter } from "next/router";
import { Input } from "../../src/components/ui/input";
import { useState, ChangeEvent } from "react";
import api from "utils/api";

// Type to use state
interface User {
  nomeCompleto: string;
  email: string;
}

export default function Home() {
  const [user, setUser] = useState<User>({ nomeCompleto: "", email: "" });
  const router = useRouter();

  const handleGetAllUsers = () => {
    router.push("/users");
  };

  const handleCreateUser = async () => {
    try {
      await api.post("/user", user);
      alert("Usuário cadastrado com sucesso!");
      // Clear input fields
      setUser({ nomeCompleto: "", email: "" });
    } catch (error: any) {
      console.log("error", error);
      alert(
        `Erro ao salvar usuário: ${error.response?.data?.message || "Erro desconhecido"}`
      );
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <h1>Criar usuário</h1>
      <Box
        width="100%"
        maxWidth="400px"
        p="20px"
        bgColor="#f5f5f5"
        borderRadius="8px"
        boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
      >
        <Box mb="20px">
          <Input
            aria-invalid="true"
            name="nomeCompleto"
            value={user.nomeCompleto}
            onChange={handleInputChange}
            placeholder="Nome do Usuário"
            width="100%"
          />
        </Box>
        <Box mb="20px">
          <Input
            aria-invalid="true"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Email do Usuário"
            width="100%"
          />
        </Box>
        <Button onClick={handleCreateUser} width="100%">
          Criar Usuário
        </Button>
      </Box>
      <Box mt="20px">
        <Button onClick={handleGetAllUsers}>
          Listagem de usuários cadastrados
        </Button>
      </Box>
    </Flex>
  );
}
