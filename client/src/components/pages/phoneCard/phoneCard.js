
import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { AddToCart } from '../../../App'
import PhonesService from '../../../services/phones.service'
import './phoneCard.css'

const phonesSvc = new PhonesService()

const PhoneCard = (props) => {


    const { addPhone } = useContext(AddToCart)

    const deletePhone = (id) => {
        phonesSvc
            .delete(id)
            .then(response => props.getCatalog())
            .catch(err => console.error(err))

    }

    return (

        <Card className="card-type" style={{ width: "17rem", margin: "25px 10px" }}>
            <Card.Img variant="top" src={props.phone.imageFileName} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
            <Card.Body>
                <Card.Title>{props.phone.name}</Card.Title>
                <Card.Text>
                    {props.phone.price.toFixed(2)} €
                </Card.Text>
                <div className="container">
                    <Button variant="danger" onClick={() => deletePhone(props.phone._id)} >Delete </Button>
                    <Button variant="dark my-2 mx-3" as={Link} to={`/details/${props.phone._id}`}  >Details</Button>
                </div>
                <Button className="my-2" variant="warning container" onClick={() => addPhone(props.phone)} >Add to Cart <img style={{ width: '20px', height: '20px' }} src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="cart" /></Button>
            </Card.Body>
        </Card>

    )
}

export default PhoneCard