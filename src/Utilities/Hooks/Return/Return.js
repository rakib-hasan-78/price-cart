import { useNavigate } from "react-router-dom"

const useReturn =()=>{
    const returnRoute = useNavigate();
    return ()=>returnRoute(-1)
}
export default useReturn;