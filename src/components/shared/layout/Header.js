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
            <div>
                <Icon width={32} height={32} />
                {/* <img src={logo} alt="walla-react" /> */}
            </div>
            {
                isLogged ? (
                    <Button onClick={handleLogoutClick} variant="primary">Logout</Button>
                ) : (
                    <Button variant="primary">Login</Button>
                )
            }
        </header>
    );
}

export default Header;
