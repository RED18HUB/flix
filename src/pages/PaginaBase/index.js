import { useState } from 'react';
import Cabecera from "components/Cabecera"
import Pie from "components/Pie"
import Banner from "components/Banner";
import Categoria from "components/Categoria";


function PaginaBase () {
  
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
     
    return(
        <main>
            <Cabecera/>
            <Banner img="main" color="#154580"></Banner>
            {categorias.map((categoria)=>{
            return <Categoria datos={categoria} key={categoria.titulo}/>
          })}
              
        
            <Pie></Pie>
        </main>
    )
}

export default PaginaBase