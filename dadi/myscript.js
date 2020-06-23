var button = document.getElementById("button");

button.addEventListener("click", function () {
  var giocatore = Math.floor(Math.random() * 6 + 1);
  var computer = Math.floor(Math.random() * 6 + 1);

  if (giocatore < computer) {
    console.log("vince computer");
  } else if (giocatore > computer) {
    console.log("vince giocatore");
  } else {
    console.log("pareggio");
  }
});
