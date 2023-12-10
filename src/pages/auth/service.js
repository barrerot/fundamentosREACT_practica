import client, { removeAuthorizationHeader, setAuthorizationHeader } from "../../api/client";
import storaje from "../../utils/storaje";

export const login = (credentials, rememberMe) => {
    return client.post('/api/auth/login', credentials)
        .then(({ accessToken }) => {
            setAuthorizationHeader(accessToken);
            if (rememberMe) {
                storaje.set('auth', accessToken); // Guardar en localStorage
            } else {
                sessionStorage.setItem('auth', accessToken); // Guardar en sessionStorage
            }
        });
};

export const logout = () => {
    return Promise.resolve().then(() => {
        removeAuthorizationHeader();
        storaje.remove('auth'); // Limpiar localStorage
        sessionStorage.removeItem('auth'); // Limpiar sessionStorage
    });
};
