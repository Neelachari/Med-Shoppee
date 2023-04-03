import React, {useState} from 'react'

export const AuthContext=React.createContext()

export default function AuthContextProvider ({children}) {
    const [isAuth,setIsAuth]=useState(false)
    const [token,setToken]=useState("")
    const [data,setdata]=useState([])

    


  return (
    <AuthContext.Provider value={{isAuth,setIsAuth,data,setdata}}>
        {children}
    </AuthContext.Provider>
  )
}
