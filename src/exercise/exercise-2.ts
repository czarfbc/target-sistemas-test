export class VerifyString {
    public verify(message: string): number {
        message = message.toLowerCase()

        let arrayMessage = message.split('')
        let amount: number = 0

        arrayMessage.forEach((letter) => {
            if (letter == 'a') {
                return amount++
            }
        });

        return amount
    }
}