import { useState } from "react";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import LoginPage from"./pages/auth/LoginPage";

function App({initiallyLogged}) {
  const[isLogged,setIsLogged]= useState(initiallyLogged);
  const handleLogin=()=>setIsLogged(true);
  return (
    <div className="App">
      {isLogged ?<AdvertsPage></AdvertsPage>:
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