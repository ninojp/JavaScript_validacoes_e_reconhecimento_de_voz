# JavaScript: validações e reconhecimento de voz

## Aula 01 - Aplicando estilos no JavaScript

### Aula 01 - Apresentação - Video 1

Nesta aula, Guilherme Lima apresenta um curso de reconhecimento de voz com JavaScript. Ele mostra um projeto prático de um jogo em que o computador escolhe um número secreto e o jogador precisa acertá-lo através do reconhecimento de voz. Guilherme explica que o objetivo do jogo é demonstrar as diferentes validações que podem ser feitas com o reconhecimento de voz, como reconhecer nomes e números. Ele também menciona que o projeto será disponibilizado para que qualquer pessoa possa jogar. O instrutor destaca a importância de criar uma estrutura com HTML e estilizar o projeto de acordo com as preferências do jogador. Além disso, ele enfatiza a modularização do código em JavaScript, criando funções separadas para o sorteio dos números e para as validações do reconhecimento de voz. No final do vídeo, Guilherme parabeniza a participante Moni por vencer o jogo e agradece sua presença, convidando-a para o próximo vídeo.

### Aula 01 - Iniciando o projeto - Video 2

Nesta aula, o instrutor inicia um projeto do zero, criando uma pasta e dois arquivos (index.html e style.css) utilizando atalhos do Visual Studio Code. Ele utiliza o Live Server para visualizar as alterações em tempo real. Em seguida, o instrutor adiciona um link para um reset CSS CDN para remover as estilizações padrão dos navegadores. Ele também adiciona um link para o arquivo style.css. O instrutor adiciona um título e um cabeçalho no index.html, informando que o número secreto está entre 0 e 100. Ele utiliza spans com IDs para manipular esses valores posteriormente com JavaScript. Em seguida, o instrutor cria uma div com um ID e uma classe para exibir mensagens. Ele adiciona um trecho de código para reconhecer a mensagem que a pessoa vai falar e exibi-la na div. Por fim, o instrutor adiciona uma mensagem informando se o número secreto é maior ou menor, e utiliza o ícone de uma seta para cima ou para baixo para indicar essa informação. O instrutor menciona que a aparência do projeto será melhorada posteriormente.

### Aula 01 - Escolhendo fontes e cores - Video 3

Nesta aula, o instrutor aborda a parte visual de um projeto em JavaScript, discutindo a escolha da fonte e das cores. Ele sugere acessar o Google Fonts para escolher uma fonte adequada e explica como importá-la no CSS. Além disso, ele indica o Color Hunt para encontrar paletas de cores e decide utilizar a cor azul como cor de fundo e o branco como cor primária. Essas cores serão adicionadas à aplicação posteriormente.

### Aula 01 - Aplicando cores e posicionando elementos - Video 4

Nesta aula, o instrutor ensina como aplicar cores, fontes e estilos no código de uma aplicação em JavaScript. Ele começa selecionando a tag body para aplicar as cores de fundo e de texto. Em seguida, ele centraliza os elementos na tela e define a fonte do texto. O instrutor também estiliza elementos específicos, como títulos e mensagens, adicionando margens e bordas. Com todas essas estilizações, é possível criar um layout agradável para a aplicação.

### Aula 01 - O que aprendemos? Nesta aula:

Iniciamos o desenvolvimento do jogo de reconhecimento de voz com JavaScript do zero;
Estruturamos a página do jogo com HTML;
Escolhemos a fonte, as cores e estilizamos toda parte visual.

## Aula 02 - Aplicando a função Math.random

### Aula 02 - Número aleatório com Math.random - Video 1

Nesta aula, o instrutor começa a dar vida à aplicação utilizando JavaScript. Ele explica a importância de dividir o código em arquivos separados para facilitar a manutenção e o trabalho em equipe. Em seguida, ele cria o primeiro arquivo JavaScript chamado "sortearNumero.js" e mostra como vinculá-lo ao projeto HTML CSS através da tag <script>.

O instrutor utiliza a função console.log() para exibir mensagens no console do navegador e testa a função Math.random() para gerar números pseudo-aleatórios. Ele explica como multiplicar o resultado de Math.random() por um valor para obter um intervalo específico.

Para obter um número inteiro, ele utiliza a função parseInt() e menciona a possibilidade de adicionar 1 ao valor máximo para obter um intervalo inclusivo.

O instrutor cria uma constante chamada numeroSecreto e uma função chamada gerarNumeroAleatorio() para gerar o número secreto. Ele utiliza a função console.log() para exibir o número secreto no console e mostra como atualizar a página para gerar um novo número aleatório.

Por fim, o instrutor menciona a intenção de manipular os valores mínimo e máximo para exibir esses valores na tela do projeto.

### Aula 02 - Manipulando menor e maior valor - Video 2

Nesta aula, o instrutor discute sobre a manipulação de valores em uma aplicação. Ele menciona a criação de constantes para representar o menor e o maior valor possível. O objetivo é que esses valores possam ser facilmente alterados e que o sorteio de um número seja feito com base neles. O instrutor utiliza a função Math.random() para gerar um número aleatório entre 0 e 1 e multiplica esse número pelo maior valor. Ele destaca a necessidade de ajustar a fórmula para que o maior valor seja inclusivo, adicionando "+ 1". Em seguida, ele mostra como exibir os valores do menor e do maior na tela da aplicação. O instrutor destaca que essa manipulação dos valores está funcionando corretamente, pois o número sorteado também está dentro do intervalo definido pelos valores mínimo e máximo.

### Aula 02 - O que aprendemos? Nesta aula:

Criamos a pasta para manter todo código JavaScript, fizemos o import do script no HTML, e criamos a escolha de um número pseudo-aleatório;

Manipulamos o menor e o maior valor de forma dinâmica, modificando o conteúdo do HTML através do JavaScript.

## Aula 03 - Definindo a voz com Web Speech

### Aula 03 - Web speech API - Video 1

Nesta aula, o instrutor aborda a implementação do reconhecimento de fala em um projeto utilizando a Web Speech API. Ele explica como configurar a API, incluir o suporte no código JavaScript e iniciar o reconhecimento de fala. O instrutor destaca a importância de utilizar o Google Chrome devido à sua compatibilidade com a API.