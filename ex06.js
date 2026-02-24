/**
 * ### **2.1.6 Conversion to String**

1. Converta os valores `true`, `false`, `null`, `undefined` e um objeto vazio `{}` para string e exiba os resultados.
 */
// 1. Conversão de valores para string
let valorTrue = true;
let valorFalse = false;
let valorNull = null;
let valorUndefined;
let valorObjetoVazio = {};
let trueConvertidoParaString = String(valorTrue);
let falseConvertidoParaString = String(valorFalse);
let nullConvertidoParaString = String(valorNull);
let undefinedConvertidoParaString = String(valorUndefined);
let objetoVazioConvertidoParaString = String(valorObjetoVazio);
console.log("Valor true convertido para string:", trueConvertidoParaString, "Tipo:", typeof trueConvertidoParaString);
console.log("Valor false convertido para string:", falseConvertidoParaString, "Tipo:", typeof falseConvertidoParaString);
console.log("Valor null convertido para string:", nullConvertidoParaString, "Tipo:", typeof nullConvertidoParaString);
console.log("Valor undefined convertido para string:", undefinedConvertidoParaString, "Tipo:", typeof undefinedConvertidoParaString);
console.log("Valor objeto vazio convertido para string:", objetoVazioConvertidoParaString, "Tipo:", typeof objetoVazioConvertidoParaString);
