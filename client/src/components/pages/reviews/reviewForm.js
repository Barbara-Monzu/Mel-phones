
import React, { useState, useEffect, useContext } from 'react'
// import {Link} from 'react-router-dom'
import { Container, Col, Button, Form } from "react-bootstrap";
import ReviewService from '../../../services/reviews.service';
const reviewSvc = new ReviewService()

const ReviewForm = (props) => {

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    "rating": "",
    "description": "",
    "reviewOwner": "",

  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

  }

  const handleSubmit = e => {
    e.preventDefault()

    reviewSvc
      .create(props.id, formData)
      .then(response => props.closeForm())
      .catch(err => console.error(err))

  }


  return (

    <Container >

      <Col ms={12}>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control name="reviewOwner" value={formData.reviewOwner} onChange={e => handleChange(e)} type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control name="rating" value={formData.rating} onChange={e => handleChange(e)} type="number" maxlength="6" placeholder="Rating" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control name="description" value={formData.description} onChange={e => handleChange(e)} type="text" placeholder="Description" />
          </Form.Group>

          <Button variant="secondary" type='submit' style={{ margin: '10px' }}>Send comments </Button>

        </Form>
      </Col>

    </Container>


  )

}


export default ReviewForm