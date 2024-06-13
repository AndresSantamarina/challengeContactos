import { useContext, useState } from "react";
import { ContactoContext } from "../context/ContactoContext";
import EditarContacto from "./EditarContacto";
import { Button } from "react-bootstrap";

const Contacto = ({ contacto }) => {
  const { eliminarContacto } = useContext(ContactoContext);
  const [mostrarEditar, setMostrarEditar] = useState(false);

  const handleEdit = () => {
    setMostrarEditar(true);
  };

  const handleCancel = () => {
    setMostrarEditar(false);
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
              <Button
                className="btn btn-outline-danger ms-2"
                onClick={() => eliminarContacto(contacto._id)}
              >
                Eliminar
              </Button>
              <Button className="btn btn-outline-primary" onClick={handleEdit}>
                Editar
              </Button>
            </>
          </div>
        </div>
      )}
    </li>
  );
};

export default Contacto;
