import { useContext, useEffect } from "react";
import { ContactoContext } from "../context/ContactoContext";
import Contacto from "./Contacto";

const ListaContactos = () => {
  const { state, obtenerContactos } = useContext(ContactoContext);

  useEffect(() => {
    obtenerContactos();
  }, []);

  return (
    <>
      <h2>Lista de contactos</h2>
      <ul className="list-group">
        {state.contacts &&
          state.contacts.map((contacto) => (
            <Contacto key={contacto._id} contacto={contacto} />
          ))}
      </ul>
    </>
  );
};

export default ListaContactos;
