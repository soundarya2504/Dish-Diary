import React,{createContext,useContext,useState} from 'react'
export const AuthContext=createContext();
export default function AuthProvider({children}){
    const[user,setUser]=useState(null)
    const login=(username)=>{
        setUser(username)
    }
    const logout=()=>{
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>
    )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}
