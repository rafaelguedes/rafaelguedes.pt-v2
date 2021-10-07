import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* <img src="/rguedes.jpg" alt="Me" className={styles.me} /> */}
        <h1>Hi. 👋 </h1>
        <h2>
          I'm <strong>Rafael Guedes</strong>.
        </h2>
      </header>
      <main className={styles.bio}>
        <p>
          I'm a front-end developer currently working for{" "}
          <a href="https://twitter.com/minderaswcraft" target="_blank">
            Mindera
          </a>
          .
        </p>
        <p>
          You can contact me through{" "}
          <a href="mailto:geral@rafaelguedes.pt">geral@rafaelguedes.pt</a>.
        </p>
        <p>
          Follow me on{" "}
          <a href="https://instagram.com/putoguedes" target="_blank">
            Instagram
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/rafael-guedes-056b80132/"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </p>
      </main>
    </div>
  );
}
