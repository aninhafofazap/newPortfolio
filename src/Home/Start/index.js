import Projects from "../../Components/Projects";
import Skill from "../../Components/Skills";
import styles from "./start.module.css";
import image from "../../assets/pessoas-times.png";
import imageSpace from "../../assets/space.png";
import card from "../../assets/card.png";
import robotrom from "../../assets/robotrom.png";

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
      tituloImage: "Imagem do projeto Space",
      titulo: "Space",
    },
    {
      link: "https://github.com/aninhafofazap/Frontend-Mentor-Order-summary-card",
      image: card,
      tituloImage: "Imagem do projeto Summary",
      titulo: "Order Summary",
    },
    {
      link: "https://github.com/aninhafofazap/Robotron-2000",
      image: robotrom,
      tituloImage: "Imagem do projeto Robotrom 2000",
      titulo: "Robotrom 2000",
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
