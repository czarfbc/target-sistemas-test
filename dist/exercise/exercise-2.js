export class VerifyString {
    verify(message) {
        message = message.toLowerCase();
        let arrayMessage = message.split('');
        let amount = 0;
        arrayMessage.forEach((letter) => {
            if (letter == 'a') {
                return amount++;
            }
        });
        return amount;
    }
}
