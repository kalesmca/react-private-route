import React, {useEffect, useState} from "react";
export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    useEffect(()=>{
        setUser({name:"kalees", status:"ACTIVE"})
    },[])

    return(
        <AuthContext.Provider
        value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}