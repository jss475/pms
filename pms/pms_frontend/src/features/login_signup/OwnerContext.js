import React, {useState, createContext} from "react"

export const OwnerContext = createContext()

function OwnerProvider({children}){
    //if the localstorage has a username, set the log in value to be true
    const [ownerIsLoggedIn, setOwnerIsLoggedIn] = useState(()=> {
        const logged = localStorage.getItem("username")
        return logged ? true : false
    })
    //return the state and state function as a provider for all of the children under it
    return (
        <OwnerContext.Provider value={{ownerIsLoggedIn, setOwnerIsLoggedIn}}>
            {children}
        </OwnerContext.Provider>
    )
}

export {OwnerProvider}