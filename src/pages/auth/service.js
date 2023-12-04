import client, { removeAuthorizationHeader, setAuthorizationHeader } from"../../api/client";
import storaje from "../../utils/storaje";
export const login=(credentials) =>{
return client.post('/api/auth/login', credentials)
.then(({accessToken})=>{
    {setAuthorizationHeader(accessToken)
    storaje.set('auth',accessToken);
    };
});
};
export const logout =()=> {
    return Promise.resolve().then(()=>{
        removeAuthorizationHeader();
        storaje.remove('auth');
    });
};