# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma (n1, n2) { return n1+n2 }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
soma (5, 5) + 5

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
var val

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function val() {
 val = 5
 return `O valor da variável val agora é ${val}. Onde ${val} é o novo valor da variável`
}


// Invoque a função criada acima.
val()

// Qual o retorno da função? (Use comentários de bloco). 
/* O retorno da função é 'O valor da variável val agora é 5. Onde 5 é o novo valor da variável' */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function fun (n1, n2, n3){
if(n1.value === true, n2.value === true, n3.value = true){ // *Correção: O certo deveria ser "if(n1 === undefined || n2 === undefined
res = n1 * n2 * n3 + 2                                 // *Continuação:  ||n3 === undefined){ return 'tal'(não tal, mas enfim)
return = `o resultado é ${res}`
}
else{
return `Preencha os campos corretamente!`
}

// Invoque a função criada acima, passando só dois números como argumento.
fun(2, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* "Preencha os campos corretamente!" */

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
fun(2, 2, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'O resultado é 10'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.       // 
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`. //
*/
function ifs(n1, n2, n3){
if(n1.value === true && n2.value === false && n3.value === false){
 return `O valor colocado foi ${n1}`
}
else if(n1.value === true && n2.value === true && n3.value === false){ 
 return `A soma dos dois números é ${n1 + n2}`  // *Correção: podia ser "n1 !== undefined" (undefined = não definido)
}
else if(n1.value === true && n2.value === true && n3.value === true){ //agr que lembrei do && mas agr já era :v
 res = (n1 + n2) / n3
 return `A soma dos números é ${n1 + n2} e dividindo por ${n3} dá ${res}`
}
else if(n1 === undefined && n1 === undefined && n3 === undefined){
 return false //Aqui deu um erro no node e n roda .-.
}
else{
 return null
 }
}
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

ifs(2) // 'O valor colocado foi 2'
ifs(2,4) // 'A soma dos dois números é 6'
ifs(2,4,6) // 'A soma dos números é 6 e dividindo por 6 dá 1'
ifs() // false
```
