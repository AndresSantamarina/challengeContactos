export const contactoReducer = (state, action) => {
    switch (action.type) {
        case "crearContacto":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case "obtenerContacto":
            return {
                ...state,
                contacts: action.payload
            }
        case "editarContacto":
            return {
                ...state,
                contacts: state.contacts.map((contacto) =>
                    contacto._id === action.payload._id ? action.payload : contacto)
            }
        case "eliminarContacto":
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contacto) => contacto._id !== action.payload
                )
            }

            //aunque igual yo uso el editarContacto, sería lo mismo
        case "cambiarFavorito":
            return {
                ...state,
                contacts: state.contacts.map((contacto)=>
                contacto.favorito === action.payload.favorito ? contacto : action.payload
                )
            }

            //agregar caso para cambiar favorito
    }
}