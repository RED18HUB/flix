import { useState } from "react"
import CampoTexto from "components/CampoTexto"
import styles from "./Formulario.module.css"
import ListaDeOpciones from "components/ListaDeOpciones"
import Boton from "components/Boton"

const Formulario = (props) =>{
    const [categoria, actualizarCategoria] = useState("")
    const [nombre, actualizarNombre] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const {regitrarColaborador}=props
    const manejarEnvio=(e)=>{
        e.preventDefault()
        let datosAEnviar={
            categoria,
            nombre,
            imagen,
            video,
            descripcion
        }
        console.log(datosAEnviar)
        regitrarColaborador(datosAEnviar)
    }
    return (
    <section className={styles.formulario}>
        <form onSubmit={manejarEnvio}>
            <h2>Nueo Video</h2>
            <h5>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DEL VIDEO</h5>
            <h3>Crear Tarjeta</h3>
            <div class={styles.contenedorCampo}>
            <div class={styles.campo}>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required={true}></CampoTexto>
            </div>
            <div class={styles.campo}>
            <ListaDeOpciones></ListaDeOpciones>
            </div>
            </div>
            <div class={styles.contenedorCampo}>
            <div class={styles.campo}>
            <CampoTexto titulo="Imagen"placeholder="ingrese enlace del video" required={true} ></CampoTexto>
            </div>
            <div class={styles.campo}>
            <CampoTexto titulo="Video" placeholder="de que se trata este video" ></CampoTexto>
            </div>
            </div>
            <div class={styles.contenedorCampo}>
            <div class={styles.campo}>
            <CampoTexto titulo="Descripcion" placeholder="¿de que se trata este video?" ></CampoTexto>
            </div>
            </div>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
    )
}

export default Formulario
