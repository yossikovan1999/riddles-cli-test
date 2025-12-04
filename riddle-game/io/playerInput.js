import readlineSync from "readline-sync";

//=================================
//
//=================================
function getInput(message) {

    return readlineSync.question(message); 
}

//=================================
//
//=================================
function getPlayerName() {
  return readlineSync.question("Please enter your name:");
}

export { getPlayerName, getInput };
