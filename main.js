let maxiumum = parseInt(prompt('Enter your maximum number'));
while (!maxiumum) {                    // Jeżeli ktoś wpisał nieliczbę | Patrz parseInt
    maxiumum = parseInt(prompt('Enter your valid maximum number!'));
}

const targetNum = Math.floor(Math.random() * maxiumum) + 1;  //Generuje liczbę od 1 do wpisanej przez uzytkownika
console.log(targetNum);

let guess = parseInt(prompt('Enter your fisrt guess'));
let attemps = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attemps++;
    if (guess > targetNum) {
        guess = prompt('To high, enter again');
    } else {
        guess = prompt('To low, enter again');
    }
}
if (attemps <= 1) {
    alert(`You got it in ${attemps} guess`);
} else if (guess === 'q') {
    alert('You quit?! What a LOOOOOOSER');
} else {
    alert(`You got it in ${attemps} guesses`);
}