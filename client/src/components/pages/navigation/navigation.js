
import { Link} from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'


const Navigation = ({count}) => {

  console.log("Mirando la cuenta que paso", count)

  return (
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Amazing</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/catalog">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/catalog"></Nav.Link>
          </Nav>
            <Nav.Link as={Link} to="/cart">
            <p>{count}</p>
            <img style={{ width: '40px', height: '40px'}} src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="cart"/>
            </Nav.Link>
        </Container>
      </Navbar>


  ) 
} 


export default Navigation