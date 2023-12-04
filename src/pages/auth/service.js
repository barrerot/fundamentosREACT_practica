import client, { setAuthorizationHeader } from"../../api/client";
import storaje from "../../utils/storaje";
export const login=(credentials) =>{
return client.post('/api/auth/login', credentials)
.then(({accessToken})=>{
    {setAuthorizationHeader(accessToken)
    storaje.set('auth',accessToken);
    };
});
};