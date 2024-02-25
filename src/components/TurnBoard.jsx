import { useContext } from "react";
import TurnProvider, { currentTurnContext } from "../../store/TurnState";
import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import './TurnBoard.css'

function TurnBoard() {
    const { turn } = useContext(currentTurnContext);
    return (
        <div className="card turn-board">
            <div className="card-body">
                It's &ensp;
               
                    {
                        turn === "X" ? <ImCross /> : <FaRegCircle />
                    }
                
                &ensp;  Turn.
            </div>
        </div>
    )
}
export default TurnBoard;