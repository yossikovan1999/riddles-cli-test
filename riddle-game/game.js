import originalRiddles from './riddles/riddles.js'
import { getInput } from './io/playerInput.js';



//=========================================
//
//=========================================
function showStats(player){

    const totalSeconds = player.times.reduce((count, num) => count + num, 0);

    console.log(`The average time per riddle: ${totalSeconds}`);
    console.log(`The total time is: ${totalSeconds}`);
}

//=========================================
//
//=========================================
function addSolvedTime(player, seconds){

    player.times.push(seconds);
}

//=========================================
//
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
//
//=========================================
function regularRiddle(riddle){


    const riddleMesage = `Please enter the answer to the following riddle: ${riddle.taskDescription}`
    const userInput = getInput(riddleMesage);

    return userInput === riddle.correctAnswer;
}
//=========================================
//
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
//
//=========================================
function measureSolveTime(func, riddle){
    
    const date = new Date();

    const startTime = date.getSeconds();
    console.log(startTime);
    func(riddle);
    const endTime = date.getSeconds();
    console.log(endTime);
    
    return endTime - startTime;
}

//=========================================
//
//=========================================
export default function game(player){
     
    //copy of the original array so we can pop and not affect the original array
    const riddles = [...originalRiddles];


    while(riddles.length > 0){
        
        const riddle = riddles.pop();
        const time = measureSolveTime(askRiddle, riddle);
        console.log(time);
        addSolvedTime(player, time);
    }

    showStats(player); 
}
