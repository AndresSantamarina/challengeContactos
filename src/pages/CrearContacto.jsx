import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ContactoContext } from "../context/ContactoContext";
import { useNavigate } from "react-router-dom";

const CrearContacto = () => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");

  const navigate = useNavigate()

  const { agregarContacto } = useContext(ContactoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarContacto({ nombre, mail, telefono });
    setNombre("");
    setMail("");
    setTelefono("");
    navigate("/contactos")
  };

  return (
    <Form className="m-4 w-50" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Juan Pérez"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="ejemplo@gmail.com"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTelefono">
        <Form.Label>Número de teléfono</Form.Label>
        <Form.Control
          type="text"
          placeholder="3865123456"
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  );
};

export default CrearContacto;
