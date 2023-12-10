import { useContext, useState } from "react";
import Button from "../../components/shared/Button";
import { login } from "./service";
import { AuthContext, useAuth } from "./context";
import './LoginPage.css';
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
    const { onLogin } = useAuth();

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsFetching(true);
            await login(credentials, rememberMe);
            onLogin();
            setIsFetching(false);
            const to = location?.state?.from || '/';
            navigate(to, { replace: true });
        } catch (error) {
            setIsFetching(false);
            setError(error);
        }
    };

    const handleEmailChange = (event) => {
        setCredentials({ ...credentials, email: event.target.value });
    };

    const handlePasswordChange = (event) => {
        setCredentials({ ...credentials, password: event.target.value });
    };

    const resetError = () => {
        setError(null);
    };

    const disabled = !(credentials.email && credentials.password) || isFetching;

    return (
        <div>
            <h1>Login to Walla-react</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onChange={handleEmailChange} />
                <input type="password" name="password" onChange={handlePasswordChange} />

                <label>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                    />
                    Recordar sesión
                </label>

                <Button type="submit" $variant="primary" disabled={disabled}>
                    {isFetching ? "Connecting..." : "Login"}
                </Button>

                {error && (
                    <div className="loginPage-error" onClick={resetError}>
                        {error.message}
                    </div>
                )}
            </form>
        </div>
    );
}

export default LoginPage;
