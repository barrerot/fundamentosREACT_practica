//Simport { useState } from "react";
import { useState } from "react";
import Button from"../../components/shared/Button";
import { login } from "./service";
function LoginPage({onLogin}){
    const[email,setEmail]= useState('');
    const[password,setPassword]=useState('');
    
    const handleSubmit=async(event) =>{
        event.preventDefault();
        await login({email: event.target.email.value,password: event.target.password.value})
        //está logueado
        onLogin();
        //setIsLogged(true);
    };
    const handleEmailChange=(event)=>{
        setEmail(event.target.value)
 //console.log(event.target.value);

    };

    const handlePasswordChange=(event)=>{
        setPassword(event.target.value)
       // console.log(event.target.value);
       
           };
           const disabled=!(email&& password);
    
    return<div>
        <h1>Loginto Walla-react</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email"onChange={handleEmailChange}></input>
            <input type="password" name="password" onChange={handlePasswordChange}></input>
            
            <Button type="submit" $variant="primary" disabled={disabled}>Log in</Button>

        </form>
    </div>;
}
export default LoginPage;