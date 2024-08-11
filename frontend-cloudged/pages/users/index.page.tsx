import { Icon } from "../../src/components/ui/icon";
import { Box, Flex } from "../../styled-system/jsx";
import api from "utils/api";
// @ts-ignore
import FaUserTie from "@meronex/icons/fa/FaUserTie";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

// Definindo a interface para o usuário
interface User {
  id: string;
  nomeCompleto: string;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const handleGetAllUsers = async () => {
      try {
        const response = await api.get("/user");
        const sortedUsers = response.data.sort((a: User, b: User) =>
          a.nomeCompleto.localeCompare(b.nomeCompleto)
        );
        setUsers(sortedUsers);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    handleGetAllUsers();
  }, []);

  return (
    <Box p="20px" bgColor="#f9f9f9" minHeight="100vh">
      <Box fontWeight="bold" fontSize="24px" mb="20px" textAlign="center">
        Usuários Cadastrados
      </Box>
      {users.length === 0 ? (
        <Box textAlign="center">
          <Box fontSize="18px" mb="20px">
            Ainda não tem usuários cadastrados.
          </Box>
          <Link href="/">
            <Button>Adicionar Novo Usuário</Button>
          </Link>
        </Box>
      ) : (
        users.map((item) => (
          <Link href={`/user/${item.id}`} key={item.id}>
            <Box
              mb="20px"
              p="20px"
              bgColor="#fff"
              borderRadius="8px"
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
              _hover={{ boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)" }}
              transition="box-shadow 0.3s ease"
            >
              <Flex alignItems="center">
                <Icon fontSize="24px" color="#4A4A4A" mr="15px">
                  <FaUserTie />
                </Icon>
                <Box>
                  <Box fontWeight="bold" fontSize="18px" color="#333">
                    Nome: {item.nomeCompleto}
                  </Box>
                  <Box fontSize="16px" color="#666">
                    Email: {item.email}
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Link>
        ))
      )}
    </Box>
  );
};

export default Users;
