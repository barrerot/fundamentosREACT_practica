//Simport { useState } from "react";
import Button from"../../components/shared/Button";
import { login } from "./service";
function LoginPage({onLogin}){
    
    const handleSubmit=async(event) =>{
        event.preventDefault();
        await login({email: event.target.email.value,password: event.target.password.value})
        //está logueado
        onLogin();
        //setIsLogged(true);
    };
    return<div>
        <h1>Loginto Walla-react</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email"></input>
            <input type="password" name="password"></input>
            
            <Button type="submit" $variant="primary" disabled={false}>Log in</Button>

        </form>
    </div>;
}
export default LoginPage;