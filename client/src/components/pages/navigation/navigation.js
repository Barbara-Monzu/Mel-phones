
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import cartImg from '../../../img/cart.png'


const Navigation = ({ count }) => {

  console.log("Mirando la cuenta que paso", count)

  return (

    <Navbar className="fixed" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Soamee-Phones</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/catalog">Catalog</Nav.Link>
          <Nav.Link as={Link} to="/catalog"></Nav.Link>
        </Nav>
        <Nav.Link as={Link} to="/cart" >
          <p style={{ color: 'white', marginLeft: '2rem', height: '3px' }}>{count}</p>
          <img style={{ width: '30px', height: '30px' }} src={cartImg} alt="cart" />
        </Nav.Link>
      </Container>
    </Navbar>


  )
}


export default Navigation