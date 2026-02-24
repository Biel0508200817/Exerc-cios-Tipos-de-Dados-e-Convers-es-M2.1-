/**
 * ### **2.1.1 Data types and type conversions**

1. Declare três variáveis: uma string, um número e um booleano. Exiba seus valores e tipos no console.
2. Converta um número em uma string e exiba o resultado e seu tipo.
3. Converta uma string numérica em um número e exiba o resultado e seu tipo.
 */
// 1. Declaração de variáveis
let minhaString = "Olá, mundo!";
let meuNumero = 42;
let meuBooleano = true;
// Exibição dos valores e tipos
console.log("Valor da string:", minhaString, "Tipo:", typeof minhaString);
console.log("Valor do número:", meuNumero, "Tipo:", typeof meuNumero);
console.log("Valor do booleano:", meuBooleano, "Tipo:", typeof meuBooleano);
// 2. Conversão de número para string
let numeroComoString = meuNumero.toString();
console.log("Número convertido para string:", numeroComoString, "Tipo:", typeof numeroComoString);
// 3. Conversão de string numérica para número
let stringNumerica = "123";
let stringConvertidaParaNumero = Number(stringNumerica);
console.log("String numérica convertida para número:", stringConvertidaParaNumero, "Tipo:", typeof stringConvertidaParaNumero);
