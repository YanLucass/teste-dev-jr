import { Button } from "~/components/ui/button";
import { IconButton } from "../../src/components/ui";
import { Box, Flex } from "../../styled-system/jsx";
import { Input } from "../../src/components/ui/input";
import { Icon } from "../../src/components/ui/icon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FaUserTie from "@meronex/icons/fa/FaUserTie";
// @ts-ignore
import RiEdit2Fill from "@meronex/icons/ri/RiEdit2Fill";
// @ts-ignore
import RiDeleteBinFill from "@meronex/icons/ri/RiDeleteBinFill";
import api from "../../utils/api";

interface User {
  nomeCompleto: string;
  email: string;
}

export default function User() {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/user/${router?.query?.id}`);
        if (response.data) {
          setUser(response.data);
        } else {
          router.push("/404");
        }
      } catch (error) {
        router.push("/404"); // Redireciona para uma página de erro 404 se ocorrer um erro
      }
    };

    if (router.isReady) {
      fetchUser();
    }
  }, [router.isReady]);

  if (!user) {
    return <p>Carregando...</p>;
  }

  const handlerDeleteUser = async () => {
    if (confirm("Você realmente deseja deletar?")) {
      try {
        await api.delete(`/user/${router?.query?.id}`);
        alert("Usuário deletado com sucesso!");
        router.push("/users");
      } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        alert("Erro ao deletar usuário.");
      }
    }
  };

  const handlerEditUser = () => {
    setIsEditing(true);
  };

  const fetchEditUser = async () => {
    try {
      await api.put(`/user/${router?.query?.id}`, user);
      alert("Usuário atualizado com sucesso!");
      setIsEditing(false);
    } catch (error: any) {
      console.error("Erro ao atualizar usuário:", error);
      alert(
        `Erro ao salvar usuário: ${error.response?.data?.message || "Erro desconhecido"}`
      );
    }
  };

  return (
    <Box
      p="20px"
      mb="20px"
      bg="#f0f0f0"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        p="20px"
        bg="white"
        borderRadius="8px"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        maxWidth="600px"
        width="100%"
      >
        <Flex alignItems="center" mb="20px">
          <Icon>
            <FaUserTie />
          </Icon>
          <Box ml="15px">
            <Box fontSize="20px" fontWeight="bold">
              Usuário
            </Box>
          </Box>
        </Flex>

        <Flex direction="column" mb="20px">
          <Box fontSize="15px" mb="5px">
            Nome:
          </Box>
          <Input
            disabled={!isEditing}
            bg="white"
            _disabled={{
              bg: "none",
              color: "black",
              opacity: "1",
              border: "0px",
              cursor: "pointer",
            }}
            aria-invalid="true"
            value={user?.nomeCompleto || ""}
            onChange={(e) =>
              setUser({ ...user!, nomeCompleto: e.target.value })
            }
            placeholder="Digite o nome completo do Usuário"
          />
        </Flex>

        <Flex direction="column" mb="20px">
          <Box fontSize="15px" mb="5px">
            Email:
          </Box>
          <Input
            disabled={!isEditing}
            bg="white"
            _disabled={{
              bg: "none",
              color: "black",
              opacity: "1",
              border: "0px",
              cursor: "pointer",
            }}
            aria-invalid="true"
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user!, email: e.target.value })}
            placeholder="Digite o email do Usuário"
          />
        </Flex>

        <Flex justifyContent="flex-end" mt="20px">
          {isEditing ? (
            <Flex>
              <Button onClick={fetchEditUser} mr="10px">
                Enviar
              </Button>
              <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
            </Flex>
          ) : (
            <Flex>
              <IconButton mr="10px" onClick={handlerEditUser}>
                <RiEdit2Fill />
              </IconButton>
              <IconButton onClick={handlerDeleteUser}>
                <RiDeleteBinFill />
              </IconButton>
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
