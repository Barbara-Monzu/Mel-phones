import React, { useState, useEffect, useContext } from "react"
import { Modal, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import PhonesService from '../../../services/phones.service'
import { Link } from 'react-router-dom'
import { AddToCart } from '../../../App'
import EditForm from '../editForm/editForm'



const phonesSvc = new PhonesService()

const DetailsPhone = () => {

    const { id } = useParams()

    const { addPhone } = useContext(AddToCart)

    const [phone, setPhone] = useState([])
    const [modal, setModal] = useState(false)

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



    return (
        <>

            <div className="container mt-5">

                <img src={phone?.imageFileName} alt="" />

                <div className="my-5 mx-5">

                    <p>{phone?.name}</p>
                    <p>{phone?.color}</p>
                    <p>{phone?.description}</p>
                    <p>{phone?.price}</p>
                    <p>{phone?.screen}</p>
                    <p>{phone?.processor}</p>
                    <p>{phone?.ram}</p>
                    <p>{phone?.manufacturer}</p>
                    <Button variant="warning" onClick={() => addPhone(phone)}>Comprar</Button>
                    <Button variant="warning" onClick={() => openModal()}>Editar</Button>
                    <Button as={Link} to={'/catalog'} >Volver</Button>

                </div>

            </div>

            <Modal show={modal} backdrop="static" onHide={closeModal}>

                <Modal.Header closeButton>
                    <Modal.Title>Edit Phone</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditForm closeModal={closeModal} phone={phone} />
                </Modal.Body>

            </Modal>

        </>
    )
}

export default DetailsPhone
