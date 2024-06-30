import logo from "./Logo.svg"
import styles from "./Footer.module.css"
function Pie () {
    return (
        <footer className={styles.pie}>
            <img src={logo} alt="imagen-footer"></img>
        </footer>
    )
}
export default Pie