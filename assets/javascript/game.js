
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var guesses = 3;
    var userscore = 0;
    var computerscore = 0;
    var guessarray = [];

    alert("Guess what letter I'm thinking of");
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    
    // Alerts the key the user pressed (userGuess).
    alert("User guess: " + userGuess);
    guessarray.push(userGuess);

    // Alerts the Computer's guess.
    alert("Computer guess: " + computerGuess);

    if (userGuess == computerGuess){
      userscore = userscore +1;
      guesses = 3;
      guessarray = [];
      computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    else {
      guesses = guesses - 1;
      if (guesses == 0) {
        computerscore = computerscore + 1;
        guesses = 3;      
        guessarray = [];
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    }

    gameStatus.innerHTML = "<p>You chose: " + userGuess + "</p>" + 
    // "<p> Computer chose: " + computerGuess + "</p>" + 
    "<p> Wins: " + userscore + "</p>" + 
    "<p> Losses: " + computerscore + "</p>" + 
    "<p> Guesses left: " + guesses + "</p>" +
    "<p> Guesses so far: " + guessarray + "</p>";
  };


