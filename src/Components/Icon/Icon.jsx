import { FaPen, FaRegCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
function Icon({name}){
    if(name == "cross"){
        return <RxCross1/>
    }
    else if(name == "circle"){
        return <FaRegCircle/>
    }
    else return <FaPen/>
}
export default Icon;