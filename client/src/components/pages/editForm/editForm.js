import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import PhonesService from '../../../services/phones.service'
import UploadsService from '../../../services/uploads.service'
import Spinner from '../../shared/spinner/spinner'

const phonesSvc = new PhonesService()
const uploadsSvc = new UploadsService()

const EditForm = (props) => {

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        "id": undefined,
        "name": "",
        "manufacturer": "",
        "description": "",
        "color": "",
        "price": undefined,
        "imageFileName": "",
        "screen": "",
        "processor": "",
        "ram": undefined
    })

    useEffect(() => {
        props.phone ?
            setFormData({
                _id: props.phone._id,
                id: props.phone.id,
                name: props.phone.name,
                manufacturer: props.phone.manufacturer,
                description: props.phone.description,
                color: props.phone.color,
                price: props.phone.price,
                imageFileName: props.phone.imageFileName,
                screen: props.phone.screen,
                processor: props.phone.processor,
                ram: props.phone.ram

            })
            :

            setFormData({
                "id": undefined,
                "name": "",
                "manufacturer": "",
                "description": "",
                "color": "",
                "price": undefined,
                "imageFileName": "",
                "screen": "",
                "processor": "",
                "ram": undefined

            })

    }, [])


    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleFile = e => {

        setLoading(true)
        setFormData({ ...formData })

        const uploadedData = new FormData()
        console.log("e.target ====>", e.target.files)
        for (let i = 0; i < e.target.files.length; i++) {
            uploadedData.append('imageData', e.target.files[i]);
        }
        // uploadedData.append('imageData', e.target.files[0])
        console.log("uploadedData ====>", uploadedData)

        uploadsSvc
            .uploadImage(uploadedData)
            .then(res => {
                console.log("CLOUDINARY",res.data.cloudinary_url)
                setFormData({ ...formData, imageFileName: res.data.cloudinary_url });
                setLoading(false)
            })
            .catch(err => console.error(err))

    }

    const handleSubmit = e => {
        e.preventDefault()

        props.phone ?
            (phonesSvc
                .edit(formData)
                .then(response => props.closeModal())
                .catch(err => console.error(err)))
            :
            (phonesSvc
                .create(formData)
                .then(response => 
                    {props.allPhones.unshift(response.data)
                    props.closeModal()})
                .catch(err => console.error(err)))

    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="name" value={formData.name} onChange={e => handleChange(e)} type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="id" value={formData.id} onChange={e => handleChange(e)} type="number" placeholder="Id" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="manufacturer" value={formData.manufacturer} onChange={e => handleChange(e)} type="text" placeholder="Manufacturer" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="description" value={formData.description} onChange={e => handleChange(e)} type="text" label="" placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="color" value={formData.color} onChange={e => handleChange(e)} type="text" placeholder="Color" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="price" value={formData.price} onChange={e => handleChange(e)} type="number" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="imageFileName" onChange={(e) => handleFile(e)} type="file" multiple/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="screen" value={formData.screen} onChange={e => handleChange(e)} type="text" placeholder="Screen" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="processor" value={formData.processor} onChange={e => handleChange(e)} type="text" placeholder="Processor" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="ram" value={formData.ram} onChange={e => handleChange(e)} type="number" placeholder="Ram" />
                </Form.Group>

                {loading && <Spinner shape="circle" />}
                
                {props.phone ?
                    (<Button disabled={loading} variant="primary" type="submit">
                        Edit
                    </Button>)
                    :
                    (<Button disabled={loading} variant="primary" type="submit">
                        Create
                    </Button>)}
            </Form>
        </>
    )
}
export default EditForm