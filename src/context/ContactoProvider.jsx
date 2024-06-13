import { useReducer } from "react";
import contactoApi from "../api/contactoApi";
import { contactoReducer } from "../reducer/contactoReducer";
import { ContactoContext } from "./ContactoContext";

const ContactoProvider = ({ children }) => {
  const valorInicial = {
    contacts: [],
  };
  const [state, dispatch] = useReducer(contactoReducer, valorInicial);

  const agregarContacto = async (contacto) => {
    try {
      const respuesta = await contactoApi.post("/", contacto);
      dispatch({ type: "crearContacto", payload: respuesta.data });
    } catch (error) {
      console.error(error);
    }
  };

  const editarContacto = (contacto) => {
    dispatch({ type: "editarContacto", payload: contacto });
  };

  const eliminarContacto = (id) => {
    dispatch({ type: "eliminarContacto", payload: id });
  };

  return (
    <ContactoContext.Provider
      value={{ state, agregarContacto, editarContacto, eliminarContacto }}
    >
      {children}
    </ContactoContext.Provider>
  );
};

export default ContactoProvider;
