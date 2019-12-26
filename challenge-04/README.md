# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(tru) {
return tru ? true : false
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy('')
isTruthy(0)
isTruthy("")
isTruthy(false)
isTruthy(-0)
isTruthy(undefined)
isTruthy(null)
isTruthy(NaN)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1)
isTruthy('o')
isTruthy(function() {})
isTruthy('Matheus')
isTruthy([])
isTruthy({})
isTruthy('alguma coisa')
isTruthy('ta')
isTruthy('divertido? nah')
isTruthy('acabo!')

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = { marca: 'volksvagem', modelo: 'pá', placa: 'abc-1234', ano: 2019, cor: 'cinza', quantasPortas: 4 , assentos: 5, quantidadePessoas: 0 }

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(mcor){
carro.cor = mcor
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
 return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
 return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
 return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = `Esse carro é ${carro.marca} de modelo ${carro.modelo}`

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function(quant){
var res = quant + carro.quantidadePessoas
var falta = 5 - quant //podia ser carro.assentos, mas assim até que n fica tão ruim :v
var plural = 's'

/* Correção importante: Ele adicionou o valor diretamente na variável 'carro.quantidadePessoas', fazendo ela manter o valor anterior 
usando carro.quantidadePessoas += quant, ele atribuiu isso dps do "carro lotado" pq aí ele n adicionava um valor que deixaria além de lotado */

if(res >= 5){
 return `O carro já está lotado! Tem ${res} pessoas no carro` 
 } 
if(res === 1){
 plural = '' // OBS: Sim, agr esse plural fica levemente inútil, poderia colocar a mensagem do ultimo return mas vou deixar assim
 }           // *Correção: ele colocou um terciário ao invés do meu if inútil: <variavel> === 1 ? 'pessoa' : 'pessoas'
else if(res > 1 && res < 5){
 return `Só cabem mais ${falta} pessoa${plural}!` 
 }
 else if(res <= -1){
  return `Coloque um número válido!`
 }
 return `Só cabe mais ${res} pessoa${plural} no carro!`
}
//OBS: o chato é que no dele ele tinha que toda definir zero então... vou deixar o meu assim, mas acabou meio diferente msm :\

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor() //'azul'

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho') //'vermelho'

// E agora, qual a cor do carro?
carro.obterCor() // 'vermelho'

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo') //'verde musgo'

// E agora, qual a cor do carro?
carro.obterCor() // 'verde musgo'

// Qual a marca e modelo do carro?
carro.obterMarcaModelo // 'Esse carro é volksvagem de modelo pá'

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2) // Só cabem mais 3 pessoas!

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4) // Só cabem mais 4 pessoas! (aqui já deveria ficar cheio, mas o exercicio dele ele até adiciona 8, confuzasso)

// Faça o carro encher.
carro.adicionarPessoas(5) // O carro já está lotado! Tem 5 pessoas no carro 

// Tire 4 pessoas do carro.
/* Pra tirar pessoas é meio complicado, é pegando o numero de pessoas que já tinha com o que ta colocando e fazer uma validação pra totalPessoas >= assentos, pra n aparecer sempre que o carro está lotado por colocar um valor negativo e ele vai pra outro if */
// "seria" carro.adicionarPessoas(-4) // "Já temos 1 pessoa no carro"(no dele)

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10) // O carro já está lotado! Tem 10 pessoas no carro

// Quantas pessoas temos no carro?
/* zero, porque ele vai pra zero toda vez que eu coloco um novo valor, mas deveria ter 5 no final já que não tem mais de 5 assentos...
mas o dele ele só chamou 'carro.quantidadePessoas' e deu 1 */
```
