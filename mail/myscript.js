var email = prompt("Insersci la tua E-mail");

var listaMail = ["brian@gmail.com", "prova@gmail.com", "ciao@gmail.com", 12, 24, 36];

var mailTrovata = false;


for (var i = 0; i < listaMail.length; i++) {
  if (email == listaMail[i]) {
    mailTrovata = true;
  }
}

if (mailTrovata == true) {
  console.log("mail trovata");
} else if (mailTrovata == false) {
  console.log("mail non trovata");
}
