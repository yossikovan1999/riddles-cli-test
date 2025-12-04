import originalRiddles from './riddles/riddles.js'
import { getInput, outputStats } from './io/playerInput.js';



//=========================================
//             show Stats
//=========================================
function showStats(player){

    const totalSeconds = player.times.reduce((count, num) => count + num, 0);
    const average = totalSeconds / player.times.length;
    outputStats(totalSeconds, average);
}

//=========================================
//          add Solved Time
//=========================================
function addSolvedTime(player, seconds){

    player.times.push(seconds);
}

//=========================================
//       multiple Choice Riddle
//=========================================
function multipleChoiceRiddle(riddle){
     
     const choices = riddle.choices.join(", ");

     const riddleMesage = `Please enter the answer to the multiple choice riddle (answer starts from 0):
    ${riddle.taskDescription}
    ${choices}`;

    const userInput = getInput(riddleMesage);
    
    return userInput === riddle.correctAnswer;
}
//=========================================
//           regular Riddle
//=========================================
function regularRiddle(riddle){


    const riddleMesage = `Please enter the answer to the following riddle: ${riddle.taskDescription}`
    const userInput = getInput(riddleMesage);

    return userInput === riddle.correctAnswer;
}
//=========================================
//            ask Riddle
//=========================================
function askRiddle(riddle){
    
    let correctAnswer = false
    
    const riddleFunc = riddle.choices ? multipleChoiceRiddle : regularRiddle;
 

    while(!correctAnswer){
         
        correctAnswer = riddleFunc(riddle);

        if(!correctAnswer){
            console.log("The answer is not correct please try again!")
        }
    }
}

//=========================================
//         measure SolveTime
//=========================================
function measureSolveTime(func, riddle){
    
    const startTime = new Date().getSeconds();
    func(riddle);
    const endTime =  new Date().getSeconds();

    return endTime - startTime;
}

//=========================================
//                  game
//=========================================
export default function game(player){
     
    //copy of the original array so we can pop and not affect the original array
    const riddles = [...originalRiddles];


    while(riddles.length > 0){
        
        try{
            const riddle = riddles.pop();
            const time = measureSolveTime(askRiddle, riddle);
            addSolvedTime(player, time);
        }catch(error){
             console.error("Error Occured in the current Round: moving to the next riddle", error.message);
        }
    }

    showStats(player); 
}
