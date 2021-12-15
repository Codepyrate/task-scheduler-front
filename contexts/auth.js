import { createContext, useContext, useState,useEffect } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios'
const baseUrl = process.env.NEXT_PUBLIC_AUTH_URL;
const tokenUrl = baseUrl + 'api/token/';
const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error('You forgot AuthProvider!');
    return auth;}

export function AuthProvider(props) {

    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    });
useEffect(()=>{
    const save_auth=JSON.parse(localStorage.getItem("userAuth"))
    
    if (save_auth){
        const decodedAccess = jwt.decode(save_auth.access);
        const newState = {
            tokens: save_auth.access,
            user: {
                username: decodedAccess.username,
                email: decodedAccess.email,
                id: decodedAccess.user_id
            },
        }
        console.log(save_auth);
        setState(prevState => ({ ...prevState, ...newState }));
            }
        },[])
        
    async function login(username, password) {
        console.log(tokenUrl);    
        const response = await axios.post(tokenUrl, { username, password });
        const decodedAccess = jwt.decode(response.data.access);


        const newState = {
            tokens: response.data,
            user: {
                username: decodedAccess.username,
                email: decodedAccess.email,
                id: decodedAccess.user_id
            },
        }
        localStorage.setItem("userAuth",JSON.stringify(response.data))
        console.log(newState,"Auth login");

        setState(prevState => ({ ...prevState, ...newState }));
    }

    function logout() {
        localStorage.clear
        const newState = {
            tokens: null,
            user: null,
        }
        setState(prevState => ({ ...prevState, ...newState }));
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}