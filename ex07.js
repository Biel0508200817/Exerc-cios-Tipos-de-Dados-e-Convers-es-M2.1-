/**
 * ### **2.1.7 Conversion to Number**

1. Converta as strings `"123"`, `"123.45"`, `""`, `"abc"` e `"0"` para números e exiba os resultados.
2. Use a função `parseInt` e `parseFloat` para converter strings e explique as diferenças.
 */
// 1. Conversão de strings para números
let string1 = "123";
let string2 = "123.45";
let string3 = "";
let string4 = "abc";
let string5 = "0";
let numero1 = Number(string1);
let numero2 = Number(string2);
let numero3 = Number(string3);
let numero4 = Number(string4);
let numero5 = Number(string5);
console.log("String 1 convertida para número:", numero1, "Tipo:", typeof numero1);
console.log("String 2 convertida para número:", numero2, "Tipo:", typeof numero2);
console.log("String 3 convertida para número:", numero3, "Tipo:", typeof numero3);
console.log("String 4 convertida para número:", numero4, "Tipo:", typeof numero4);
console.log("String 5 convertida para número:", numero5, "Tipo:", typeof numero5);
// 2. Uso de parseInt e parseFloat
let parseIntString = "123.45";
let parseFloatString = "123.45";
let parseIntResultado = parseInt(parseIntString);
let parseFloatResultado = parseFloat(parseFloatString);
console.log("Resultado de parseInt para '123.45':", parseIntResultado, "Tipo:", typeof parseIntResultado);
console.log("Resultado de parseFloat para '123.45':", parseFloatResultado, "Tipo:", typeof parseFloatResultado);
/**
 * A função `parseInt` converte uma string para um número inteiro, ignorando os decimais. Já a função `parseFloat` converte uma string para um número de ponto flutuante, preservando os decimais. No exemplo acima, `parseInt("123.45")` retorna `123`, enquanto `parseFloat("123.45")` retorna `123.45`.
 */
