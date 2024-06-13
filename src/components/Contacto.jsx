import { useContext, useState } from "react";
import { ContactoContext } from "../context/ContactoContext";
import EditarContacto from "./EditarContacto";
import { Button } from "react-bootstrap";

const Contacto = ({ contacto }) => {
  const { eliminarContacto, cambiarFavorito } = useContext(ContactoContext);
  const [mostrarEditar, setMostrarEditar] = useState(false);

  const handleEdit = () => {
    setMostrarEditar(true);
  };

  const handleCancel = () => {
    setMostrarEditar(false);
  };

  const handleFavorito = () => {
    cambiarFavorito(contacto._id);
  };

  return (
    <li className="list-group-item d-flex flex-column">
      {mostrarEditar ? (
        <EditarContacto handleCancel={handleCancel} contacto={contacto} />
      ) : (
        <div>
          <p>
            Nombre: <strong>{contacto.nombre}</strong>
          </p>
          <p>
            Mail: <strong>{contacto.mail}</strong>
          </p>
          <p>
            Teléfono: <strong>{contacto.telefono}</strong>
          </p>
          <div className="d-flex">
            <>
              <Button variant="outline-primary" onClick={handleEdit}>
                Editar
              </Button>
              <Button
                className="ms-2"
                variant="outline-danger"
                onClick={() => eliminarContacto(contacto._id)}
              >
                Eliminar
              </Button>
              <Button
                className="ms-2"
                variant={
                  contacto.favorito ? "outline-secondary" : "outline-success"
                }
                onClick={handleFavorito}
              >
                {contacto.favorito
                  ? "Quitar de favoritos"
                  : "Agregar a favoritos"}
              </Button>
            </>
          </div>
        </div>
      )}
    </li>
  );
};

export default Contacto;
