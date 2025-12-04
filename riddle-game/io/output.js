
//=================================
//      guess Correct Message
//=================================
function guessCorrectMessage(){

    console.log("Correct!");
}

//=================================
//           output Stats
//=================================
function outputStats(average, totalSeconds){
    
    //this will display the stats to the user.
    console.log(`The average time per riddle: ${average}`);
    console.log(`The total time is: ${totalSeconds}`);
}

export {outputStats, guessCorrectMessage}

