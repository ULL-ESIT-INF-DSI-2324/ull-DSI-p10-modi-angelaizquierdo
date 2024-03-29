import { writeFile } from "fs";

/**
 * Esta funcion es la que se encarga de escribir en un fichero
 * en este caso en el fichero helloworld.txt
 */
writeFile("src/helloworld.txt", "Hello World!", () => {
  console.log("File helloworld.txt has just been created");
});

/**
 * Adds two __numbers__
 * @param firstNumber Consists of the first operand of the addition
 * @param secondNumber Consists of the second operand of the addition
 * @returns The addition of the two numbers `firstNumber` and `secondNumber`
 * ```typescript
 * add(1, 7) = 8
 * ```
 */
export function add(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}

console.log(`add(1, 7): ${add(1, 7)}`);
