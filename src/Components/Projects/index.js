import styles from "./projects.module.css";
import { AiFillGithub } from "react-icons/ai";

function Projects({ image, tituloImage, link, titulo }) {
  return (
    <div className={styles.project}>
      <img src={image} alt={tituloImage} className={styles.img} />
      <div className={styles.info}>
        <p className={styles.titulo}>{titulo}</p>
        <a className={styles.link} href={link}>
          <AiFillGithub size={24} color={"#FFFFFF"} />{" "}
        </a>
      </div>
    </div>
  );
}

export default Projects;
