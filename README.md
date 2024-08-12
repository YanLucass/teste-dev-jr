# CloudGed - Desafio Técnico Desenvolvedor

## Objetivo do Projeto

Este projeto foi desenvolvido para demonstrar habilidades técnicas em desenvolvimento fullstack, incluindo a criação de um conversor de arquivos e uma aplicação completa com backend e frontend.

## Funcionalidades

### Desafio 1 - Conversor de TXT para XLSX

Este desafio consiste em um script desenvolvido em JavaScript para facilitar a integração com outros projetos. O script converte arquivos `.txt` em arquivos `.xlsx`.

#### Bibliotecas Utilizadas:

- **[Fs (File System)](https://nodejs.org/api/fs.html)**: Módulo nativo do Node.js utilizado para operações de leitura e escrita de arquivos.
- **[xlsx](https://www.npmjs.com/package/xlsx)**: Biblioteca para manipulação de arquivos Excel em JavaScript.

#### ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/en/download/) (Versão 18 ou superior)
- [NPM](https://www.npmjs.com/get-npm)

#### Como Executar

1. Clone o repositório

```bash
git clone https://github.com/YanLucass/teste-dev-jr.git
```

2. Entre no diretório do projeto

```bash
cd teste-dev-jr
```

3. Navegue até o diretório `desafio1` e instale as dependências

```bash
cd desafio1
```

4. Instale as dependencias

```bash
 npm i
```

5. Rode o script

```bash
node index.js
```

## Desafio 2 e 3 - Aplicação Fullstack

### Back-end

Consiste em uma API RESTful para gerenciar usuários, desenvolvida com Nest.js. A API implementa um CRUD completo com suporte aos seguintes verbos HTTP: POST, DELETE, PUT, GET.

#### Bibliotecas usadas:

- **[TypeORM](https://typeorm.io/)**: ORM para facilitar a interação com o banco de dados.
- **[Class-validator](https://github.com/typestack/class-validator)**: Biblioteca para validação de classes, garantindo a integridade dos dados recebidos e enviados pela API.

### Frontend

Interface criada usando Next.js para fornecer uma interface de usuário interativa e responsiva.

#### Bibliotecas usadas:

As seguintes bibliotecas de UI foram escolhidas porque elas são um novo projeto do time Chakra Ui, alinhadas com a nova arquitetura do React Js.

- **[Panda UI](https://panda-css.com/)**: Um framework CSS para criar interfaces bonitas e responsivas.
- **[Panda Theme](https://panda-css.com/docs/customization/theme)**: Sistema de temas para personalização do Panda UI.
- **[Ark UI](https://ark-ui.com/)**: Biblioteca de componentes headless.
- **[Park UI](https://park-ui.com)**: Conjunto de componentes UI estilizados usando ARK UI.
- **[Styled-System](https://styled-system.com/)**: Ferramenta para criar estilos responsivos utilizando funções baseadas em props do sistema de design.

#### ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/en/download/) (Versão 18 ou inferior)
- [NPM](https://www.npmjs.com/get-npm)
- [Docker](https://www.docker.com/) (Docker Compose versão 3:3)

### Como executar

O .env está configurado para conexão com o banco de dados, e propositalmente não incluído no .gitignore para facilitar a avaliação do projeto.

Para facilitar o processo de execução, um script de automação foi incluído para sistemas Linux. Siga as instruções abaixo para executar o projeto em diferentes ambientes:

#### Em Sistemas Linux

1. Clone o repositório (Caso não tenha clonado)

```bash
git clone https://github.com/YanLucass/teste-dev-jr.git
```

2. Entre no diretório do projeto

- Caso você se encontre na pasta desafio1

```bash
cd ..
```

- Execute o seguinte comando no diretório teste-dev-jr:

```bash
 ./start-projects.sh
```

- O front-end estará disponível nesse link:

```bash
http://localhost:3000
```

- Para acessar o backend será usada esse link (Definido na main.ts do diretório backend)

```bash
http://localhost:8080
```

### Em outros sistemas

Caso esteja usando outro sistema operacional, segue o passo a passo:

### Executar backend

1. Clone o repositório (Caso não tenha clonado)

```bash
git clone https://github.com/YanLucass/teste-dev-jr.git
```

2. Entre no diretório do projeto

```bash
cd teste-dev-jr
```

3. Navegue até o diretório backend-cloudged

```bash
cd backend-cloudged
```

4. Instale as dependências

```bash
npm i
```

5. Execute o script

```bash
npm run dev
```

- Para acessar o backend será usada esse link (Definido na main.ts do diretório backend.)

```bash
http://localhost:8080
```

### Executar frontend

1. Entre no diretório do projeto

```bash
cd teste-dev-jr
```

3. Navegue até o diretório frontend-cloudged

```bash
cd frontend-cloudged
```

4. Rode o script

```bash
npm run dev
```

- O front-end estará disponível nesse link:

```bash
http://localhost:3000
```

## Rotas da aplicação

- **`POST url/`**: Cria um novo usuário.

- Utilize esse payload: </br>

  ```json
  {
    "nomeCompleto": "Yan Lucas Carvalho Ferreira",
    "email": "yanlucas@cloudged.com"
  }
  ```

- **`GET url/users`**: Lista todos os usuários.

- **`PUT url/user/:id`**: Atualiza um usuário existente.
- Utilize esse payload: </br>
  ```json
  {
    "nomeCompleto": "Yan Lucas Carvalho Ferreira",
    "email": "yanlucas@cloudged.com"
  }
  ```
- **`DELETE /url/user/:id`**: Remove um usuário existente.
