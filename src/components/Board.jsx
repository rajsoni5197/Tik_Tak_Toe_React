import { useContext, useEffect } from 'react';
import './Board.css'
import Cell from './Cell';
import { BoardStateContext } from '../../store/BoardState';
import { currentTurnContext } from '../../store/TurnState';
import { currentWinState } from '../../store/WinState';
import WinLine from './WinLine';
import clickSound from "/box_click_Sound.wav";

function Board(){

    const {boardState , setBoardState}  = useContext(BoardStateContext);
    const {turn ,changeTurn} = useContext(currentTurnContext);
    const {winner, isWinner, setWinner,isDraw } = useContext(currentWinState);

    //making a function to handle click on cells
    
    useEffect(()=>{
        
        try{
            new Audio(clickSound).play();
        }
        catch(error){
            console.log(error);
        }
        const check  =isWinner(turn)  || isDraw() ;
        console.log('isWin', check,"board ",boardState );
        setWinner(check);
        changeTurn();
    },[boardState])
    function handleClick(id){
        if(winner) return;
        
        const newState = [...boardState];
        newState[id] = turn;
        setBoardState(newState);
        
    
    }
    
    console.log(boardState);
    return (
    
        
        <div className='Board'>

            <div className='Board-Body'>
                {boardState.map((element, index) => (
                    <Cell key={index} value={element} id={index} click = { handleClick}/>
                ))}
            </div>
               
                
                <WinLine />
                
                
            
        </div>
    )
}

export default Board;
