import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function PropertyCard({property}){
    //destructure the individual property object
    const {property_name, street_address, city, state, zip_code, bedroom_count, bathroom_count, rental_amount, total_rental_amount,
        total_balance, property_size, lease_start_date, lease_end_date} = property 
  
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>{property_name}</Card.Title>
                    <Card.Text>
                        {street_address} {city}, {state} {zip_code}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Bedroom: {bedroom_count} Bathroom: {bathroom_count}</ListGroup.Item>
                    <ListGroup.Item>Property Size: {property_size}</ListGroup.Item>
                    <ListGroup.Item>Rental Amount (per month): {rental_amount}</ListGroup.Item>
                    <ListGroup.Item>Paid on Time</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <ListGroup>
                        <ListGroup.Item>Lease Start Date: {lease_start_date}</ListGroup.Item>
                        <ListGroup.Item>Lease End Date: {lease_end_date}</ListGroup.Item>
                    </ListGroup>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </Col>
       
    )
}

export default PropertyCard