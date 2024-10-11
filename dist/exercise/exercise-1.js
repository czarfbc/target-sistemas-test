export class Fibonacci {
    fibonacci(sizeFibonacci) {
        let sequence = [0, 1];
        if (sizeFibonacci == 1) {
            return 0;
        }
        else if (sizeFibonacci <= 3) {
            return 1;
        }
        for (let i = 2; i < sizeFibonacci; i++) {
            const nextNumber = sequence[i - 1] + sequence[i - 2];
            sequence.push(nextNumber);
        }
        return this.verify(sequence, sizeFibonacci);
    }
    verify(sequence, sizeFibonacci) {
        let boolean = false;
        sequence.forEach((num) => {
            if (num == sizeFibonacci) {
                return boolean = true;
            }
        });
        if (boolean) {
            return 'pertence';
        }
        else {
            return 'nao pertence';
        }
    }
}
