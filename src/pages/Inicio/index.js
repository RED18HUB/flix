import Banner from "components/Banner";
import Cabecera from "components/Cabecera";
import Categoria from "components/Categoria";
import Pie from "components/Pie";



const Inicio=() =>{

    return (
        <>
        <Cabecera></Cabecera>
          <Banner img="main" color="#154580"></Banner>
          
          <Pie></Pie>

        </>
    );
}
  
export default Inicio;