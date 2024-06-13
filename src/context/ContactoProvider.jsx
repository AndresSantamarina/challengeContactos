import { useEffect, useReducer } from "react";
import contactoApi from "../api/contactoApi";
import { contactoReducer } from "../reducer/contactoReducer";
import { ContactoContext } from "./ContactoContext";

const ContactoProvider = ({ children }) => {
  const valorInicial = {
    contacts: [],
  };
  const [state, dispatch] = useReducer(contactoReducer, valorInicial);

  const obtenerContactos = async () => {
    try {
      const respuesta = await contactoApi.get("/");
      dispatch({ type: "obtenerContacto", payload: respuesta.data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    obtenerContactos();
  }, []);

  const agregarContacto = async (contacto) => {
    try {
      const respuesta = await contactoApi.post("/", contacto);
      dispatch({ type: "crearContacto", payload: respuesta.data });
    } catch (error) {
      console.error(error);
    }
  };

  const actualizarContacto = async (contacto) => {
    {
      try {
        const respuesta = await contactoApi.put(`/${contacto._id}`, contacto);
        dispatch({ type: "editarContacto", payload: respuesta.data });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const eliminarContacto = async (id) => {
    try {
      await contactoApi.delete(`/${id}`);
      dispatch({ type: "eliminarContacto", payload: id });
    } catch (error) {
      console.error(error);
    }
  };

  const cambiarFavorito = async (id) => {
    try {
      const respuesta = await contactoApi.put(`/favorito/${id}`);
      dispatch({ type: "editarContacto", payload: respuesta.data });
      obtenerContactos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContactoContext.Provider
      value={{
        state,
        agregarContacto,
        actualizarContacto,
        eliminarContacto,
        obtenerContactos,
        cambiarFavorito,
      }}
    >
      {children}
    </ContactoContext.Provider>
  );
};

export default ContactoProvider;
