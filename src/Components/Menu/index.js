import { Link, useLocation } from "react-router-dom";
import styles from "./menu.module.css";

function Menu() {
  const localizacao = useLocation();
  return (
    <header>
      <>
        <nav className={styles.navegacao}>
          <Link
            className={`${styles.link} 
        ${localizacao.pathname === "/" ? styles.linkDestacado : ""} `}
            to="/"
          >
            Início
          </Link>
          <Link
            className={`${styles.link} 
          ${localizacao.pathname === "/sobremim" ? styles.linkDestacado : ""}`}
            to="/sobremim"
          >
            Sobre Mim
          </Link>
          <Link
            className={`${styles.link} 
          ${localizacao.pathname === "/labzone" ? styles.linkDestacado : ""}`}
            to="/labzone"
          >
            Comunidade
          </Link>
        </nav>
      </>
    </header>
  );
}

export default Menu;
