import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ContactoContext } from "../context/ContactoContext";
import Contacto from "../components/Contacto";


//AGREGAR EL CAMBIO DE FAV AL REDUCER, NO HACERLO ACÁ

const Favoritos = () => {
  const { state, obtenerContactos } = useContext(ContactoContext);
  const [nombreBuscado, setNombreBuscado] = useState("");

  useEffect(() => {
    obtenerContactos();
  }, []);

  const favoritos = state.contacts.filter((contacto) => contacto.favorito);

  const favoritosFiltrados = favoritos.filter(
    (contacto) => contacto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase())
  );

  return (
    <Container>
      <h2 className="m-3">Lista de favoritos</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBuscador">
          <Form.Label>Buscador</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un nombre"
            onChange={(e) => setNombreBuscado(e.target.value)}
          />
        </Form.Group>
        <Button>Buscar</Button>
      </Form>
      <ul className="list-group">
        {favoritosFiltrados.map((contacto) => (
          <Contacto key={contacto._id} contacto={contacto} />
        ))}
      </ul>
    </Container>
  );
};

export default Favoritos;
