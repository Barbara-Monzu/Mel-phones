
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { ReactComponent as ShoppingCart } from '../../img/shopping-cart.svg'

const Navigation = ({ count }) => {

  return (

    <Navbar className="fixed" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ letterSpacing: "0.4rem", fontWeigth: "900" }}>Mel-Phones</Navbar.Brand>
        <Nav className="me-auto">
        </Nav>
        <Nav.Link as={Link} to="/cart" >
          <p style={{ color: 'white', marginLeft: '2rem', height: '3px' }}>{count}</p>
          <ShoppingCart fill="white" style={{ width: '30px', height: '30px', marginBottom: "15px" }} />
        </Nav.Link>
      </Container>
    </Navbar>


  )
}


export default Navigation