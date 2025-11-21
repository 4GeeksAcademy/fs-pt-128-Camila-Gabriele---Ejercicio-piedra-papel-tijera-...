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


function jugar(userChoises){
  const respuestaConsole = choisesConsole(choises)
  console.log("Jugador 1:", userChoises);
  console.log("Jugador Console:", respuestaConsole);
  
  if (userChoises === respuestaConsole)
}

jugar("Rock")




