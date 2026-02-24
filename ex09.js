/**
 * ### **2.1.9 Conversion to BigInt**

1. Converta o número `1000000000000` em um `BigInt` e exiba o resultado e seu tipo.
 */
// 1. Conversão de número para BigInt
let numeroGrande = 1000000000000;
let numeroGrandeConvertidoParaBigInt = BigInt(numeroGrande);
console.log("Número grande convertido para BigInt:", numeroGrandeConvertidoParaBigInt, "Tipo:", typeof numeroGrandeConvertidoParaBigInt);
/**
 * No JavaScript, o tipo `BigInt` é usado para representar números inteiros que são maiores do que o limite máximo do tipo `Number`. Para converter um número para `BigInt`, podemos usar a função `BigInt()`. No exemplo acima, o número `1000000000000` é convertido para um `BigInt`, e o resultado é exibido junto com seu tipo, que é "bigint".
 */ 
