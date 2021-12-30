import { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import PhonesService from '../../../services/phones.service'
import UploadsService from '../../../services/uploads.service'

const phonesSvc = new PhonesService()
const uploadsSvc = new UploadsService()

const EditForm = (props) => {


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

        setFormData({ ...formData, loading: true })

        const uploadedData = new FormData()
        uploadedData.append('imageData', e.target.files[0])

        uploadsSvc
            .uploadImage(uploadedData)
            .then(res => setFormData({ ...formData, loading: false, imageFileName: res.data.cloudinary_url }))
            .catch(err => console.error(err))

    }

    const handleSubmit = e => {
        e.preventDefault()

        props.phone ?
            (phonesSvc
                .edit(formData)
                .then(response => {
                    props.closeModal()
                    console.log("BIEN! EDITANDO PHONES", response.data)
                })
                .catch(err => console.error(err)))
            :
            (phonesSvc
                .create(formData)
                .then(response => {
                    props.closeModal()
                    console.log("BIEN! CREANDO MI PRIMERA CITA", response.data)
                })
                .catch(err => console.error(err)))


    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="name" value={formData.name} onChange={e => handleChange(e)} type="text" placeholder="Name" />
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
                    <Form.Control name="price" value={formData.price} onChange={e => handleChange(e)} type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="imageFileName" onChange={(e) => handleFile(e)} type="file" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="screen" value={formData.screen} onChange={e => handleChange(e)} type="text" placeholder="Screen" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="processor" value={formData.processor} onChange={e => handleChange(e)} type="text" placeholder="Processor" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="ram" value={formData.ram} onChange={e => handleChange(e)} type="text" placeholder="Ram" />
                </Form.Group>
                {props.phone ?
                    (<button className="signup" style={{ cursor: "pointer" }}>
                        Editar
                    </button>)
                    :
                    (<button className="signup" style={{ cursor: "pointer" }}>
                        Crear
                    </button>)}


            </Form>
        </>
    )
}
export default EditForm