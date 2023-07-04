import { createContext } from "react";
import { useReducer } from "react";
import { authReducer } from "../reducer/AuthReducer";


export const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const token =localStorage.getItem("token");
    const [stateAuth, dispatchAuth] = useReducer(authReducer, {
        userDetails: [],
        token: token ?? null,
        isAuth: token ? true : false,
      });
 return(
    <AuthContext.Provider value={{stateAuth,dispatchAuth}}>
     {children}
    </AuthContext.Provider>
 )
}