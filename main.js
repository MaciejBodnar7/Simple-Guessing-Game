let maxiumum = parseInt(prompt('Enter your maximum number'));
while (!maxiumum) {                    // Jeżeli ktoś wpisał nieliczbę | Patrz parseInt
    maxiumum = parseInt(prompt('Enter your valid maximum number!'));
}

const targetNum = Math.floor(Math.random() * maxiumum) + 1;  //Generuje liczbę od 1 do wpisanej przez uzytkownika
console.log(targetNum);

let guess = prompt('Enter your fisrt guess (type q to quit)'); //Usunięte z tą parseint aby gracz mógł wpisać q i wyjść z gry
let attemps = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);    //Bierze jakakolwiek wartość z guess i dopiero teraz parseit to i updateuje to do guess variable
    if (guess > targetNum) {
        guess = prompt('To high, enter again');
        attemps++;              // attemps przeniesiony do ifów aby nie aktualizował się jak ktoś wpisze nieliczbę
    } else if (guess < targetNum) {
        guess = prompt('To low, enter again');
        attemps++;
    } else {
        guess = prompt('Invalid guess. Please enter a number or q to quit') //Zmiana lekko logiki
    }
}
if (guess === 'q') {
    alert('You quit?! What a LOOOOOOSER');  //Zamiana if z else if aby nie wyskakiwał 2 alerty
} else if (attemps <= 1) {
    alert(`You got it in ${attemps} guess`);
} else {
    alert(`You got it in ${attemps} guesses`);
}