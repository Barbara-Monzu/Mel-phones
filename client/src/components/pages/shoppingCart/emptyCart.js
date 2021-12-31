
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import catalogImg from '../../../img/catalog.jpeg'

const emptyCart = (props) => {
    return (

        <div className="container text-center" style={{ height: 'calc(100vh - 230px)' }}>

            <p className="my-5">You do not have articles in you shopping cart</p>
            <img style={{ width: "600px", height: "400px" }} src={catalogImg} alt="catalog" />
            <Button variant="warning container" className="my-5" as={Link} to={'/'}>See the catalog</Button>

        </div>

    )
}

export default emptyCart

