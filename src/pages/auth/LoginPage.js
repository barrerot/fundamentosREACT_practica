//Simport { useState } from "react";
import { useContext, useState } from "react";
import Button from"../../components/shared/Button";
import { login } from "./service";
import { AuthContext, useAuth } from "./context";
import './LoginPage.css';
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage(){
    const{onLogin}=useAuth();
    //const[email,setEmail]= useState('');
    //const[password,setPassword]=useState('');
    const[credentials, setCredentials]=useState({
        email:'',password:'',
    })
    const[error,setError] =useState(null);
    const location =useLocation();
    const navigate=useNavigate();
    
    const handleSubmit=async(event) =>{
        event.preventDefault();
        try {
            await login(credentials);
            onLogin();
            const to=location?.state?.from||'/';
            navigate(to,{replace:true});
        } catch (error) {
            setError(error);
            
        }
    
        
        //está logueado
       
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
           const resetError=() =>{
            setError(null);
           }
           const disabled=!(credentials.email&& credentials.password);
    
    return<div>
        <h1>Loginto Walla-react</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email"onChange={handleEmailChange}></input>
            <input type="password" name="password" onChange={handlePasswordChange}></input>
            
            <Button type="submit" $variant="primary" disabled={disabled}>Log in</Button>
            {error&&<div className="loginPage-error" onClick={setError}>{error.message}</div>}

        </form>
    </div>;
}
export default LoginPage;