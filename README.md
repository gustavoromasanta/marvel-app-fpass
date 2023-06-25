### Candidato
Gustavo Roma
Whatsapp (21) 98222-3622
Linkedin (https://www.linkedin.com/in/gustavoroma/)

# MARVEL APP Fpass:
Este projeto tem como objetivo consumir a [API da MARVEL](https://developer.marvel.com/) disponibilizando os dados em telas por meio de um projeto React. Para realizar as requisições foi utilizado o pacote axios.

## Visite o site :link:

A aplicação pode ser visitada a qualquer momento pelo link: [https://marvel-app-alpha.vercel.app/](https://marvel-app-alpha.vercel.app/)

Publicação realizada no [Vercel](https://vercel.com/).

## Sobre o projeto

A página inicial lista os personagens, é possível caminhar entre as paginações.

Acima da paginação, exibe a quantidade exibida na página e a quantidade total de personagens.

No header, é possível fazer busca por personagens.

Ao clicar no card de um personagem você será redirecionado para a página que detalha o respectivo personagem. Lá será possível visualizar mais informações, logo abaixo existe uma lista de quadrinhos em que o personagem teve sua participação.

### Tecnologias utilizadas
- [React](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)


### Instalação do projeto

Node version 18.16.1

Após clonar o projeto do [repositório Github](https://github.com/gustavoromasanta/marvel-app-fpass), navegue até a raiz e execute o seguinte comando no terminal:

Este comando irá instalar todas as dependências necessárias do projeto.
```BASH
yarn
```

Após a instalação das depências, podemos utilizar alguns comando disponíveis.

### :construction: Ambiente de desenvolvimento
Executar o projeto em ambiente local de desenvolvimento.
```BASH
yarn dev
```

### :wrench: Build do projeto
Para realizar o build do projeto.
```BASH
yarn build
```

## Estrutura de diretórios do projeto

### src
Este diretório armazena todo o código desenvolvido ou seja, lógica da aplicação, componentes, páginas, rotas, serviços e etc.

### components/elements
Contém apenas componentes estáticos, poder ser utilizado pelos ```components/mudules``` ou até mesmo por ```/pages```.

### components/modules
Contém componentes mais robustos, aqueles que podem conter lógica e/ou receber ```props```.

### pages
Armazena as páginas/rotas da apalicação.

### services
Contém a lógica de conexão com serviços externos, por exemplo a própria [API da MARVEL](https://developer.marvel.com/). 

### styles
Arquivos de estilos globais e também estilos das páginas são armazenados aqui.

