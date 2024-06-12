import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import ContactoProvider from "../context/ContactoProvider";
import MenuNav from "../components/MenuNav";
import ListadoContactos from "../pages/ListadoContactos";
import Favoritos from "../pages/Favoritos";
import CrearContacto from "../pages/CrearContacto";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ContactoProvider>
        <MenuNav />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/contactos" element={<ListadoContactos />}></Route>
          <Route path="/formulario" element={<CrearContacto />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Routes>
      </ContactoProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
