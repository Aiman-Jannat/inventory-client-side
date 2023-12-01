import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";


const PrivateRoute = ({children}) => {
    const {userr,loading} = useContext(AuthContext);
   const location = useLocation();
    if(loading)
    {
     return <FaSpinner></FaSpinner>
    }
    if(userr){
     return children;
    }
     return <Navigate to="/login" state={{from:location}} replace></Navigate>
 };
 
 export default PrivateRoute;