import styles from "./community.module.css";
import Icon from "../../assets/lab.png";

function Community() {
  return (
    <article className={styles.container__community}>
      <h2 className={styles.subtitle__community}>Lab Zone</h2>
      <div className={styles.conteudo__community}>
        <h4>Entre na minha comunidade do Discord!</h4>
        <img
          className={styles.foto__community}
          src={Icon}
          alt="Icon da Lab Zone"
        />
        <p className={styles.paragrafo__community}>
          Essa comunidade foi criada para que os amantes de programação assim
          como eu possam se interagir e compartilhar conhecimentos.
        </p>
      </div>
      <a href="https://discord.gg/bZdNzScxMz" className={styles.botao}>
        Entrar
      </a>
    </article>
  );
}

export default Community;
