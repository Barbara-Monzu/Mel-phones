
import React, { useState, useEffect, useRef } from 'react'
// import {Link} from 'react-router-dom'
import { Container, Col, Button, Form, Row } from "react-bootstrap";
import ReviewService from '../../../services/reviews.service';
const reviewSvc = new ReviewService()

const ReviewForm = (props) => {


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

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" })
}, [])

  return (

    <Container >
      <div ref={divRef}></div>
      <Col ms={12}>
        <Form onSubmit={handleSubmit}>
        
          <p className="mx-5">Rating:</p>
          <div className="d-flex flex-row text-center mx-sm-5">
      
              <Form.Group className="mx-2 mb-2" controlId="formBasicCheckbox">
                <p className="editProfile-data">1</p>
                <Form.Check name="rating" value="1" onChange={e => handleChange(e)} type="radio" />
              </Form.Group>
              <Form.Group className="mx-2 mb-2" controlId="formBasicCheckbox">
                <p className="editProfile-data">2</p>
                <Form.Check name="rating" value="2" onChange={e => handleChange(e)} type="radio" />
              </Form.Group>
              <Form.Group className="mx-2 mb-2" controlId="formBasicCheckbox">
                <p className="editProfile-data">3</p>
                <Form.Check name="rating" value="3" onChange={e => handleChange(e)} type="radio" />
              </Form.Group>
              <Form.Group className="mx-2 mb-2" controlId="formBasicCheckbox">
                <p className="editProfile-data">4</p>
                <Form.Check name="rating" value="4" onChange={e => handleChange(e)} type="radio" />
              </Form.Group>
              <Form.Group className="mx-2 mb-2" controlId="formBasicCheckbox">
                <p className="editProfile-data">5</p>
                <Form.Check name="rating" value="5" onChange={e => handleChange(e)} type="radio" />
              </Form.Group>
 
          </div>

          <p className="mx-5">Your name:</p>
          <Form.Group className="mb-3 mx-sm-5" controlId="formBasicEmail">
            <Form.Control name="reviewOwner" value={formData.reviewOwner} onChange={e => handleChange(e)} type="text" placeholder="Your name" />
          </Form.Group>

          <p className="mx-5">Your comment:</p>
          <Form.Group className="mb-3 mx-sm-5" controlId="formBasicEmail">
            <Form.Control name="description" value={formData.description} onChange={e => handleChange(e)} type="text" placeholder="Description" />
          </Form.Group>
          
          <Button variant="secondary mx-5 my-3" type='submit'>Send comments </Button>
          
        </Form>
      </Col>

    </Container>


  )

}


export default ReviewForm