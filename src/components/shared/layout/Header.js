import { Link, NavLink } from "react-router-dom";
import Button from "../Button";
import { ReactComponent as Icon } from '../../../assets/twitter.svg';
import { logout } from "../../../pages/auth/service";
import { useContext } from "react";
import { AuthContext } from "../../../pages/auth/context";

function Header() {
    const {isLogged,onLogout}=useContext(AuthContext)
    const handleLogoutClick = async () => {
        await logout();
        onLogout();
    }

    return (
        <header>
            <Link to="/">
            <div>
                <Icon width={32} height={32} />
                {/* <img src={logo} alt="walla-react" /> */}
            </div>
            <nav>
                <NavLink to="/adverts/new">Nuevo anuncio</NavLink>
                <NavLink to="/adverts"> |anuncios disponibles</NavLink>
                <NavLink to="/login">|Login</NavLink>
            </nav>
            </Link>
            {
                isLogged ? (
                    <Button  onClick={handleLogoutClick} variant="primary">Logout</Button>
                ) : (
                    <Button as={Link} to="/login" variant="primary">Login</Button>
                )
            }
        </header>
    );
}

export default Header;
