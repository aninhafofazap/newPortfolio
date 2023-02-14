import { Link, useLocation } from "react-router-dom";
import styles from "./menu.module.css";

function Menu() {
  const localizacao = useLocation();
  console.log(localizacao);

  return (
    <header>
      <>
        <nav className={styles.navegacao}>
          <Link
            className={`${styles.link} 
        ${localizacao.pathname === "/" ? styles.linkDestacado : ""} `}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`${styles.link} 
          ${localizacao.pathname === "/sobremim" ? styles.linkDestacado : ""}`}
            to="/sobremim"
          >
            About me
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
