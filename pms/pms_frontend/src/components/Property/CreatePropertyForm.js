
import React, { useState, useContext } from 'react'
import { Form, Button } from "react-bootstrap";
import { OwnerContext } from "../../features/login_signup/OwnerContext"


function CreatePropertyForm(){
    //use state for if the checkbox has been checked for apartment/single family home
    const [checked, setChecked] = useState(true)
    //check to see if an owner is logged in
    const {ownerIsLoggedIn} = useContext(OwnerContext)
    //use state to take in formData w/onChange event
    const [formData, setFormData] = useState({
        property_name: "",
        street_address: "",
        city: "",
        state: "",
        zip_code: "",
        bedroom_count: "",
        bathroom_count: "",
        total_rental_amount: "",
        property_size: "",
        lease_start_date: "",
        lease_end_date: "",
    })

    // function CheckBoxChange(){
    //     setChecked(!checked)
    // }

    function handleInputChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    console.log(formData)
    return (
        <>
            <Form className="ms-5 me-5" >
                {/* <Form.Group className="mb-3" controlId="new-property-apartment">
                    <Form.Check type="checkbox" onChange={CheckBoxChange} label="Is this an apartment?/Are you renting out the entire property as one unit?" />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="new-property-name">
                    <Form.Label>Property Name</Form.Label>
                    <Form.Control name="property_name" onChange={handleInputChange} placeholder="Enter Property Name"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="new-property-street-address">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control name="street_address" onChange={handleInputChange} placeholder="Enter Street Address"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="new-property-city">
                    <Form.Label>City</Form.Label>
                    <Form.Control name="city" onChange={handleInputChange} placeholder="Enter City"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="new-property-state">
                    <Form.Label>State</Form.Label>
                    <Form.Control name="state" onChange={handleInputChange} placeholder="Enter State"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="new-property-zip-code">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control name="zip_code" onChange={handleInputChange} placeholder="Enter Zip Code"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="new-property-size">
                    <Form.Label>Total Property Size</Form.Label>
                    <Form.Control name="property_size" onChange={handleInputChange} placeholder="Enter Total Property Size (sq. ft.)"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="new-property-bedroom-count">
                    <Form.Label>Total Bedroom Count</Form.Label>
                    <Form.Control name="bedroom_count" onChange={handleInputChange} placeholder="Enter Total Bedroom Count"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="new-property-bathroom-count">
                    <Form.Label>Total Bathroom Count</Form.Label>
                    <Form.Control name="bathroom_count" onChange={handleInputChange} placeholder="Enter Total Bathroom Count"></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="new-property-rental-amount">
                    <Form.Label>Total Rental Amount</Form.Label>
                    <Form.Control name="total_rental_amount" onChange={handleInputChange} placeholder="Enter Total Rental Amount"></Form.Control>
                </Form.Group>
                {checked ? 
                    <>
                        <Form.Group className="mb-3" controlId="new-property-lease-start-date">
                            <Form.Label>Lease Start Date</Form.Label>
                            <Form.Control name="lease_start_date" onChange={handleInputChange} placeholder="Enter Lease Start Date"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="new-property-lease-end-date">
                            <Form.Label>Lease End Date</Form.Label>
                            <Form.Control name="lease_end_date" onChange={handleInputChange} placeholder="Enter Lease End Date"></Form.Control>
                        </Form.Group>
                    </>
                    : null
                }
                {ownerIsLoggedIn ? 
                    <Button variant="primary" type="submit">Submit</Button>
                    : <Button variant="primary" type="submit" disabled>Submit</Button>
                }
                
            </Form>
        </>
    )
}

export default CreatePropertyForm;