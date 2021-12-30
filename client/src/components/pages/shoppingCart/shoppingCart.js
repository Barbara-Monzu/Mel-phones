import React, { useState, useEffect, useContext } from 'react'
import { Table } from 'react-bootstrap'
import { AddToCart } from '../../../App'

const ShoppingCart = () => {

    const { shoppingCart } = useContext(AddToCart)
    const [total, setTotal] = useState(undefined)

    useEffect(() => {
        (shoppingCart.length !== 0) &&
            totalPrice()

    }, [shoppingCart])

    const totalPrice = () => {
        let sum = shoppingCart.reduce((sum, li) => ({ price: sum.price + li.price }))
        console.log("SUM", sum)
        setTotal(sum)
    }




    return (
        <div className="my-4 container">
            <p>Tu compra</p>
            <Table hover className="my-4">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>

                {shoppingCart?.map((elm, i) => (
                    <tbody>
                        <tr>
                            <td><img style={{ width: '20px', height: '20px' }} src={elm.imageFileName} alt={elm.name} /></td>
                            <td>{elm.name}</td>
                            <td>{elm.price}</td>
                            <td></td>
                        </tr>
                    </tbody>))}
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{total?.price}</td>
                    </tr>
                </tbody>

            </Table>
        </div>
    )
}

export default ShoppingCart
