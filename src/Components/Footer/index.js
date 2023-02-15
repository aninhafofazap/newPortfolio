import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icon}>
        <a href="https://www.linkedin.com/in/anavictoria-gomes/">oi</a>
        <a href="https://www.instagram.com/vick.anaaaa/">oi</a>
        <a href="https://twitter.com/AnaVickz">oi</a>
      </div>
      <p className={styles.desenvolvedor}>Desenvolvido por Ana Victória</p>
    </footer>
  );
}

export default Footer;
