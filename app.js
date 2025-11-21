const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
}

function choisesConsole(arr){
  const choiseAleatoria = Math.floor(Math.random() * arr.length)
  return arr[choiseAleatoria]
}
 console.log(choisesConsole(choises));
 
function jugar(choises){

}


jugar("Rock")
jugar("Paper")
jugar("scissors")



