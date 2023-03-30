import React, {useState} from 'react'

export const AuthContext=React.createContext()

export default function AuthContextProvider ({children}) {
    const [isAuth,setIsAuth]=useState(false)
    const [token,setToken]=useState("")

    const login=(token)=>{
        setIsAuth(true)
        setToken(token)
    }

    const logout=()=>{
        setIsAuth(false)
        setToken("")
    }


  return (
    <AuthContext.Provider value={{isAuth, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}
