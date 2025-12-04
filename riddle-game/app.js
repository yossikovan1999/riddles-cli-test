import { getPlayerName } from "./io/playerInput.js";
import createPlayer from './players/player.js';
import runGame from './game.js';


function main(){
    
    //create the player object.
    const playerName = getPlayerName();
    const player = createPlayer(playerName);
    
    //this will run the game.
    runGame(player);

}

main()