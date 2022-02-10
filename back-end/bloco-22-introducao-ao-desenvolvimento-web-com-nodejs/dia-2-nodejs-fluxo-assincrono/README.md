<div class=" col-span-12 content-section-box"><h3 id="agora-a-pratica" class="title-section">
  Agora, a prática
</h3>
<ol>
  <li>
    <div class="pt-1 pb-1">
      Crie uma função que recebe três parâmetros retorna uma 
<code class="inline">Promise</code>      .
    </div>
    <ol>
      <li>
        Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo 
<code class="inline">"Informe apenas números"</code>        .
      </li>
      <li>
        Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro (
<code class="inline">(a + b) * c</code>        ).
      </li>
      <li>
        Caso o resultado seja menor que 50, rejeite a Promise com o motivo 
<code class="inline">"Valor muito baixo"</code>      </li>
      <li>
        Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
      </li>
    </ol>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Escreva um código para consumir a função construída no exercício anterior.
    </div>
    <ol>
      <li>
        Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: 
<code class="inline">Math.floor(Math.random() * 100 + 1)</code>        .
      </li>
      <li>
        Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
      </li>
      <li>
        Utilize 
<code class="inline">then</code>         e 
<code class="inline">catch</code>         para manipular a Promise retornada pela função:
        <ol>
          <li>
            Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
          </li>
          <li>
            Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
          </li>
        </ol>
      </li>
    </ol>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Reescreva o código do exercício anterior para que utilize 
<code class="inline">async/await</code>      .
    </div>
  </li>
</ol>
<ul>
  <li>
    Lembre-se: a palavra chave 
<code class="inline">await</code>     só pode ser utilizada dentro de funções 
<code class="inline">async</code>    .
  </li>
</ul>
<ol start="4">
  <li>
    Realize o download 
    <a href="https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json">
      deste arquivo
    </a>
     e salve-o como 
<code class="inline">simpsons.json</code>    . Utilize o arquivo baixado para realizar os requisitos abaixo.
  </li>
</ol>
<ul>
  <li>
    <div class="pt-1 pb-1">
      Você pode utilizar 
<code class="inline">then</code>       e 
<code class="inline">catch</code>      , 
<code class="inline">async/await</code>       ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
    </div>
    <ol>
      <li>
        Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato 
<code class="inline">id - Nome</code>        . Por exemplo: 
<code class="inline">1 - Homer Simpson</code>        .
      </li>
      <li>
        Crie uma função que receba o 
<code class="inline">id</code>         de uma personagem como parâmetro e retorne uma 
<code class="inline">Promise</code>         que é resolvida com os dados da personagem que possui o 
<code class="inline">id</code>         informado. Caso não haja uma personagem com o 
<code class="inline">id</code>         informado, rejeite a Promise com o motivo "id não encontrado".
      </li>
      <li>
        Crie uma função que altere o arquivo 
<code class="inline">simpsons.json</code>         retirando os personagens com 
<code class="inline">id</code>         10 e 6.
      </li>
      <li>
        Crie uma função que leia o arquivo 
<code class="inline">simpsons.json</code>         e crie um novo arquivo, chamado 
<code class="inline">simpsonFamily.json</code>        , contendo as personagens com 
<code class="inline">id</code>         de 1 a 4.
      </li>
      <li>
        Crie uma função que adicione ao arquivo 
<code class="inline">simpsonFamily.json</code>         o personagem 
<code class="inline">Nelson Muntz</code>        .
      </li>
      <li>
        Crie uma função que substitua o personagem 
<code class="inline">Nelson Muntz</code>         pela personagem 
<code class="inline">Maggie Simpson</code>         no arquivo 
<code class="inline">simpsonFamily.json</code>        .
      </li>
    </ol>
  </li>
</ul>
<ol start="5">
  <li>
    Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
    <ol>
      <li>
        Utilize o 
<code class="inline">Promise.all</code>         para manipular vários arquivos ao mesmo tempo.
      </li>
      <li>
        Dado o seguinte array de strings: 
<code class="inline">['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']</code>        
Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a 
<code class="inline">file&lt;index + 1&gt;.txt</code>        . Por exemplo, para a string "Finalmente", o nome do arquivo é 
<code class="inline">file1.txt</code>        .
      </li>
      <li>
        Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado 
<code class="inline">fileAll.txt</code>        .
      </li>
    </ol>
  </li>
</ol>
<div class="pt-1 pb-1">
    O conteúdo do arquivo 
<code class="inline">fileAll.txt</code>   deverá ser 
<code class="inline">Finalmente estou usando Promise.all !!!</code>  .
</div>
<div class="pt-1 pb-1">
  Para os exercícios abaixo, faremos uso de um módulo chamado 
<code class="inline">readline</code>  , principalmente de seu método 
<code class="inline">readline.question()</code>  . Ele provê uma interface de leitura de dados inserida no terminal. Para mais informações, consulte a 
  <a class="external-link" href="https://nodejs.org/api/readline.html" target="_blank" rel="noopener noreferrer">
    documentação
  </a>
  .
</div>
<ol start="6">
  <li>
    <div class="pt-1 pb-1">
      Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
    </div>
    <ol>
      <li>
        Pergunte à pessoa usuária qual arquivo ela deseja ler.
      </li>
      <li>
        Leia o arquivo indicado.
      </li>
      <li>
        Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
      </li>
      <li>
        Caso o arquivo exista, escreva seu conteúdo na tela.
      </li>
    </ol>
  </li>
  <li>
    <div class="pt-1 pb-1">
      Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
    </div>
    <ol>
      <li>
        Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
      </li>
      <li>
        Leia o arquivo.
      </li>
      <li>
        Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
      </li>
      <li>
        Caso o arquivo exista, solicite a palavra a ser substituída.
      </li>
      <li>
        Solicite a nova palavra, que substituirá a palavra anterior.
      </li>
      <li>
        Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
      </li>
      <li>
        Pergunte o nome do arquivo de destino.
      </li>
      <li>
        Salve o novo arquivo no caminho de destino.
      </li>
    </ol>
  </li>
</ol>
<div class="pt-1 pb-1">
    Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com 
<code class="inline">replace(new RegExp(palavra, 'g'), novaPalavra)</code>  .
</div>
<ol start="8">
  <li>
    Escreva uma função que receba um número inteiro maior que 0 e retorne uma Promise.
  </li>
  <li>
    Se o número for múltiplo de 3, resolva a Promise com o valor "Fizz".
  </li>
  <li>
    Se o número for múltiplo de 5, resolva a Promise com o valor "Buzz".
  </li>
  <li>
    Se o número for múltiplo de 3 e 5, resolva a Promise com o valor "FizzBuzz".
  </li>
  <li>
    Caso contrário, rejeite a Promise com o valor do número.
  </li>
</ol>