/**
 * ### **2.1.8 Conversion to Boolean**

1. Converta os valores `0`, `1`, `""`, `"Hello"`, `null`, `undefined`, `{}` e `[]` para booleanos e exiba os resultados.
 */
// 1. Conversão de valores para booleanos
let valorZero = 0;
let valorUm = 1;
let valorStringVazia = "";
let valorStringHello = "Hello";
let valorNull = null;
let valorUndefined;
let valorObjetoVazio = {};
let valorArrayVazio = [];
let zeroConvertidoParaBooleano = Boolean(valorZero);
let umConvertidoParaBooleano = Boolean(valorUm);
let stringVaziaConvertidaParaBooleano = Boolean(valorStringVazia);
let stringHelloConvertidaParaBooleano = Boolean(valorStringHello);
let nullConvertidoParaBooleano = Boolean(valorNull);
let undefinedConvertidoParaBooleano = Boolean(valorUndefined);
let objetoVazioConvertidoParaBooleano = Boolean(valorObjetoVazio);
let arrayVazioConvertidoParaBooleano = Boolean(valorArrayVazio);
console.log("Valor 0 convertido para booleano:", zeroConvertidoParaBooleano, "Tipo:", typeof zeroConvertidoParaBooleano);
console.log("Valor 1 convertido para booleano:", umConvertidoParaBooleano, "Tipo:", typeof umConvertidoParaBooleano);
console.log("Valor string vazia convertido para booleano:", stringVaziaConvertidaParaBooleano, "Tipo:", typeof stringVaziaConvertidaParaBooleano);
console.log("Valor string 'Hello' convertido para booleano:", stringHelloConvertidaParaBooleano, "Tipo:", typeof stringHelloConvertidaParaBooleano);
console.log("Valor null convertido para booleano:", nullConvertidoParaBooleano, "Tipo:", typeof nullConvertidoParaBooleano);
console.log("Valor undefined convertido para booleano:", undefinedConvertidoParaBooleano, "Tipo:", typeof undefinedConvertidoParaBooleano);
console.log("Valor objeto vazio convertido para booleano:", objetoVazioConvertidoParaBooleano, "Tipo:", typeof objetoVazioConvertidoParaBooleano);
console.log("Valor array vazio convertido para booleano:", arrayVazioConvertidoParaBooleano, "Tipo:", typeof arrayVazioConvertidoParaBooleano);
/**
 * No JavaScript, os seguintes valores são considerados "falsy" (avaliados como false): `0`, `""` (string vazia), `null`, `undefined`, `NaN` e `false`. Todos os outros valores são considerados "truthy" (avaliados como true). Portanto, no exemplo acima, `0`, `""`, `null` e `undefined` são convertidos para `false`, enquanto `1`, `"Hello"`, `{}` e `[]` são convertidos para `true`.
 */
