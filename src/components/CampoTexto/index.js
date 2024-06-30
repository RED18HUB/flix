import styles from "./CampoTexto.module.css"

function CampoTexto(props)
{
    return <div className={styles.campoTexto}>
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} required={props.required} />
    </div>
}
export default CampoTexto