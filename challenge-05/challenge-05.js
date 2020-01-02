/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [5, 'Matheuszinho Gameplays', true, undefined, 19 ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornar(){
  return qualquer
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
qualquer[1] // OBS: Ele colocou como console.log por agora ser no js/node, mas vou mudar tbm quando chegar html

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function param(arr, index){
  return arr[index] // * Correção/Obs: Essa parte eu só copiei pq realmente n tinha entendido exatamente, mas é até que simples
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var qualquer2 = [5, 'Matheuszinho Gameplays', true, undefined, null ]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
qualquer2[4] // Repetindo, podia ser console.log igual o professor fez: console.log( myFunction2( myArray2, 0) );
             // OBS: ele colocou todos os valores um por um por mais que esteja "último" na pergunta 

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
  var nomesLivros = { livro1: 'Harry Potter', livro2: 'O senhor dos anéis', livro3: 'IT a coisa' }
  var livroHarry = { quantidadePaginas: 200, autor: 'Philipino', editora: 'Panini' }
  var livroSenhorAneis = { quantidadePaginas: 300, autor: 'Marco Lutariti', editora: 'Hihappy' }
  var livroIT = { quantidadePaginas: 400, autor: 'Coringa', editora: 'Saraiva' }
  var tudo = `Coloque algum livro dos 3 livros: ${nomesLivros}`
/* *Correção importante: Ele passou os nomes dos livros diretamente com o nome e com suas informações, usando por exemplo: 
   'Introdução ao HTML5': { quantidadePaginas: 220, autor: 'John Resig & Bear Bibeault', Editora: 'Novatec' }, (e colocava os outros 2)
    Mas, ele não pode ser usado como variável por ele ser um 'nome' e não uma 'variável'... mas o meu tbm n ta errado, só mais longo */
  
  if(nomeLivro === nomesLivros.livro1){
    return livroHarry
     }
  else if(nomeLivro === nomesLivros.livro2){
     return livroSenhorAneis
     }
  else if(nomeLivro === nomesLivros.livro3){ 
    return livroIT
     } // *Correção: Na parte de mostrar o livro certo ele só colocou: return !bookName ? allBooks : allbooks[bookName]; :v
  else{
    return tudo
     }
  }
  
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book('') //Também podia ser qualquer outra palavra que não fosse um dos livros, e ele colocou o console.log

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
/* Essa parte aq n entendi exatamente oq ele fez, eu pensei que poderia ser criar uma variável com essa frase dentro de book
(que ficaria melhor na minha opinião) mas ele fez:'O livro Introdução ao HTML5 tem ' + book('Introdução ao HTML5').quantidadePaginas ' */
book(`O livro O senhor dos anéis tem ${book(livroSenhorAneis).quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
book(`O autor do livro Harry Potter é ${book(livroHarry).autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
book(`O livro IT a coisa foi publicado pela ${book(livroIT).editora}`)

