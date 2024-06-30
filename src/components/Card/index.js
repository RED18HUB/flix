import { useState } from 'react';
import styles from "./Card.module.css"



const Card = (props) =>
{
    const {categoria, nombre, imagen, video, descripcion}=props.datos

    return(
        <div className={styles.container}>
            <a className={styles.link}>
            <iframe width="560"
             height="315"
             src={video}
             title={nombre}
             frameborder="0" 
             allowFullScreen
              ></iframe>
               <div className={styles.videoCardFooter}>
                <button><img src="img/delete.svg"alt="borrar"></img>BORRAR</button>
                <button><img src="img/edit.svg" alt="editar"></img>EDITAR</button>
                <span>{categoria}</span>
            </div>
        </a>
        
        <a className={styles.link}>
            <iframe width="560"
             height="315"
             src="https://www.youtube.com/embed/0kkeYthTGr0?si=6l2Q448xAe7qSbuF" 
             title="YouTube video player" 
             frameborder="0" 
             allowFullScreen
              ></iframe>
               <div className={styles.videoCardFooter}>
                <button>Borrar</button>
                <button>Editar</button>
            </div>
        </a>
     
    </div>
    )
}

export default Card