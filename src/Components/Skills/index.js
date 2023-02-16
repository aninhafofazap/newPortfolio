import styles from "./skill.module.css";
import { SiJavascript } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { DiCss3, DiReact } from "react-icons/di";

function Skill() {
  return (
    <div className={styles.skills}>
      <ul>
        <li>
          <SiJavascript size={150} color={"#ffba08"} />
        </li>
        <li>
          <TfiHtml5 size={145} color={"#bf0603"} />
        </li>
        <li>
          {" "}
          <DiCss3 size={150} color={"#4361ee"} />
        </li>
        <li>
          <DiReact size={150} color={"#4895ef"} />
        </li>
      </ul>
    </div>
  );
}

export default Skill;
