/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [5, 'Matheuszinho Gameplays', true, undefined, 19 ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornar(){ return qualquer }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
qualquer[1] // OBS: Ele colocou como "console.log" por estar fazendo isso pelo git, aí ele aparece a resposta pelo terminal (add ., status, commits, etc.)

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrNum(arr, num){ return arr[num] };
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var qualquer2 = [5, 'Matheuszinho Gameplays', true, undefined, null ]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
qualquer2[0] // Repetindo, podia ser console.log igual o professor fez: console.log( myFunction2( myArray2, 0) ); e tbm com o 1,2,3 e 4
qualquer2[1]
qualquer2[2]
qualquer2[3]
qualquer2[4]

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
  var todosLivros = {
    'Harry Potter': { quantidadePaginas: 200, autor: 'Philipino', editora: 'Panini' }, // OBS: Aqui o nome do objeto é 'Harry Potter' e
    'O senhor dos anéis': { quantidadePaginas: 300, autor: 'Marco Lutariti', editora: 'Hihappy'  }, // ele pode ser colocado assim separado pra ser chamado de
    'IT a coisa': { quantidadePaginas: 400, autor: 'Coringa', editora: 'Saraiva' } // uma forma mais fácil, se não se chamaria HarryPotter mas ngm digita assim
  }
  return !nomeLivro ? todosLivros : todosLivros [nomeLivro]; // Aqui mostra todos os livros OU mostra o livro passado por parâmetro
  
  // OBS: Apaguei oq tinha feito pra colocar a correção msm, oq tinha feito tava bem diferente, só os nomes que mudei... e dnv n consegui fazer pq não consegui direito .-.
  // OBS2: Aqui o objeto ficou dentro um objeto, onde todosLivros tem harry potter e outros que dentro tem suas propriedades. Só não esquece da vírgula, já que é um objeto/prop
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book('') //Também podia ser qualquer outra palavra que não fosse um dos livros, e ele colocou dentro do console.log

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = 'Harry Potter';  // Só pra ser mais fácil de usar nos de baixo (Se mudar ESSE valor muda o resultado das de baixo tbm, aí sabe o valor dos 3 de uma vez)
`O livro ${nomeLivro} tem ${book(nomeLivro).quantidadePaginas} páginas!` // OBS: Também fiquei surpreso de funcionar assim kk, peguei da correção já que ele n explico isso,
                                                                         // e dnv, ele usou o "console.log" nos outros exercícios tbm (de baixo)
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
`O autor do livro ${nomeLivro} é ${book(nomeLivro).autor}` // Pra fixar: Aqui não tem o var porque eu fiz todos seguirem o "nomeLivro" do exercício de cima

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
`O livro ${nomeLivro} foi publicado pela ${book('nomeLivro').editora}`

