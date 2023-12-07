import { Routes,Route,Navigate } from "react-router";
import { useState } from "react";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import LoginPage from"./pages/auth/LoginPage";
import NewAdvertPage from "./pages/adverts/NewAdvertPage";
import { AuthContext } from "./pages/auth/context";
import Layout from "./components/shared/layout/Layout";
import AdvertPage from "./pages/adverts/AdvertPage";
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
        <Routes>
          <Route path="login" element={<LoginPage onLogin={handleLogin}/>}/>
          <Route path="adverts" element={<Layout tittle="Los anuncios que hay.."><AdvertsPage/>
          </Layout>}/>
          <Route path="/adverts/:advertId" element={<Layout><AdvertPage></AdvertPage></Layout>}
          />
          <Route path="adverts/new" element={<Layout tittle="Los Crea tu anuncio"><NewAdvertPage></NewAdvertPage></Layout>}
          />
          <Route path="/" element={<Navigate to="/adverts"></Navigate>}></Route>
          <Route path="/404" element={<div>404| Not found</div>}></Route>
          <Route path="*"element={<Navigate to="404"></Navigate>}></Route>
        </Routes>
        <header className="App-header">
          <h1>Learn React</h1>
        </header>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
