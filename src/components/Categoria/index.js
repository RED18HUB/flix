import { useState } from 'react';
import Card from "components/Card"
import styles from "./Categoria.module.css"

const Categoria =(props) => {
    const { colorTexto, colorFondo, titulo } = props.datos
    const [colaboradores, actualizarColaboradores] = useState([{
    
        categoria: "Front End",
        imagen: "https://github.com/harlandlohora.png",
        nombre: "Harland Lohora",
        video: "https://www.youtube.com/watch?v=1Vr3raD981Y",
        descripcion:"jhsajdjasd" 
      },
      {
        
        categoria: "Programación",
        imagen: "https://github.com/genesysaluralatam.png",
        nombre: "Genesys Rondón",
        video: "https://www.youtube.com/watch?v=1Vr3raD981Y",
        descripcion:"jhsajdjasd" 
      },
      {
       
        categoria: "UX y Diseño",
        imagen: "https://github.com/JeanmarieAluraLatam.png",
        nombre: "Jeanmarie Quijada",
        video: "https://www.youtube.com/watch?v=1Vr3raD981Y",
        descripcion:"jhsajdjasd" 
      },
     ])
   return <section className={styles.container}>
            <h3>
                {titulo}
            </h3>
            <br></br>
            <div className={styles.video}> 
            {
                colaboradores.map((colaborador)=> <Card datos={colaborador}></Card>)
            }

            </div>

            </section>
}
export default Categoria