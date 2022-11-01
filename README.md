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
Aplicação React desenvolvida com template TypeScript, utilizando conceitos muito utilizados no React como DRY (Dont Repeat Yoursel) e SRP (Single Responsability Principal).

onde adiciona-se uma tarefa juntamente com o tempo desejado. Ao selecionar um item da lista de tarefas, o tempo da tarefa selecionada vai  para um cronômetro, com a opção de iniciar a contagem, quando o tempo for zerado a tarefa dará como realizada.

## Funcionalidades

## Tecnologias Utilizadas
### React
Biblioteca mais utilizada de JavaScript segundo pesquisas. Componentização (base do React). Conceito de DRY (Dont Repeat Yoursel), usado para criar componentes reaproveitáveis. Conceito de SRP (Single Responsability Principal), cada função (componentes) do código deve ter uma responsabilidade. Comunicação entre componentes com o props. Comunicação com estado interno com State.

* #### useState
    O React é reativo, logo, a forma como ele renderiza os componentes também é reativa. O React só irá renderizar ou atualizar um componente quando avisarmos que algo mudou e fazemos isso usando o Hook `useState()`. O state é uma variável que adiciona um valor a ela, porém sempre que esse "estado da variável" muda, o componente que o tem, também muda. Muito utilizado em listas, por exemplo. O `useState` precisa receber uma variável com o `state` em si e uma função para alterar esse estado (comumemente usamos o `setState`), ao alterar o estado dessa função (setar um novo item) o React entende que o componente mudou e o atualiza. 

* #### Componentização
    Para termos uma aplicação no padrão React devemos criar uma pasta para armazenar seus componentes, isso para uma maior facilidade de acesso aos dados. Por isso existe a pasta `components` dentro de `src`
### TypeScript
É uma biblioteca para tipar variáveis em JavaScript. Para criar uma aplicação React utilizando o template padrão de typescript, basta digitar no terminal `npx create-react-app nome-do-app --template typescript`
### Sass
É um pré-processador CSS que melhora e agiliza o CSS.

Para instalar, abra o terminal no diretório do projeto, digite `npm install --save-dev sass` e pressionar Enter.
Para conferir se está instalado, verifique no arquivo `package.json` se terá uma `devDepencies`.

    "devDependencies": {

        "sass": "^1.55.0",

        "typescript-plugin-css-modules": "^3.4.0"
    }

Reset.css no arquivo index.css
### CSS Modules
Solução para não haver sobreposição de código CSS entre componentes.

`typescript-plugin-css-module` é um plugin TypeScript, pode ser encontrado no site da NPM

Para instalar, abra o terminal no diretório do projeto, digite `npm install -D typescrypt-plugin-css-modules` e execute o comando. Também é obrigátorio adicionar um plugin no arquivo `tsconfig.json`, para que a aplicação funcione corretamente, pois é onde está a configuração de TypeScript. Então copia-se apenas a linha `"plugins:"` fornecida no site da NPM e cole-a dentro do `compilerOptions:`, pois ele já existe no arquivo:

    {
        "compilerOptions": {
            "plugins": [{"name":"typescript-plugin-css-modules"}],
            ...
        }
    }

Com isso terá terminado a instalação e poderá usar o CSS Modules.

Para utiliza-lo, ao criar arquivos de css, crie-os com a extensão `app.modules.scss`. Será importado no `index.tsx`como um objeto. Portanto no topo do código teremos `import style from './app.module.scss'`. O `className` passará a ser uma variável JavaScript `style.AppStyle`

## Autor
| [<img src="https://github.com/pedromessetti.png" width=115><br><sub>Pedro Vinicius Messetti</sub>](https://github.com/pedromessetti) |
| :---: |