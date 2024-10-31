# Teste Técnico Full-Stack Multipedidos

## Sistema de Reserva e Menu de Restaurante

### 📋 Descrição

Você foi encarregado de desenvolver um sistema de reserva e consulta de cardápio para um restaurante. O foco principal deste desafio é no desenvolvimento tanto do front-end quanto do back-end, permitindo que você demonstre suas habilidades com as tecnologias utilizadas pela nossa equipe.

### Funcionalidades Requeridas

1. **Consulta de Cardápio**:
    - O usuário pode visualizar o cardápio do restaurante, que está dividido em categorias (entradas, pratos principais, sobremesas e bebidas).
    - Cada item do cardápio deve conter nome, descrição e preço.
2. **Reserva de Mesa**:
    - O usuário pode fazer uma reserva de mesa no restaurante, informando seu nome, número de pessoas e a data/hora desejada.

---

Desafios Enfrentados
Durante o desenvolvimento, enfrentei alguns desafios que não consegui superar completamente:

Imagens do Cardápio: Tentei incluir imagens para cada item do cardápio, mas optei por usar uma imagem padrão por dificuldades técnicas.
Testes Automatizados: Gostaria de ter implementado mais testes automatizados, especialmente usando Jest, pois estou aprendendo a utilizar essa ferramenta.
Documentação da API: Não consegui documentar a API no Swagger, o que é uma funcionalidade que eu gostaria de ter implementado.
Layout do Front-End: Também gostaria de ter dedicado mais tempo ao layout do front-end para aprimorar a usabilidade e a aparência geral.
Testes no Front-End: Realizar testes no front-end foi um aspecto que não consegui aprofundar tanto quanto gostaria.


### 📦 Pré-requisitos

Liste de pré-requisitos necessários para que o projeto seja executado com sucesso:

- **Node.js** - Versão v18.18.0 ou superior.
- **npm** - Versão 9.5.1 ou superior.
- **Docker** - Versão recomendada (opcional, mas recomendado para o banco de dados).

### 🛠️ Instalação

Siga os passos abaixo para instalar e configurar a aplicação em um ambiente local:

📥 Clone o repositório:

    - git clone https://github.com/LeonardoAlbano/delivery-api
    ou a CLI 

    gh repo clone git@github.com:LeonardoAlbano/delivery-api.git


📂 Navegue para o diretório do projeto:

    cd. /delivery-api

📦 Instale as dependências:

    npm install / pnpm run dev
    ou
    npm i / pnpm run dev

▶️ Inicie o servidor:

front-end:
    pnpm run dev

back-end:
    npm run dev
    npx prisma db seed - para os cardápio
    npx prisma studio - para mostrar o db na web.
    npm run test:dev - para rodar os test em jest


💻 Tecnologias Utilizadas
Foram utilizadas as seguintes tecnologias:

Front-end
 - React + Vite
 - TypeScript
 - react-dom
 - React Router DOM
 - Axios
 - @tanstack/react-query
 - Zod
 - Tailwind CSS
 - Radix UI
 - Date-fns
 - Lucide React
 - Sonner

Back-end
 - Node.js
 - Express
 - Prisma
 - Zod
 - JWT (Json Web Token)
 - Bcrypt
 - Cors
 - Supertest (para testes)
 - Jest (para testes)


🔧 Passo a Passo para Instalação de Ferramentas
Instalar Node.js:

Acesse nodejs.org e faça o download da versão LTS recomendada.
Siga as instruções de instalação para o seu sistema operacional.
Instalar Docker (opcional):

Acesse docker.com e faça o download da versão adequada para o seu sistema operacional.
Siga as instruções de instalação.
Verificar a Instalação:

Para verificar se o Node.js e o npm foram instalados corretamente, execute os seguintes comandos no terminal:
bash
Copiar código
node -v
npm -v

Para verificar se o Docker está instalado, execute:
bash
Copiar código
docker --version

📄 Licença
Esse projeto está sob a licença ISC. Consulte o arquivo LICENSE para mais detalhes.

markdown
Copiar código

### Notas:
- **Substitua `leonardoalbano` e `https://github.com/LeonardoAlbano/delivery-api`** pelos nomes corretos do seu GitHub.
- Você pode adicionar mais detalhes ou seções conforme necessário, como informações sobre contribuições, como executar testes, etc.
- Sinta-se à vontade para ajustar o conteúdo conforme necessário!
