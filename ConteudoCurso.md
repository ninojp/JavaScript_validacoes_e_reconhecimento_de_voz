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

### Aula 03 - Para saber mais: como funciona a Web Speech API

A Web Speech API foi lançada no final de 2012, e possibilita que as pessoas desenvolvedoras da Web forneçam recursos de entrada de fala e saída de texto para fala em um navegador da Web. Normalmente, esses recursos não estão disponíveis ao usar o software padrão de reconhecimento de fala ou leitor de tela.

Esta API cuida da privacidade dos usuários. Então, antes de permitir que o site acesse a voz via microfone, o usuário deve conceder permissão declaradamente. O curioso é que a solicitação de permissão é a mesma da API getUserMedia, embora não precise da webcam. Se a página que executa essa API usa o protocolo HTTPS, o navegador solicita a permissão apenas uma vez, caso contrário, sempre vai solicitar quando um novo processo é iniciado.

Outro recurso interessante da Web Speech API é que ela permite especificar um objeto gramatical. Você pode pensar nisso como um conjunto de regras para definir um idioma. A vantagem de usar uma gramática é que ela geralmente leva a melhores resultados devido à restrição das possibilidades da linguagem.

A Web Speech API define uma interface complexa, chamada SpeechRecognition e você poder [ler mais sobre ela aqui](https://wicg.github.io/speech-api/#speechreco-section).

Também recomendo a leitura desse artigo para se [aprofundar mais ainda no assunto](https://www.sitepoint.com/introducing-web-speech-api/).

### Aula 03 - Exibindo a mensagem no console - Video 2

Faça um resumo dessa aula
Nesta aula, o instrutor explica como pegar a mensagem falada pelo usuário e exibi-la no console. Para isso, é necessário criar um evento que será acionado quando o reconhecimento de voz começar. Esse evento chama a função "onSpeak", que exibe a mensagem no console. O valor da mensagem pode ser acessado através do objeto "e.results[0][0].transcript". O objetivo final é exibir essa mensagem na aplicação, ao invés de apenas no console.

### Aula 03 - Mostrando a mensagem na tela - Video 3

Nesta aula, o instrutor explica como fazer com que o jogo reconheça a fala do jogador e exiba o valor falado na tela. Ele faz modificações no código HTML e JavaScript, comentando algumas linhas de código no arquivo "index.html" e criando uma nova div com a mensagem "Você disse:" e a caixa de texto com o valor falado pelo jogador. Ele utiliza o ID da div "chute" e a função getElementById() para selecioná-la. Em seguida, ele cria uma variável "chute" que recebe o valor falado pelo jogador através do reconhecimento de fala. Em vez de exibir esse valor no console, ele cria uma função "exibeChuteNaTela()" para exibi-lo na tela. Ele utiliza a propriedade innerHTML para inserir o valor falado na div "chute", utilizando a sintaxe de template string para concatenar o valor falado dentro da tag <span> da caixa de texto. Ele testa o código falando alguns números e seu nome para verificar se o valor falado é exibido corretamente na tela. O próximo passo será comparar o valor falado com o número secreto do jogo.

### Aula 03 Conclusão - O que aprendemos? Nesta aula:

Utilizamos o Web Speech API para realizar o reconhecimento de voz do nosso jogo;

Aprendemos como manipular os dados de voz reconhecidos;

Vimos como exibir o que foi falado na tela.

## Aula 04 - Criando a Lógica do jogo

### Aula 04 - Validações - Video 1

Nesta aula, o instrutor explica como realizar validações em um valor digitado pelo usuário. Ele cria a função "verificaSeOChutePossuiUmValorValido(chute)" para realizar essas validações, verificando se o valor é um número inteiro e se está dentro do intervalo permitido. O instrutor também menciona a possibilidade de extrair essas verificações para funções globais, como "chuteForInvalido(numero)" e "numeroForMaiorOuMenorQueOValorPermitido(numero)". Ele realiza testes para verificar o funcionamento das validações. No próximo trecho, ele irá explicar como exibir mensagens na tela e verificar o caso de sucesso de acertar o número secreto.

### Aula 04 - Acertando o número secreto - Video 2

Nesta aula, o instrutor ensina como exibir mensagens na tela em vez de no console. Ele mostra como adicionar uma div com a mensagem "Você disse" e o valor do chute do usuário. Também explica como exibir mensagens de "Valor inválido" quando o usuário digita um valor não numérico ou fora do intervalo permitido. Além disso, o instrutor mostra como exibir a mensagem de "Você acertou!" quando o usuário acerta o número secreto, substituindo todo o conteúdo da página. Ele também ensina a aumentar o tamanho da fonte utilizando CSS.

### Aula 04 - Criando as dicas  - Video 3

Nesta aula, o instrutor explica como funciona uma função que verifica se um chute em um jogo possui um valor válido. Caso o chute seja inválido, uma mensagem de "Valor inválido" é exibida. Se o número chutado for maior ou menor que o valor permitido, a função também retorna uma mensagem correspondente. Se o número for válido, mas não igual ao número secreto, a função exibe uma mensagem indicando se o número secreto é maior ou menor que o chute. O instrutor também menciona a adição de dicas visuais, como setas para cima ou para baixo, para indicar se o número secreto é maior ou menor que o chute. Além disso, o instrutor mostra como fazer com que o reconhecimento de voz continue funcionando mesmo após o jogo ter sido encerrado. Por fim, o instrutor desafia o espectador a testar o jogo e realizar melhorias, como adicionar botões e tornar o jogo mais interativo.

### Aula 04 Conclusão - O que aprendemos? Nesta aula:

Aprendemos como validar os dados de entrada de áudio;

Criamos a tela de sucesso, caso o chute seja igual ao número secreto;

Adicionamos informações caso o dado de entrada seja válido, porém, diferente do objetivo.

## Aula 05 - Publicando e Compartilhando

### Aula 05 - Criando o botão jogar novamente - Video 1
