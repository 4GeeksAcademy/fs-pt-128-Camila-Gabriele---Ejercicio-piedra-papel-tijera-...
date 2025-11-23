const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
}

function choisesConsole(arr) {
  const choiseAleatoria = Math.floor(Math.random() * arr.length)
  return arr[choiseAleatoria]
}

const ganaUsuario = (opciones, eleccionConsole) => {
  for (const opcion of opciones) {
    if (opcion === eleccionConsole) {
      return true
    }
    return false
  }
}

function jugar(userChoises) {
  const respuestaConsole = choisesConsole(choises)
  console.log("Usuario escogió :", userChoises);
  console.log("Console escogió:", respuestaConsole);

  if (userChoises === respuestaConsole) {
    console.log("Empate!!");
  } else if (ganaUsuario(rules[userChoises], respuestaConsole)) {
    console.log("Your winner =)");
  } else {
    console.log("You lost =/");
  }
}

jugar("rock")
