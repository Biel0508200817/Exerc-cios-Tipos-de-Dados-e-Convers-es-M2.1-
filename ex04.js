/**
 * ### **2.1.4 Type conversions**

1. Converta um `boolean` em um número e exiba o resultado e seu tipo.
2. Converta `null` para um número e exiba o resultado e seu tipo.
3. Converta `undefined` para um número e exiba o resultado e seu tipo.
 */
// 1. Conversão de boolean para número
let meuBooleano = true;
let booleanConvertidoParaNumero = Number(meuBooleano);
console.log("Boolean convertido para número:", booleanConvertidoParaNumero, "Tipo:", typeof booleanConvertidoParaNumero);
// 2. Conversão de null para número
let minhaVariavelNull = null;
let nullConvertidoParaNumero = Number(minhaVariavelNull);
console.log("Null convertido para número:", nullConvertidoParaNumero, "Tipo:", typeof nullConvertidoParaNumero);
// 3. Conversão de undefined para número
let minhaVariavelUndefined;
let undefinedConvertidoParaNumero = Number(minhaVariavelUndefined);
console.log("Undefined convertido para número:", undefinedConvertidoParaNumero, "Tipo:", typeof undefinedConvertidoParaNumero);