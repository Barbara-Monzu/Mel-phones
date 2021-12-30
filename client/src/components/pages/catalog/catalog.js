import { useState, useEffect } from "react"
import PhonesService from '../../../services/phones.service'
import PhoneCard from '../phoneCard/phoneCard'
import { Button, Modal } from 'react-bootstrap'
import EditForm from '../editForm/editForm'
import SearchBar from '../searchBar/searchBar'
import Spinner from '../../shared/spinner/spinner'
import "./catalog.css"

const phonesSvc = new PhonesService()

const Catalog = () => {

    const [allPhones, setAllPhones] = useState([])
    const [allPhonesCopy, setCopy] = useState([])
    const [orderByPrice, setOrderByPrice] = useState(false)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        getCatalog()

    }, [modal])

    const getCatalog = () => {
        phonesSvc.getAllPhones()
            .then(res => {
                setAllPhones(res.data)
                setCopy(res.data)
            })
            .catch(err => console.log(err))
    }

    const searchProduct = (searchValue) => {

        let filteredProducts = allPhonesCopy.filter((elm) =>
            elm.name.toLowerCase().includes(searchValue));
        setAllPhones(filteredProducts);


    };

    const searchByPrice = (price) => {

        if (price === "Cheap") {

            let filteredProducts = allPhonesCopy.sort((a, b) =>
                parseFloat(a.price) - parseFloat(b.price));

            setAllPhones(filteredProducts);
            setOrderByPrice(!orderByPrice)
        }
        else {
            let filteredProducts = allPhonesCopy.sort((a, b) =>
                parseFloat(b.price) - parseFloat(a.price));

            setAllPhones(filteredProducts);
            setOrderByPrice(!orderByPrice)
        }

    };

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }


    console.log("TODOS LOS PHONES _____>>>>>", allPhones)

    return (
        <>
            {/* {!allPhones ? <Spinner/> :  */}
            <SearchBar searchProduct={searchProduct} searchByPrice={searchByPrice} />
            <Button variant="success" onClick={() => openModal()} >Create Phone </Button>
            <div className="container-wrap mt-5">
                {allPhones?.map((elm, i) => <PhoneCard key={i} phone={elm} getCatalog={getCatalog} />)}
            </div>

            <Modal show={modal} backdrop="static" onHide={closeModal}>

                <Modal.Header closeButton>
                    <Modal.Title>Edit Phone</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditForm closeModal={closeModal} />
                </Modal.Body>

            </Modal>

        </>


    )
}


export default Catalog;