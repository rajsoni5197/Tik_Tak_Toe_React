import { createContext,useState } from "react";

export const currentTurnContext = createContext();

function TurnProvider({children}){
    const [turn , setTurn] = useState(Math.random() < 0.5 ? 'X' : 'O');

    function changeTurn(){
        console.log("changeTurn",turn);
        setTurn(turn === 'X'?'O':'X');
    }
    return(
        <currentTurnContext.Provider value = {{turn, changeTurn,setTurn}}>
            {children}
        </currentTurnContext.Provider>
    )

}

export default TurnProvider;



