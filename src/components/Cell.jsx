import "./Cells.css"
import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
function Cell({id ,value ,click}){
    return (
        <div className="cell" key = {id} onClick={()=>{ click(id);console.log("clicked")}}>


            {value ==='X' &&<ImCross /> }
            {value ==='O' && <FaRegCircle />}
            {value === null &&" " }

            
        </div>
    )

}
export default Cell;