/**
 * ### **2.1.2 The typeof operator**

1. Declare uma variável com um valor `null` e outra com `undefined`. Use `typeof` para verificar seus tipos.
2. Crie um objeto e um array. Use `typeof` para exibir seus tipos e compare os resultados.
3. Declare uma variável com um valor `BigInt`. Use `typeof` para verificar seu tipo.
 */
// 1. Declaração de variáveis null e undefined  
let minhaVariavelNull = null;
let minhaVariavelUndefined;
console.log("Valor da variável null:", minhaVariavelNull, "Tipo:", typeof minhaVariavelNull);
console.log("Valor da variável undefined:", minhaVariavelUndefined, "Tipo:", typeof minhaVariavelUndefined);
// 2. Criação de um objeto e um array
let meuObjeto = { nome: "João", idade: 30 };
let meuArray = [1, 2, 3, 4, 5];
console.log("Valor do objeto:", meuObjeto, "Tipo:", typeof meuObjeto);
console.log("Valor do array:", meuArray, "Tipo:", typeof meuArray);
// 3. Declaração de uma variável BigInt
let meuBigInt = 9007199254740991n;
console.log("Valor do BigInt:", meuBigInt, "Tipo:", typeof meuBigInt);
