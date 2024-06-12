import { useReducer } from "react";
import contactoApi from "../api/contactoApi"
import { contactoReducer } from "../reducer/contactoReducer"
import { ContactoContext } from "./ContactoContext"

const ContactoProvider = ({children}) => {
    const valorInicial = {
        contacts: []
    }

    const [state, dispatch] = useReducer(contactoReducer, valorInicial)

    return (
      <ContactoContext.Provider value={state}>
        {children}
      </ContactoContext.Provider>
    );
};

export default ContactoProvider;