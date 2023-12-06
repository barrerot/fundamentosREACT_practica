//Simport { useState } from "react";
import { useContext, useState } from "react";
import Button from"../../components/shared/Button";
import { login } from "./service";
import { AuthContext, useAuth } from "./context";

function LoginPage(){
    const{onLogin}=useAuth();
    //const[email,setEmail]= useState('');
    //const[password,setPassword]=useState('');
    const[credentials, setCredentials]=useState({
        email:'',password:'',
    })
    
    const handleSubmit=async(event) =>{
        event.preventDefault();
        await login(credentials)
        //está logueado
        onLogin();
        //setIsLogged(true);
    };
    const handleEmailChange=(event)=>{
        setCredentials({email:event.target.value,password: credentials.password});
 //console.log(event.target.value);

    };

    const handlePasswordChange=(event)=>{
        setCredentials({email: credentials.email, password:event.target.value});
       // console.log(event.target.value);
       
           };
           const disabled=!(credentials.email&& credentials.password);
    
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