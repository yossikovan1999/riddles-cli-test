import readlineSync from "readline-sync";


export function outputStats(average, totalSeconds){
    
    //this will display the stats to the user.
    console.log(`The average time per riddle: ${average}`);
    console.log(`The total time is: ${totalSeconds}`);
}


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
