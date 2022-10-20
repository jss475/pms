import React, {useState, createContext} from "react"

export const OwnerContext = createContext()

function OwnerProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(()=> {
        const logged = localStorage.getItem("loggedIn")
        return logged==="true" ? true : false
    })
    return (
        <OwnerContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </OwnerContext.Provider>
    )
}

export {OwnerProvider}