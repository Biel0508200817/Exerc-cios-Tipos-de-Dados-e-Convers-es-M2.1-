/**
 * 1. Liste os tipos primitivos do JavaScript em um array e exiba seus valores usando `console.log()`.
2. Declare uma variável para cada tipo primitivo e exiba seus valores.
3. Verifique se uma variável contém um valor do tipo `Symbol` usando `typeof`.
 */
// 1. Lista dos tipos primitivos do JavaScript
const tiposPrimitivos = ["string", "number", "boolean", "null", "undefined", "symbol", "bigint"];
console.log("Tipos primitivos do JavaScript:", tiposPrimitivos);
// 2. Declaração de variáveis para cada tipo primitivo
let minhaString = "Olá, mundo!";
let meuNumero = 42;
let meuBooleano = true;
let minhaVariavelNull = null;
let minhaVariavelUndefined;
let meuSymbol = Symbol("meuSimbolo");
let meuBigInt = 9007199254740991n;
// Exibição dos valores das variáveis
console.log("Valor da string:", minhaString);
console.log("Valor do número:", meuNumero);
console.log("Valor do booleano:", meuBooleano);
console.log("Valor da variável null:", minhaVariavelNull);
console.log("Valor da variável undefined:", minhaVariavelUndefined);
console.log("Valor do símbolo:", meuSymbol);
console.log("Valor do BigInt:", meuBigInt);
// 3. Verificação se uma variável é do tipo Symbol
if (typeof meuSymbol === "symbol") {
    console.log("A variável 'meuSymbol' é do tipo Symbol.");
} else {
    console.log("A variável 'meuSymbol' não é do tipo Symbol.");
}
