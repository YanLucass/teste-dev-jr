import { Button } from "./ui/button";
import { Box, Flex } from "../../styled-system/jsx";
import Link from "next/link";

interface TopMenuProps {
  backLink: string;
  voltar?: boolean;
}

const TopMenu: React.FC<TopMenuProps> = ({ backLink, voltar = true }) => {
  return (
    <Flex
      mb="20px"
      py="3px"
      px="3px"
      justifyContent="space-between"
      borderBottom="1px solid"
      borderColor="gray.300"
    >
      {voltar ? (
        <Link href={backLink}>
          <Button size="xs" variant="outline">
            Voltar
          </Button>
        </Link>
      ) : (
        <Box></Box>
      )}

      <Flex>
        <Link href="/">
          <Button size="xs" variant="outline" mr="10px">
            Cadastrar
          </Button>
        </Link>
        <Link href="/users">
          <Button size="xs" variant="outline">
            Listagem
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default TopMenu;
