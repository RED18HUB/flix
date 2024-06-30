import Cabecera from "components/Cabecera"
import Formulario from "components/Formulario"
import Pie from "components/Pie"
import { useState } from "react"

const NuevoVideo = (props)=> {

  const [colaboradores,actualizarColaboradores]=useState([])
    const categorias=[
        {
          titulo:"Frond End",
          colorTexto:"#fff",
          colorFondo:"#fff"
        },
        {
          titulo:"Back End",
          colorTexto:"#fff",
          colorFondo:"#fff"
        },
        {
          titulo:"Innovaciononnn",
          colorTexto:"#fff",
          colorFondo:"#fff"
        }
        
        
      ]
     
    const regitrarColaborador = (colaborador)=>{
        console.log("nuevo colaborador")
        actualizarColaboradores([...colaboradores,colaborador])
      }

    return(
        <>
            <Cabecera/>
            {
            <Formulario categorias={categorias.map((categoria)=> categoria.titulo)}
            regitrarColaborador={regitrarColaborador}/>
            }
            <Pie></Pie>

        </>
    )
}

export default NuevoVideo