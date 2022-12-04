import { useState, useEffect } from 'react';

function PropertyContainer(){
    const [allProperties, setAllProperties] = useState([])
    //if owner has logged in
    useEffect(()=> {
        const getProperties = async () => {
            let req = await fetch('/properties')

            if (req.ok){
                let res = await req.json()
                setAllProperties(res)
            }else{
                console.error("No data :(")
            }      
        }
        getProperties();
    },[])
    console.log(allProperties)

    //if tenant has logged in
   
    return (
        <>
            <div>All Properties</div>
        </>
    )
}

export default PropertyContainer;