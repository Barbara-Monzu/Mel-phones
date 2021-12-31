
import React, { useState, useEffect } from 'react'
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

    useEffect(() => {
        filterReviews()

    }, [modal])

    const filterReviews = () => {

        reviewSvc
            .get(_id)
            .then(response => {
                console.log(response.data)
                setProductReviews(response.data)
            })
            .catch(err => console.error(err))
    }

    const openForm = () => {
        setModal(true)
        setHiddenButton(true)
    }

    const closeForm = () => {
        setModal(false)
    }

    return (

        <Container>
        
            {(productReviews?.length === 0) ?

                (<div className="text-center container">
                    <p><strong>Be the first to leave your comment</strong></p>
                    {!hiddenButton && <Button variant="secondary" onClick={() => openForm()} >Add a Review</Button>}
                </div>)

                : (<div className="text-center">
                    <Button variant="secondary" onClick={() => openForm()} >Add a Review</Button>
                    {productReviews?.reverse().map((review, i) => <PersonalReview key={i} {...review} />)}
                </div>)
            }
            {modal && <ReviewFrom id={_id} closeForm={closeForm} />}

        </Container>

    )

}

export default ShowReviews