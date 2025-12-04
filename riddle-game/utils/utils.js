import { whatTypeOfGame, getDificulty } from '../io/playerInput.js';

const dificulties = ["EASY", "MEDIUM", "HARD"];

//=============================================
//             sort By Difficulty
//=============================================
function sortByDifficulty(riddles){
    
    //this functon will sort the aray from the bgining easy - hard.
    let sortedRiddles = [];

    for (const difficulty of dificulties){
        
        const levelArray = riddles.filter((riddle)=>riddle.difficulty === difficulty);
        sortedRiddles = [...sortedRiddles, ...levelArray];
    } 

    return sortedRiddles;
}

//=============================================
//           play Specific Difficulty
//=============================================
function playSpecificDifficulty(riddles){
    
    const difficulty = getDificulty();
    return riddles.filter((riddle)=>riddle.difficulty === difficulty);

}

//=============================================
//           play From Specific AndUp
//=============================================
function playFromSpecificAndUp(riddles){
    

    //this function firsts filters from a specific index of difficulty and then 
    const difficultyInput = getDificulty();

    const index = dificulties.findIndex((difficulty)=>difficulty === difficultyInput);
    const filteredDificulties = dificulties.slice(index, dificulties.length);

    return riddles.filter((riddle)=>filteredDificulties.includes(riddle.difficulty))
}


//=============================================
//           handle Type Of Game
//=============================================
export default function handleTypeOfGame(riddles){
    
    const gameType = whatTypeOfGame();
    

    switch(gameType){
        case "1":
            return riddles;
        case "2":
            return sortByDifficulty(riddles);
        case "3":
            return playSpecificDifficulty(riddles);
        case "4":
            return playFromSpecificAndUp(riddles);
    }

    return riddles
}