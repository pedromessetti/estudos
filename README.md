# Estudos

## Indice
* [Titulo](#estudos)
* [Índice](#indice)
* [](#)

## Descrição do Projeto
Aplicação React que pode-ser adicionada múltiplas tarefas com um timer, ao selecionar um item da lista de tarefas criadas e o tempo vai direto para um cronômetro, quando o tempo for zerado a tarefa dará como realizada.

## Tecnologias Utilizadas
* React: Biblioteca mais utilizada de JavaScript segundo pesquisas. Componentização (base do React). Conceito de DRY (Dont Repeat Yoursel), usado para criar componentes reaproveitáveis. Conceito de SRP (Single Responsability Principal), cada função (componentes) do código deve ter uma responsabilidade. Comunicação entre componentes com o props. Comunicação com estado interno com State. Diferença de class components e function components.
* TypeScript: É uma biblioteca para tipar variáveis em JavaScript
* ### Sass: 
É um pré-processador CSS que melhora e agiliza o CSS.

Para instalar, abra o terminal no diretório do projeto, digite `npm install --save-dev sass` e pressionar Enter.
Para conferir se está instalado, verifique no arquivo `package.json` se terá uma `devDepencies`.

    "devDependencies": {

        "sass": "^1.55.0",

        "typescript-plugin-css-modules": "^3.4.0"
    }

Reset.css no arquivo index.css
* ### CSS Modules: 
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