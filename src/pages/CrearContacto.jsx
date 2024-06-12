import { Form, Button } from "react-bootstrap";

const CrearContacto = () => {

    
  return (
    <Form className="m-4 w-50">
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control type="text" placeholder="Ej: Juan Pérez" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="ejemplo@gmail.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTelefono">
        <Form.Label>Número de teléfono</Form.Label>
        <Form.Control type="text" placeholder="3865123456" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  );
};

export default CrearContacto;
