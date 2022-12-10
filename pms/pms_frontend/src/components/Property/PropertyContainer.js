import { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import Row from 'react-bootstrap/Row';
import "./PropertyContainer.css"

function PropertyContainer(){
    const [allProperties, setAllProperties] = useState([])
    //if owner has logged in
    useEffect(()=> {
        const getProperties = async () => {
            let req = await fetch('/properties')

            if (req.ok){
                let res = await req.json()
                console.log(res)
                setAllProperties(res)
            }else{
                console.error("No data :(")
            }      
        }
        getProperties();
    },[])

    //if tenant has logged in
   
    return (
        <>
            <div>All Properties</div>
            <div className = 'propContainerRow'>
                <Row xs={'auto'} md={'auto'} lg={'auto'} className="g-3">
                    {allProperties.map(property => {
                        return <PropertyCard key={property.id} property={property}/>
                    })}
                </Row>
            </div>

        </>
    )
}

export default PropertyContainer;