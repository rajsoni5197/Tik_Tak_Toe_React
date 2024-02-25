import { useContext } from "react";
import { currentWinState } from "../../store/WinState";
import './WinLine.css'
function WinLine(){
    const {winCombination } = useContext(currentWinState);
    let nameOfClass = "WinLine";
    nameOfClass = winCombination?nameOfClass+ " " +winCombination: null;
    
    return (
        <div className={nameOfClass}></div>
    )

}

export default WinLine;