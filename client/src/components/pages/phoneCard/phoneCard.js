
import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { AddToCart } from '../../../App'
import PhonesService from '../../../services/phones.service'

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

        <Card className="text-center mx-3 my-2" style={{ width: '12rem' }}>
            <Card.Img variant="top" src={props.phone.imageFileName} style={{ width: '200px', heigth: '200px' }} />
            <Card.Body>
                <Card.Title>{props.phone.name}</Card.Title>
                <Card.Text>
                    {props.phone.price.toFixed(2)} €
                </Card.Text>
                <Button className="my-2" as={Link} to={`/details/${props.phone._id}`} variant="warning" >Details</Button>
                <Button className="my-2" variant="warning" onClick={() => addPhone(props.phone)} >Add to Cart <img style={{ width: '20px', height: '20px' }} src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="cart" /></Button>
                <Button variant="success" onClick={() => deletePhone(props.phone._id)} >Delete </Button>
            </Card.Body>
        </Card>

    )
}

export default PhoneCard