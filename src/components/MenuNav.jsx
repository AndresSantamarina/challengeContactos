import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MenuNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/contactos"} className="nav-link">
              Lista de contactos
            </NavLink>
            <NavLink to={"/formulario"} className="nav-link">
              Agregar contacto
            </NavLink>
            <NavLink to={"/favoritos"} className="nav-link">
              Favoritos
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNav;
