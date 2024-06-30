import Inicio from "pages/Inicio";
import NuevoVideo from "pages/NuevoVideo";
import PageNotFound from "pages/Page404";
import PaginaBase from "pages/PaginaBase";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function AppRoutes(){
    return (
        <BrowserRouter>
    
        <Routes>
        <Route path="/" element={<PaginaBase/>}/>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/Nuevo" element={<NuevoVideo/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>

        </Routes>
       
    </BrowserRouter>
    )
}
export default AppRoutes