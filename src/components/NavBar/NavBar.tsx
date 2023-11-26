import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Basket, Person } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import { TaskService } from "../../services/TaskService";
import { toast } from "react-toastify";
import { Task } from "../../types/task";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";

const NavBar = () => {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    //Agregar tarea
    const createTask = async (newTask: Task) => {
        try {
            const result = await TaskService.createTask(newTask);
            console.log('Nueva tarea agregada:', result.id);
            navigate(`/detalle/${result.id}`);

            toast.success('Tarea creada correctamente', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        } catch (error) {
            toast.error('Error al crear la tarea', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
            console.log('Error al crear la tarea:', error);
        }
    };



    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Desarrollo en Argentina</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link onClick={()=> navigate('/')}>Inicio</Nav.Link>

                            <NavDropdown title="Tareas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Por hacer</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">En producción
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Por testear</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Completada
                                </NavDropdown.Item>
                            </NavDropdown>

                            {/*Agregar una nueva tarea */}
                            <Nav.Link onClick={handleShowModal}>Agregar tarea</Nav.Link>

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

            <ModalAgregarTarea showModal={showModal} handleClose={handleCloseModal} createTask={createTask} />

        </>

    )
}

export default NavBar