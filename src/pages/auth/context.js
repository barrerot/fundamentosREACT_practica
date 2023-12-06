import { createContext, useContext } from "react";

export const AuthContext=createContext(false);
export const useAuth=()=>{
    const auth=useContext(AuthContext)
    return auth;
};