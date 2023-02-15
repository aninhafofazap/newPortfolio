import Banner from "../../Components/Banner";
import Projects from "../../Components/Projects";
import Skill from "../../Components/Skills";
import styles from "./start.module.css";

function Start() {
  return (
    <>
      <h2>Meus projetos</h2>
      <ul className={styles.projects}>
        <li>
          <Projects />
        </li>
        <li>
          <Projects />
        </li>
        <li>
          <Projects />
        </li>
        <li>
          <Projects />
        </li>
        <li>
          <Projects />
        </li>
        <li>
          <Projects />
        </li>
        <li>
          <Projects />
        </li>
        <li>
          <Projects />
        </li>
        <li>
          <Projects />
        </li>
        <li>
          <Projects />
        </li>
      </ul>
      <div>
        <h2>Meus conhecimentos</h2>
        <Skill />
      </div>
    </>
  );
}

export default Start;
