export class Calculate {
    calculate() {
        let index = 12;
        let sum = 0;
        let k = 1;
        while (k < index) {
            k += 1;
            sum += k;
        }
        return { k, sum };
    }
}
