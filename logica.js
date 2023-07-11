//Escreva
console.log("Hello World!")

//Variaveis
let nome = 'Juliano'
// private string nome = "Juliano";
console.log(nome)
nome = 'Juliano Vieira'
console.log(nome)

var linguagem = "Javascript"
console.log(linguagem)

//Constantes - NÃO MUDAM EM TEMPO DE EXECUÇÃO
//Usados para endereço de API ex www.meusite.com/api
const CONSTANTE = "constante"
console.log(CONSTANTE)

//Operacoes Matematicas

let somar = 1 + 2
console.log(somar)

let subtrair = 1 - 2
console.log(subtrair)

let dividir = 1 / 2
console.log(dividir)

let mutiplicar = 1 * 2
console.log(mutiplicar)

let exponencial = Math.pow(2, 2)
// exponecial = a ^ b
// exponecial = a ** b
console.log(exponencial)

let randomico = Math.random()
console.log(randomico)

let resto = 10 % 2
console.log(resto)

let min = 1
let max = 2
let aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
console.log(aleatorio)

//Operadores logicos
let a = 1
let b = 2
let c = 3
let comparacao = a == b
console.log(comparacao)

comparacao = a == a
console.log(comparacao)

comparacao = a === a
console.log(comparacao)

let maior = a > b
console.log(maior)

let menor = a < b
console.log(menor)

let diferente = a != b
console.log(diferente)

let maior_igual = a >= b
console.log(maior_igual)

let menor_igual = a <= b
console.log(menor_igual)

// AND java, javascript, php usa && python usa and
// para ser verdadeiros todos os teste devem ter
//resultado verdadeiro
let combinado_and = (a <= b) && (b <= c)
console.log(combinado_and)

// OR java, javascript, php usa || python usa or
// para ser verdadeiros apenas um precisa ser
//verdadeiro
let combinado_or = (a <= b) || (b <= c)
console.log(combinado_or)

//Operadores de atribuição
let d = 1
// incrementar
d++
console.log(d)
// decrementar
d--
console.log(d)
//somar e atribuir d = 1 + 10
//somar e atribuir d = d + 10
console.log(d += 10)
//subtrair e atribuir d = 11 - 6
console.log(d -= 6)
//multiplicar e atribuir d = 5 * 8
console.log(d *= 8)
//dividir e atribuir d = 40 / 4
console.log(d /= 4)
//resto e atribuir d = 10 % 2
console.log(d %= 2)

// Usando operadores logicos - CONDICIONAL

let salario = 10000

if (salario >= 5000) {
    console.log("Rico")
} else {
    console.log("Quebrado")
}

if (salario >= 5000) {
    console.log("Rico")
}
else if (salario >= 3000) {
    console.log("Remediado")
} else {
    console.log("Quebrado")
}
//Python não tem chaves e usa : com identação
//else if usa elif

//Função ou Metodo é usado para reduzir a quantidade 
//de codigo digitada ou realizar um processo pre definido
//pode ou não receber parametros
function imprimir() {
    console.log("Ola mundo!")
}
//Como chamar uma função
imprimir()

function imprircomparametro(nome) {
    console.log("Ola " + nome + ", seja bem vindo!")
}

imprircomparametro("Jose")

//Função com retorno
function area(base, altura) {
    return base * altura
}
let figura = area(10, 15)
console.log(figura)

function boasvindas(nome, nascimento, atual) {
    let idade = atual - nascimento;
    console.log('Ola ' + nome + ", voce tem " + idade + " anos.")
}

boasvindas("Joao", 1981, 2023)

function juros(capital, taxa, parcelas) {
    return capital * Math.pow(1 + (taxa / 100), parcelas);
}

let valor = juros(1000, 0.65, 120)
valor = Number(valor).toFixed(2)
console.log(valor)
console.log(valor / 120)

// Lacos de repeticao
//enquanto for positivo faça algo
let ind = 0
let dec = 10
while (ind < 10) {
    console.log(ind, dec)
    ind++
    dec--
}

//for voce ja define o valor de parada
for (let index = 0; index < 10; index++) {
    console.log(index)
}

function tabuada(multiplicador, multiplicando) {
    let ind = 0
    while (ind <= multiplicando){
        let resultado = multiplicador * ind        
        console.log(multiplicador + " x "  + ind + " = " + resultado)
        ind++
    }
}

for (let index = 0; index <= 10; index++) {
    tabuada(index,10)
    console.log("")
}
