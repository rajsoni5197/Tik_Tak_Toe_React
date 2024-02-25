import React from "react"
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import "./App.css"
import Heading from "./components/Heading";
import Board from "./components/Board";
import Result from "./components/Result";
import PlayAgain from "./components/PlayAgain";
import TurnBoard from "./components/TurnBoard";
import { useContext } from "react";
import { currentWinState } from "../store/WinState";

function App(){
    let {winner} = useContext(currentWinState);
    
    return(
        <>
            <Heading></Heading>
            {!winner&&<TurnBoard></TurnBoard>}
            <Board></Board>
            {winner && <Result />}
            {winner && <PlayAgain />}

            
        </>
    );
}

export default App;