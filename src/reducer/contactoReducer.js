export const contactoReducer = (state, action) => {
    switch (action.type) {
        case "crearContacto":
            return console.log("crear");
        case "obtenerContacto":
            return console.log("obtener");
        case "editarContacto":
            return console.log("editar");
        case "eliminarContacto":
            return console.log("eliminar");
    }
}