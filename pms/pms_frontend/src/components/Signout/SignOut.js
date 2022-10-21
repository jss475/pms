export const handleSignOut = async () => {
    //delete username from localstorage so that no one is logged in
    //after refresh
    localStorage.removeItem("username")
    localStorage.removeItem("id")
    await fetch("/logout_owners", {
        method: "DELETE"
    });
    
}

