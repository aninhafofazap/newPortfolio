import styles from "./banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}> Olá!</h1>
        <p className={styles.descricao}>
          Esse é meu espaço pessoal onde você irá conhecer um pouco sobre mim e
          ver meus projetos. Estou iniciando minha carreira como Desenvolvedora
          Frontend.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="Imagem de um circulo"
        />
        <img
          className={styles.minhaFoto}
          src="https://github.com/aninhafofazap.png"
          alt="Foto da Ana Victória"
        />
      </div>
    </div>
  );
}

export default Banner;
