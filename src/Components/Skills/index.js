import styles from "./skill.module.css";
import { SiJavascript } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { DiCss3, DiReact } from "react-icons/di";

function Skill() {
  return (
    <div className={styles.skills}>
      <ul className={styles.skills__list}>
        <li>
          <SiJavascript size={150} color={"#ffba08"} />
          <p className={styles.title__skill}>Javascript</p>
        </li>
        <li>
          <TfiHtml5 size={145} color={"#bf0603"} />
          <p className={styles.title__skill}>HTML5</p>
        </li>
        <li>
          <DiCss3 size={150} color={"#4361ee"} />
          <p className={styles.title__skill}>CSS3</p>
        </li>
        <li>
          <DiReact size={145} color={"#4895ef"} />
          <p className={styles.title__skill}>React</p>
        </li>
      </ul>
    </div>
  );
}

export default Skill;
