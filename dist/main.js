import { Fibonacci } from "./exercise/exercise-1.js";
import { VerifyString } from "./exercise/exercise-2.js";
import { Calculate } from "./exercise/exercise-3.js";
async function bootstrap() {
    const fibonacci = new Fibonacci();
    const fibonacciNumber = 5;
    const verifyString = new VerifyString();
    const calculate = new Calculate();
    console.log(`o numero ${fibonacciNumber} ${fibonacci.fibonacci(fibonacciNumber)} a sequencia`);
    console.log(`a string possui ${verifyString.verify('banco de dAdos')} letra "a"`);
    console.log(`a soma e ${calculate.calculate().sum}`);
}
bootstrap();
