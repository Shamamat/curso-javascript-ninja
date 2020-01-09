/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato de São Paulo' // Sei lá se existe
console.log(championship) // iria usar usar o console.log ao invés do return, mas esquece, console.log da mt erro 

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Corinthians','São Paulo','Palmeiras','Botafogo','Vasco']
console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(posicao){
  var nomeTime = ''
  if(posicao === 1){
    nomeTime = teams[0]
  }
  else if(posicao === 2){
    nomeTime = teams[1]
  }
  else if(posicao === 3){
    nomeTime = teams[2]
  }
  else if(posicao === 4){
    nomeTime = teams[3] 
  }
  else if(posicao === 5){
    nomeTime = teams[4]
  }
  if(posicao === '' || posicao > 5 || posicao <= 0 ){
    return(`Não temos a informação do time que está nessa posição, coloque um dos top 5`)   
  }
  else{
    return(`O time que está em ${posicao}º lugar é o ${nomeTime}.`)
  } 
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1))
console.log(showTeamPosition(2))
console.log(showTeamPosition(3))
console.log(showTeamPosition(4))


/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
mais = 20
  while(mais < 31){
   console.log(mais)
   mais++
   }

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
  var hex
  if(cor === 'vermelho'){
  hex = '#ff0000'
  } 
  else if(cor === 'amarelo'){
  hex = '#ffff00'
  }
  else if(cor === 'verde'){
  hex = '#00ff00'
  } 
  else if(cor === 'azul'){
  hex = '#0000ff'
  }
  else if(cor === 'rosaEmChoque'){
  hex = '#FF1493'
  }
  
  else{
    return(`Não temos o equivalente decimal para ${cor}`)
  }
  return(`O hexadecimal para a cor ${cor} é ${hex}.`)
}  

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('vermelho'))
console.log(convertToHex('amarelo'))
console.log(convertToHex('azul'))
console.log(convertToHex('verde'))
console.log(convertToHex('rosaEmChoque'))
console.log(convertToHex('marrom'))
console.log(convertToHex('esmeralda'))
console.log(convertToHex('tomate'))

