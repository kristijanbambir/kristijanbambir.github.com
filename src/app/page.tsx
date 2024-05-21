import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Hi 👋 I&apos;m Kristijan,
        <br />
        Lead Developer at <a href="https://aboutyou.tech/">ABOUT YOU</a>.
      </h1>

      <h2 className={styles.subtitle}>
        In my free time I&apos;m a dad and husband.
      </h2>

      <ul className={styles.links}>
        <li>
          <a href="https://github.com/kristijanbambir">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kristijanbambir">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.instagram.com/kristijanbambir/">Instagram</a>
        </li>
        <li>
          <a href="mailto:kristijan.bambir@gmail.com">Email</a>
        </li>
      </ul>
    </main>
  );
}
