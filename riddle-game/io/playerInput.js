import readlineSync from "readline-sync";


//=================================
//         get Dificulty
//=================================
function getDificulty(){
  return readlineSync.question("type the level of difficulty:");
}

//=================================
//     what Type Of Game
//=================================
function whatTypeOfGame(){
  
  console.log("Enter what type of game you want to play:")
  return readlineSync.question("(1) - regular , (2) - sorted by difficulty , (3) - specific difficulty, (4) - from specific difficulty: ");

}

//=================================
//          get Input
//=================================
function getInput(message) {

    return readlineSync.question(message); 
}

//=================================
//       get Player Name
//=================================
function getPlayerName() {  
  return readlineSync.question("Please enter your name:");
}

export { getPlayerName, getInput, whatTypeOfGame, getDificulty};
