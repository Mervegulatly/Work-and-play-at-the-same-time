function checkGuess() {
  var guess = document.getElementById("guessInput").value;
  var randomNumber = Math.floor(Math.random() * 10) + 1;

  if (guess == randomNumber) {
    document.getElementById("result").innerHTML = "Tebrikler! Doğru tahmin!";
  } else {
    document.getElementById("result").innerHTML =
      "Maalesef yanlış tahmin. Doğru sayı " + randomNumber + " idi.";
  }
}
