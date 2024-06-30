import CabeceraLink from "components/CabeceraLink"
import styles from "./Header.module.css"
import logo from "./Logo.svg"

function Cabecera (){
    return (
        
        <header className={styles.cabecera}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo-alura" />
        </div>
        <nav className={styles.nav}>
          <CabeceraLink url="./">
            HOME
          </CabeceraLink>
          <CabeceraLink url="./Nuevo">
            NUEVO VIDEO
          </CabeceraLink>
        </nav>
      </header>

    )
}
export default Cabecera