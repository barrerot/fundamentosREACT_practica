import { useState } from "react";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import LoginPage from"./pages/auth/LoginPage";
import NewAdvertPage from "./pages/adverts/NewAdvertPage";
import { AuthContext } from "./pages/auth/context";
function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  const authValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin
  };

  return (
    <AuthContext.Provider value={authValue}>
      <div className="App">
        {isLogged ? (
          <AdvertsPage  />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
        <header className="App-header">
          <h1>Learn React</h1>
        </header>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
