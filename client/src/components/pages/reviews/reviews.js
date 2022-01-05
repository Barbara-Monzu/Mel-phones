
import React, { useState, useEffect, useRef } from 'react'
import { Container, Button, Modal } from "react-bootstrap";
import ReviewService from '../../../services/reviews.service';
import ReviewFrom from './reviewForm';
import PersonalReview from './personalReview';
import './reviews.css'

const reviewSvc = new ReviewService()

const ShowReviews = ({ _id }) => {
    
    const [productReviews, setProductReviews] = useState(undefined)
    const [modal, setModal] = useState(false)
    const [hiddenButton, setHiddenButton] = useState(false)
    const divRef = useRef(null);

    useEffect(() => {
        filterReviews()

    }, [modal])

    const filterReviews = () => {

        reviewSvc
            .get(_id)
            .then(response => setProductReviews(response.data))
            .catch(err => console.error(err))
    }

    const openForm = () => {
        setModal(true)
        setHiddenButton(true)
    }

    const closeForm = () => {
        setModal(false)
    }


    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" })
    }, [])

    return (

        <Container>

            <div ref={divRef}></div>
            {(productReviews?.length === 0) ?

                (<div className="text-center container my-4">
                    <p><strong>Be the first to leave your comment</strong></p>
                    {!hiddenButton && <Button variant="secondary my-4" onClick={() => openForm()} >Add a Review</Button>}
                </div>)

                : (<div className="text-center my-5">
                    {!hiddenButton && <Button variant="secondary" onClick={() => openForm()} >Add a Review</Button>}
                    {productReviews?.reverse().map((review, i) => <PersonalReview key={i} {...review} />)}
                </div>)
            }

            {modal && <ReviewFrom id={_id} closeForm={closeForm} />}

        </Container>

    )

}

export default ShowReviews