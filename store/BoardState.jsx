import { createContext, useEffect, useState } from "react";

export const BoardStateContext = createContext(); // making context object


function BoardStateProvider({children}){
    const [boardState , setBoardState] = useState(Array(9).fill(null));
    

    return (
        <BoardStateContext.Provider value={{boardState, setBoardState}}>
            {children}
        </BoardStateContext.Provider>
    ) 
}

export default BoardStateProvider;
