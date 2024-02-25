import { useContext } from "react";
import "./PlayAgain.css"
import { BoardStateContext } from "../../store/BoardState";
import { currentTurnContext } from "../../store/TurnState";
import { currentWinState } from "../../store/WinState";
import restartSound from "/Restart_sound.wav"

function PlayAgain() {
    const {boardState , setBoardState}  = useContext(BoardStateContext);
    const {turn ,setTurn} = useContext(currentTurnContext);
    const {winner,setWinCombination, isWinner, setWinner,isDraw } = useContext(currentWinState);

    function handleClick(){
        try{
            new Audio(restartSound).play();
        }
        catch(error){
            console.log(error);
        }
        setBoardState(Array(9).fill(null));
        setWinner(null);
        setWinCombination(null);
        setTurn(Math.random() < 0.5 ? 'X' : 'O')
    }
    return (<div className="d-grid gap-2 play-again" onClick={handleClick}>
        <button className="btn btn-primary" type="button">Play Again</button>
    </div>)
}
export default PlayAgain;
