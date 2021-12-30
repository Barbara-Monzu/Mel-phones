import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Table, Button, Modal } from 'react-bootstrap'
import { AddToCart } from '../../../App'
import deleteIcon from '../../../img/delete.svg'
import Spinner from '../../shared/spinner/spinner'

const ShoppingCart = () => {

    const { shoppingCart, setCountCart } = useContext(AddToCart)
    const [total, setTotal] = useState(undefined)
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (shoppingCart?.length !== 0) && totalPrice();

    }, [shoppingCart.length])


    useEffect(() => {
        setLoading(true)

    }, [])


    const totalPrice = () => {
        let sum = shoppingCart?.reduce((sum, li) => ({ price: sum.price + li.price }))
        setTotal(sum)
    }

    const deleteItem = (item) => {
        let index = shoppingCart.indexOf(item)
        shoppingCart.splice(index, 1)
        setCountCart(shoppingCart.length)

    }

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }



    return (
        <>
            {!loading ? <Spinner shape="circle" /> :
                <>
                    {(shoppingCart.length === 0)
                        ?
                        <div className="container" style={{ height: 'calc(100vh - 230px)' }}>
                            <p className="text-center my-5" >Aún no has comprado nada</p>
                            <Button variant="success container" className="" as={Link} to={'/catalog'}>Ir al catálogo</Button>
                        </div>
                        :
                        <div className="my-4 container px-5" style={{ height: 'calc(100vh - 270px)' }}>
                            <p className="text-center">Tu compra</p>
                            <Table hover className="my-3">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        {/* <th>Quantity</th> */}
                                        <th>Total</th>
                                    </tr>
                                </thead>

                                {shoppingCart.map((elm, i) => (
                                    <tbody key={i}>
                                        <tr>
                                            <td><img style={{ width: '20px', height: '20px' }} src={elm.imageFileName} alt={elm.name} /></td>
                                            <td>{elm.name}</td>
                                            <td>{elm.price.toFixed(2)} €</td>
                                            {/* <td>{elm.quantity}</td> */}
                                            <td><img style={{ cursor: 'pointer', width: '20px', height: '20px' }} src={deleteIcon} alt="delete" onClick={() => deleteItem(elm)} /></td>
                                        </tr>
                                    </tbody>))}

                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>{total?.price.toFixed(2)} €</td>
                                    </tr>
                                </tbody>

                            </Table>
                            <Button variant="success container" className="my-4" onClick={() => openModal()}>Buy </Button>
                        </div>
                    }

                    <Modal show={modal} backdrop="static" onHide={closeModal}>

                        <Modal.Header closeButton>
                            <Modal.Title>Sing Up</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <>Tienes que estar registrado para poder hacer compras en la web</>
                            {/* <SingUpForm closeModal={closeModal}/> */}
                        </Modal.Body>

                    </Modal>

                </>
            }
        </>
    )
}

export default ShoppingCart
