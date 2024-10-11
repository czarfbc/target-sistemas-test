export class Fibonacci {
    public fibonacci(sizeFibonacci: number): string | number {
        let sequence: number[] = [0, 1]

        if (sizeFibonacci == 1) {
            return 0;
        } else if (sizeFibonacci <= 3) {
            return 1;
        }

        for (let i = 2; i < sizeFibonacci; i++) {
            const nextNumber = sequence[i - 1] + sequence[i - 2];
            sequence.push(nextNumber);
        }

        return this.verify(sequence, sizeFibonacci)
    }


    private verify(sequence: number[], sizeFibonacci: number): string {
        let boolean: boolean = false
        sequence.forEach((num) => {
            if (num == sizeFibonacci) {
                return boolean = true
            }
        });

        if (boolean) {
            return 'pertence'
        } else {
            return 'nao pertence'
        }
    }
}


