// 1. Number
console.log("\n--- NUMBER ---");
console.log(2);                 // 2
console.log(typeof 2);          // number
console.log(typeof 2.2);        // number
console.log(typeof -5);         // number

// 2. Operações Aritméticas
console.log("\n--- OPERAÇÕES ARITMÉTICAS ---");
console.log(2 + 4);             // 6
console.log(10 - 5);            // 5
console.log(5 * 4);             // 20
console.log(10 / 2);            // 5

// 3. Special Numbers
console.log("\n--- SPECIAL NUMBER ---");
console.log(Infinity);          // Infinity
console.log(typeof Infinity);   // number
console.log(12 * "asd");        // NaN
console.log(typeof NaN);        // number

// 4. Strings
console.log("\n--- STRINGS ---");
console.log("Um texto");        // Um texto
console.log(`Mais um texto`);   // Mais um texto
console.log(typeof "Opa");      // string

// 5. Símbolos especiais em strings
console.log("\n--- SÍMBOLOS ESPECIAIS ---");
console.log("Testando\nQuebra de linha");
console.log("Espaçamento \t de tab");

// 6. Concatenação
console.log("\n--- CONCATENAÇÃO ---");
console.log("Oi, " + "tudo " + "bem?");
console.log(`Testando ` + `Concatenação`);

// 7. Interpolação
console.log("\n--- INTERPOLAÇÃO ---");
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa ${console.log("teste")}`);

// 8. Booleans
console.log("\n--- BOOLEANS ---");
console.log(5 > 2);                     // true
console.log(30 > 100);                  // false
console.log(typeof true);               // boolean

// 9. Comparações
console.log("\n--- COMPARAÇÕES ---");
console.log(5 <= 5);                    // true
console.log(5 < 5);                     // false
console.log(10 == 10);                  // true
console.log(10 == 9);                   // false
console.log(10 != 9);                   // true

// 10. Idêntico
console.log("\n--- IDÊNTICO ---");
console.log(9 == "9");                  // true
console.log(9 === "9");                 // false
console.log(9 != "9");                  // false
console.log(9 !== "9");                 // true

// 11. Operadores lógicos na prática
console.log("\n--- OPERADORES LÓGICOS ---");
console.log(true && true);              // true
console.log(true && false);             // false
console.log(5 > 2 && 2 < 10);           // true
console.log(5 > 2 && "Matheus" === 1);  // false
console.log(10 > 2 || 5 > 100);         // true
console.log(!50 > 10);                  // false

// 12. Empty values
console.log("\n--- EMPTY VALUES ---");
console.log(typeof null, typeof undefined); // object undefined
console.log(null === undefined);        // false
console.log(null == undefined);         // true
console.log(null == false);             // false
console.log(undefined == false);        // false

// 13. Mudança de tipos
console.log("\n--- MUDANÇA DE TIPOS ---");
console.log(5 * null);                  // 0
console.log("teste" * "opa");           // NaN
console.log("10" + 1);                  // 101
console.log("10" - 1);                  // 9