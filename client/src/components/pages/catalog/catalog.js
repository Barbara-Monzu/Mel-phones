import { useState, useEffect } from "react"
import { Button, Modal, Col } from 'react-bootstrap'
import PhonesService from '../../../services/phones.service'
import PhoneCard from '../phoneCard/phoneCard'
import EditForm from '../editForm/editForm'
import SearchBar from '../searchBar/searchBar'
import Spinner from '../../shared/spinner/spinner'
import next from '../../../img/next.svg'
import "./catalog.css"

const phonesSvc = new PhonesService()

const Catalog = () => {

    const [allPhones, setAllPhones] = useState([])
    const [allPhonesCopy, setCopy] = useState([])
    const [orderByPrice, setOrderByPrice] = useState(false)
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        getCatalog(0)
        setLoading(true)

    }, [])

    const getCatalog = (page) => {
        phonesSvc
            .getAllPhones(page)
            .then(res => {
                setAllPhones(res.data)
                setCopy(res.data)
            })
            .catch(err => console.log(err))
    }

    const paginatioNext = () => {
        setPage(page + 1)
        console.log("PAGE +", page)
        getCatalog(page)

    }
    const paginatioBack = () => {
        page === 0 ? getCatalog(page) : setPage(page - 1)
        console.log("PAGE -", page)
        getCatalog(page)

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


    return (
        <>
            {!loading ? <Spinner shape="circle" />

                :
                <div className="container text-center" >

                    <h3 className=" my-4 mt-3 text-center" ><strong>List of Phones </strong></h3>
                    <SearchBar page={page} searchProduct={searchProduct} searchByPrice={searchByPrice} />
                    <Col as={Button} variant="info" style={{ width: '150px', margin: '20px' }} onClick={() => openModal()}>Create Phone </Col>

                    <div className="container-wrap mt-3">
                        {allPhones?.map((elm, i) => <PhoneCard key={i} phone={elm} getCatalog={getCatalog} />)}
                    </div>

                    <Modal show={modal} backdrop="static" onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create Phone</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditForm allPhones={allPhones} closeModal={closeModal} />
                        </Modal.Body>
                    </Modal>

                    <img style={{ cursor: "pointer", transform: "rotate(180deg)", marginRight: "80px" }} src={next} onClick={() => paginatioBack()} alt="more-than" />
                    <img style={{ cursor: "pointer", margin: "auto, 80px" }} src={next} onClick={() => paginatioNext()} alt="more-than" />

                </div>
            }

        </>


    )
}


export default Catalog;