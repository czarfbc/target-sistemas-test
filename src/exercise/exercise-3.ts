export class Calculate {
    public calculate(): { k: number; sum: number } {
        let index: number = 12
        let sum: number = 0
        let k: number = 1

        while (k < index) {
            k += 1
            sum += k
        }

        return { k, sum }
    }
}