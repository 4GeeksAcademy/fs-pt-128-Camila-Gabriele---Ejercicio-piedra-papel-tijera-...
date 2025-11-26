const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
}

function choisesConsole(choise) {
  const choiseAleatoria = Math.floor(Math.random() * choise.length)
  return choise[choiseAleatoria]
}

function ganaUsuario(opciones, eleccionConsole) {
  for (const opcion of opciones) {
    if (opcion === eleccionConsole) return true;
    return false;
  }
}
function jugar(userChoises) {
  const respuestaCompu = choisesConsole(choises)
  console.log("Usuario escogió :", userChoises);
  console.log("Console escogió:", respuestaCompu);

  if (userChoises === respuestaCompu) {
    console.log("Empate!!");
  } else if (ganaUsuario(rules[userChoises], respuestaCompu)) {
    console.log("You won =)");
  } else {
    console.log("You lost =/");
  }
}

jugar("rock")
