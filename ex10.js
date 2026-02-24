/**
 * ### **2.1.10 Implicit Conversions**

1. Crie uma operação que envolva uma string e um número, mostrando como ocorre a conversão implícita.
 */
// 1. Operação envolvendo string e número com conversão implícita
let numero = 10;
let string = "O número é: ";
let resultado = string + numero;
console.log("Resultado da operação com conversão implícita:", resultado, "Tipo:", typeof resultado);
/**
 * No JavaScript, quando uma operação envolve diferentes tipos de dados, o motor do JavaScript realiza conversões implícitas para tentar resolver a operação. No exemplo acima, quando concatenamos a string "O número é: " com o número 10, o JavaScript converte o número 10 para uma string antes de realizar a concatenação. O resultado é a string "O número é: 10", e o tipo do resultado é "string". Essa é uma demonstração de como as conversões implícitas ocorrem em JavaScript.
 */
