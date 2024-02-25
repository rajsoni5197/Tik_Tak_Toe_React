import { createContext, useContext, useState } from "react";
import { BoardStateContext } from "./BoardState";
import winingCondition from './winCondition.json';
import draw from '/Draw_sound.wav'
import win from '/win_sound.mp3'

export const currentWinState = createContext();


function WinStateProvider({children}) {
    const [winner , setWinner] = useState(null);
    const [winCombination , setWinCombination] = useState(null);
    const {boardState} = useContext(BoardStateContext);
    
    
    function isWinner(){
        for (const combination of winingCondition.winCondition) {
            const [a, b, c] = combination;
            // Check if all squares are not null/undefined and have the same value
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                setWinCombination(combination[3]);
                try{
                    new Audio(win).play();
                }
                catch(error){
                    console.log(error);
                }
                return boardState[a]; // Return the winning symbol

            }
        }
        return null;
    }
   function isDraw(){
        for(const ele of boardState)
        {
            if(!ele) return null;
        }
        try{
            new Audio(draw).play();
        }
        catch(error){
            console.log(error);
        }
        
        return 'd';
   }
    
    return (
        <currentWinState.Provider value={{ winner ,winCombination,setWinCombination, isWinner, setWinner,isDraw }}>
            {children}
        </currentWinState.Provider>
    )
}
export default WinStateProvider;
