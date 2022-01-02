import React, { useState, useEffect, useContext } from "react"
import { useParams, Link } from 'react-router-dom'
import { ReactComponent as ShoppingCart } from '../../../img/shopping-cart.svg'
import { Modal, Button, Container, Col, Row } from 'react-bootstrap'
import { AddToCart } from '../../../App'
import PhonesService from '../../../services/phones.service'
import EditForm from '../editForm/editForm'
import ShowReviews from '../reviews/reviews'
import Spinner from '../../shared/spinner/spinner'

const phonesSvc = new PhonesService()

const DetailsPhone = () => {

    const { id } = useParams()
    const { addPhone } = useContext(AddToCart)

    const [phone, setPhone] = useState([])
    const [modal, setModal] = useState(false)
    const [modalBuy, setModalBuy] = useState(false)
    const [showReviews, setShowReviews] = useState(false)


    useEffect(() => {
        getDetails()

    }, [modal])

    const getDetails = () => {
        phonesSvc.getOne(id)
            .then(res => setPhone(res.data))
            .catch(err => console.log(err))
    }

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const openModalBuy = () => {
        addPhone(phone)
        setModalBuy(true)
    }


    return (
        <>
            {!phone ? (<Spinner shape="circle"/>)
                : (<Container className="mt-5 container">
                    <Row>
                        <Col className="mt-5 mx-5" xs={{ order: 'last' }}>

                            <h4><strong>Information about the product</strong></h4>
                            <p><strong>Name: </strong>{phone?.name}</p>
                            <p><strong>Manufacturer: </strong>{phone?.manufacturer}</p>
                            <p><strong>Color: </strong>{phone?.color}</p>
                            <p><strong>Descrption: </strong>{phone?.description}</p>
                            <p><strong>Price: </strong>{phone?.price?.toFixed(2)} €</p>
                            <p><strong>Screen: </strong>{phone?.screen}</p>
                            <p><strong>Processor: </strong>{phone?.processor}</p>
                            <p><strong>Ram: </strong>{phone?.ram}</p>
                            <h4><strong>Free shipping</strong></h4>

                            <Button className="text-center mt-2" as={Link} to={'/'} variant="dark">Volver</Button>

                        </Col>

                        <Col className="my-3 mb-5">
                            <Container className="text-center">

                                <img className=" my-3" src={phone?.imageFileName} style={{ width: '300px', height: '350px', objectFit: "cover" }} alt="" />

                                <Button variant="warning" className="mt-3 text-center mx-1" style={{ width: '250px' }} onClick={() => openModalBuy()}>Buy
                                    <ShoppingCart fill="black" style={{ width: "20px", height: "20px", marginLeft: "20px" }} />
                                </Button>

                                <Button variant="success" className="mt-3 text-center mx-1" style={{ width: '250px' }} onClick={() => openModal()}>Edit</Button>
                                <Button variant="secondary" className="mt-3 text-center mx-1" style={{ width: '250px' }} onClick={() => setShowReviews(true)}>Reviews</Button>

                            </Container>
                        </Col>

                    </Row>

                </Container>
                )
            }

            <Modal show={modal} backdrop="static" onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Phone</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm closeModal={closeModal} phone={phone} />
                </Modal.Body>
            </Modal>

            <Modal show={modalBuy} backdrop="static" onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>¿Do you want to continue shopping?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className="text-center">
                        <Button as={Link} to={'/'} variant="warning" className="mt-3" style={{ width: '300px' }}>Yes</Button>
                        <Button as={Link} to={'/cart'} variant="warning" className="mt-3" style={{ width: '300px' }}>Go to pay</Button>
                    </Container>
                </Modal.Body>
            </Modal>

            {showReviews && <ShowReviews {...phone} />}

        </>
    )
}

export default DetailsPhone
