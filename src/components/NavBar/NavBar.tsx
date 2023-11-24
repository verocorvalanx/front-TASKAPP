import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Basket, Person } from "react-bootstrap-icons"

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Desarrollo en Argentina</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link href="#home">Inicio</Nav.Link>

                            <NavDropdown title="Tareas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Por hacer</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">En producción
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Por testear</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Completada
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#link">Agregar tarea</Nav.Link>

                        </Nav>

                        <Nav className="d-none d-md-flex ms-auto">
                            <Nav.Link href="#carrito">
                                <Basket />
                            </Nav.Link>

                            <Nav.Link href="#usuario">
                                <Person />
                            </Nav.Link>

                        </Nav>

                        <div className="d-md-none">
                            <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#ticket">Ticket</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#perfil">Perfil</a>
                                </li>
                            </ul>

                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default NavBar