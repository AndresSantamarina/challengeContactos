import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { ContactoContext } from "../context/ContactoContext";
import Contacto from "../components/Contacto";

const Favoritos = () => {
  const { state, obtenerContactos } = useContext(ContactoContext);

  useEffect(() => {
    obtenerContactos();
  }, []);

  const favoritos = state.contacts.filter((contacto) => contacto.favorito);

  return (
    <Container>
      <h2 className="m-3">Lista de favoritos</h2>

      <ul className="list-group">
        {favoritos.map((contacto) => (
          <Contacto key={contacto._id} contacto={contacto} />
        ))}
      </ul>
    </Container>
  );
};

export default Favoritos;
