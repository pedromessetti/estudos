:construction: README em construção... :construction:
# Estudos do Dia
## Indice
* [Titulo](#estudos)
* [Índice](#indice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Funcionalidades](#funcionalidades)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Autor](#autor)

## Descrição do Projeto
Aplicação React de uma To Do List com um cronômetro para cada tarefa. Projeto desenvolvido com template TypeScript, utilizando conceitos muito utilizados no React como DRY (Dont Repeat Yoursel) e SRP (Single Responsability Principal).

## Funcionalidades
* ### Lista de Tarefas
* ### Cronômetro

## Tecnologias Utilizadas
* ### React 
    Atualmente é a biblioteca mais utilizada de JavaScript segundo pesquisas. Para criar o projeto foi utilizada a biblioteca Create React App para criar a estrutura inicial com base nos padrões comuns adotados pela comunidade, juntamente com o template Typescript pois possui todas as configurações necessárias para usar Typecript no projeto. Foram utilizados na aplicação: conceito de DRY (Dont Repeat Yoursel), usado para criar componentes reaproveitáveis. Conceito de SRP (Single Responsability Principal), cada função (componentes) do código deve ter uma responsabilidade. Conceito das Props para comunicação entre componentes e Hooks para comunicação com estado interno. Pasta `public` para arquivos estáticos, como imagens, que serão referenciados dinamicamente.
    * #### useState
    O React só irá renderizar ou atualizar um componente quando avisarmos que algo mudou e fazemos isso usando o Hook `useState()`. O state é uma variável que adiciona um valor a ela, porém sempre que esse "estado da variável" muda, o componente, também muda. O `useState` precisa receber uma variável com o `state` em si e uma função para alterar esse estado (comumemente usamos o `setState`), ao alterar o estado dessa função (setar um novo item) o React entende que o componente mudou e o atualiza. 
    * #### useEffect
    Hook do React onde consegue-se "monitorar" a mudança do estado e, quando ele mudar, executar uma função para realizar alguma alteração. O useEffect se comporta como um Observable, um conceito muito usado por desenvolvedores Javascript, como por exemplo dentro de um `fetch` ou de um `eventListeners`, todos "observam" uma mudança para realizarem alguma ação. O useEffect junta a ideia de Observables com o ciclo de vida do component, que é executado uma vez, assim que o component aparece na tela e depois sempre que alguma variável que estiver dentro do array de dependências atualizar.
    * ### Absolute Imports
    Para não importar de formar relativa mas sim absoluta. O Typescript e o Javascript possuem uma forma para importar de forma absoluta, sem a necessidade de voltar muitas pastas ou colocar vários paths `'../../'` para importar um arquivo, através do arquivo `tsconfig.json` ou `jsconfig.json`. , entre no arquivo e dentro de `compilerOptions` acrescente a seguinte linha de código:
            
            "compilerOptions": {
                "baseUrl": "src",
                //continuação do código
            } 

    * ### Componentização
    Dentre inúmeras vantagens que o React proporciona, a componentização é uma das mais conhecidas, além de ser uma das maiores vantagens do React. Para termos uma aplicação no padrão React devemos criar uma pasta para armazenar seus componentes, isso para uma maior facilidade de acesso aos dados. Por isso existe a pasta `components` dentro de `src`. Um component tem um ciclo de vida, ele é montado, compartilha informação e é desmontado. Em geral o ciclo de vida do component é composto por:
    - componentWillMount (antes de ser montado)
    - componentDidMount (acabou de ser montado)
    - componentWillUpdate (acabou de atualizar)
    - componentWillUnmount (vai ser desmontado)
    Acima temos os métodos mais importantes que são utilizados para entender o ciclo de vida dos components de forma didática
    Sobre os componentes temos as seguintes boas práticas: 
    - O nome do componente deve começar com letra maiúscula pois dentro do próprio HTML existe a possibilidade de criar web-components, que cria tags HTML totalmente customizadas, dentre essas customizações o próprio nome da tag. Portanto para o React diferenciar um React Component de um Web-Component é uma boa prática criar componentes com a primeira letra maiúscula.
    - Retornar um JSX ou TSX, pois o componente será transformado em um elemento React e este código quando é passado para o `ReactDOM.render` é transformado em DOM e depois renderizado no HTML.
    
* ### TypeScript
É uma biblioteca para tipar variáveis em JavaScript. Para criar uma aplicação React utilizando o template padrão de typescript, basta digitar no terminal `npx create-react-app nome-do-app --template typescript`

* ## Sass
É um pré-processador que melhora e agiliza o CSS oferecendo algumas ferramentas que facilitam a escrita, porém os navegadores interpretam apenas CSS portanto o arquivo Sass é compilado para CSS puro.

Para instalar, abra o terminal no diretório do projeto, digite `npm install --save-dev sass` e pressionar Enter.
Para conferir se está instalado, verifique no arquivo `package.json` se terá uma `devDepencies`.

    "devDependencies": {

        "sass": "^1.55.0",

        "typescript-plugin-css-modules": "^3.4.0"
    }

reset.css básico no arquivo index.css
* ## CSS Modules
    Solução para não haver sobreposição de código CSS entre componentes. Sass, CSS Modules e Typescript trabalham todas juntas, fazendo conversões para que o código seja compreendido pelos navegadores. Enquanto o Sass facilita a escrita de estilos, o CSS Modules facilita a aplicação desses estilos e o Typescript ajuda na experiência de desenvolvimento dos componentes

    `typescript-plugin-css-module` é um plugin TypeScript, pode ser encontrado no site da NPM

    Para instalar, abra o terminal no diretório do projeto, digite `npm install -D typescrypt-plugin-css-modules` e execute o comando. Também é obrigátorio adicionar um plugin no arquivo `tsconfig.json`, para que a aplicação funcione corretamente, pois é onde está a configuração de TypeScript. Então copia-se apenas a linha `"plugins:"` fornecida no site da NPM e cole-a dentro do `compilerOptions:`, pois ele já existe no arquivo:

            {
                "compilerOptions": {
                    "plugins": [{"name":"typescript-plugin-css-modules"}],
                    ...
                }
            }

    Com isso terá terminado a instalação e poderá usar o CSS Modules.

    Para utiliza-lo, ao criar arquivos de Sass, crie-os com a extensão `app.modules.scss`. Será importado no `index.tsx`como um objeto. Portanto no topo do código teremos `import style from './app.module.scss'`. O `className` passará a ser uma variável JavaScript `style.app`
    * ### Padronização do CSS com BEN
    Por utilizar CSS Modules, para gerar classes únicas para cada componente, temos uma maior facilidade em nomea-las, por isso optamos por um estilo simples de nomeação de classes dentro de cada tag. 

* ## Autor
| [<img src="https://github.com/pedromessetti.png" width=115><br><sub>Pedro Vinicius Messetti</sub>](https://github.com/pedromessetti) |
| :---: |
