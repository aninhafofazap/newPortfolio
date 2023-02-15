import Banner from "../../Components/Banner";
import Projects from "../../Components/Projects";
import styles from "./start.module.css";

function Start() {
  return (
    <main>
      <Banner />
      <h2>Meus projetos</h2>
      <ul className={styles.projects}>
        <li>
          <Projects />
        </li>
      </ul>
    </main>
  );
}

export default Start;
