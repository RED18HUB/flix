import styles from "./ListaDeOpciones.module.css"

function ListaDeOpciones ()
{
    const categorias =[
        "Front End",
        "Back-End",
        "Inovacion"
    ]
    return <div className={styles.listaOpciones}>
        <label>Categorias</label>
        <select>
            {categorias.map((categoria,index)=> {
                return <option key={index}>{categoria}</option>
            })}
        </select>
    </div>
}
export default ListaDeOpciones