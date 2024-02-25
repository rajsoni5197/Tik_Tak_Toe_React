import { useContext } from "react";
import { currentWinState } from "../../store/WinState";
import "./Result.css"

function Result({result}) {
    const {winner} = useContext(currentWinState);
    return (
        <div className="card result-card">
            <div className="card-body">
                {winner === "X" && "X is The Winner"}
                {winner === "O" && "O is The Winner"}
                {winner === "d" && "It's A Draw"}
            </div>
        </div>
    )
}
export default Result;