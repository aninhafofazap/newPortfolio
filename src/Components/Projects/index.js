import styles from "./projects.module.css";
// import { AiFillGithub } from "react-icons/Ai";

function Projects() {
  return (
    <div className={styles.project}>
      <a className="links">
        <img
          src="https://w.wallhaven.cc/full/l3/wallhaven-l3q1op.png"
          alt=""
          className={styles.img}
        />
      </a>
    </div>
  );
}

export default Projects;
