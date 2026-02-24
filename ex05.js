/**
 * ### **2.1.5 Conversions**

1. Crie uma expressão que envolva uma conversão implícita entre número e string.
2. Use um operador matemático para converter uma string em um número implicitamente.
 */
// 1. Conversão implícita entre número e string
let numero = 10;
let string = "5";
let resultadoConcatenacao = numero + string;
console.log("Resultado da concatenação implícita:", resultadoConcatenacao, "Tipo:", typeof resultadoConcatenacao);
// 2. Conversão implícita usando operador matemático
let stringNumero = "15";
let numeroConvertido = +stringNumero; // ou Number(stringNumero)
console.log("Número convertido implicitamente:", numeroConvertido, "Tipo:", typeof numeroConvertido);
