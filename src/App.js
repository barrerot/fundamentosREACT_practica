import { useState } from "react";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import LoginPage from"./pages/auth/LoginPage";
import NewAdvertPage from "./pages/adverts/NewAdvertPage";


function App({initiallyLogged}) {
  const[isLogged,setIsLogged]= useState(initiallyLogged);
  const handleLogin=()=>setIsLogged(true);
  const handleLogout=() =>setIsLogged(false);
  return (
    <div className="App">
    {/*<NewAdvertPage></NewAdvertPage>*/}
      {isLogged ?
      
      
      <AdvertsPage onLogout={handleLogout} isLogged={isLogged}></AdvertsPage>:
      <LoginPage onLogin={handleLogin}></LoginPage>}
      <header className="App-header">
        
        <h1>
          Learn React
        </h1>
      </header>
    </div>
  );
}

export default App;