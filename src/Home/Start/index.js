import Projects from "../../Components/Projects";
import Skill from "../../Components/Skills";
import styles from "./start.module.css";
import image from "../../assets/pessoas-times.png";
import imageSpace from "../../assets/space.png";

function Start() {
  const projetos = [
    {
      link: "https://github.com/aninhafofazap/organo",
      image: image,
      tituloImage: "Imagem do projeto Organo",
      titulo: "Organo",
    },
    {
      link: "https://github.com/aninhafofazap/space",
      image: imageSpace,
      tituloImage: "Imagem do projeto Organo",
      titulo: "Space",
    },
  ];

  return (
    <>
      <h2>Meus projetos</h2>
      <ul className={styles.projects}>
        {projetos.map((projeto) => (
          <li>
            <Projects
              image={projeto.image}
              link={projeto.link}
              tituloImage={projeto.tituloImage}
              titulo={projeto.titulo}
            />
          </li>
        ))}
      </ul>
      <div>
        <h2>Meus conhecimentos</h2>
        <Skill />
      </div>
    </>
  );
}

export default Start;
