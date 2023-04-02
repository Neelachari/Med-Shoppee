import React, {useState} from 'react'

export const AuthContext=React.createContext()

export default function AuthContextProvider ({children}) {
    const [isAuth,setIsAuth]=useState(false)
    const [token,setToken]=useState("")
    const [data,setdata]=useState([])

    const login=()=>{
        setIsAuth(true)
        
    }

    const logout=()=>{
        setIsAuth(false)
    }


  return (
    <AuthContext.Provider value={{isAuth, login, logout,data,setdata}}>
        {children}
    </AuthContext.Provider>
  )
}
