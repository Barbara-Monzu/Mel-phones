import React, { useContext } from "react"
import { ReactComponent as ShoppingCart } from '../../../img/shopping-cart.svg'
import { Link } from 'react-router-dom'
import { Card, Button, Container } from 'react-bootstrap'
import { AddToCart } from '../../../App'
import PhonesService from '../../../services/phones.service'
import './phoneCard.css'

const phonesSvc = new PhonesService()

const PhoneCard = (props) => {

    const { addPhone } = useContext(AddToCart)

    const deletePhone = (id) => {
        phonesSvc
            .delete(id)
            .then(response => props.getCatalog(0))
            .catch(err => console.error(err))

    }

    return (

        <Card className="card-type" style={{ width: "16rem", margin: "25px 20px" }}>

            <Card.Img variant="top" src={props.phone?.imageFileName[0]} style={{ width: "100%", height: "200px", objectFit: "cover" }} />

            <Card.Body>
                <Card.Title>{props.phone?.name}</Card.Title>
                <Card.Text>
                    {props.phone?.price?.toFixed(2)} €
                </Card.Text>
                <Container>
                    <Button variant="danger mx-2" onClick={() => deletePhone(props.phone._id)} >Delete </Button>
                    <Button variant="dark my-2 mx-2" as={Link} to={`/details/${props.phone._id}`}  >Details</Button>
                </Container>
                <Button className="my-2" variant="warning container" onClick={() => addPhone(props.phone)} >
                    Add to Cart
                    <ShoppingCart fill="black" style={{ width: "20px", height: "20px", marginLeft: "20px" }} />
                </Button>
            </Card.Body>

        </Card>

    )
}

export default PhoneCard