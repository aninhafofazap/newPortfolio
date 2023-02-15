import styles from "./about.module.css";
import Foto from "../../assets/Aninha.png";

function About() {
  return (
    <article className={styles.container}>
      <h2 className={styles.subtitle}>Sobre mim</h2>
      <div className={styles.conteudo}>
        <h4>Sou a Ana Victória!</h4>
        <img className={styles.foto} src={Foto} alt="Foto da Ana Victória" />
        <p className={styles.paragrafo}>
          Oi, tudo bem? Sou estudante de programação a um ano, estou cursando o
          segundo semestre de Sistemas da Informação na Faculdade de ensino
          Estácio de Sá.
        </p>
        <p className={styles.paragrafo}>
          Tenho 20 anos e moro em Góias. Conheci o mundo da tecnologia e
          programação por um amigo a dois anos, desde então me interessei pela
          aréa e comecei a cursar tecnologia.
        </p>
        <p className={styles.paragrafo}>
          Meus principais interesses na aréa da tecnologia é o Desenvolvimento
          Web Frontend. Tenho feito cursos na Instituição de ensino Alura para
          aprimorar meus conhecimentos e poder ingressar em breve no mercado de
          trabalho.
        </p>
        <p className={styles.paragrafo}>
          Venho estudado bastante com projetos pessoais para que eu possa
          adquirir todo conhecimento possivel.
        </p>
        <p className={styles.paragrafo}>
          Tenho como objetivo de vida evoluir e crescer no ramo para dar o
          melhor de mim profissionalmente.
        </p>
        <p className={styles.paragrafo}>
          Meus principais hobbies é ouvir músicas, ler e estudar espanhol!
        </p>
      </div>
    </article>
  );
}

export default About;
