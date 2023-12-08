import { Navigate } from "react-router-dom";
import { useAuth } from "../context";

function RequireAuth({children}){
    const {isLogged}=useAuth();
return isLogged ? children : <Navigate to="/login" />;
}
export default RequireAuth;