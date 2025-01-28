import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello, I&apos;m Kristijan.</h1>

      <span className={styles.line}>
        I&apos;m a Lead Frontend Developer at{' '}
        <a href="https://corporate.aboutyou.de/en/">ABOUT YOU</a>.
      </span>

      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="https://github.com/kristijanbambir">GitHub</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/kristijanbambir">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.instagram.com/kristijanbambir/">Instagram</a>
        </li>
        <li className={styles.link}>
          <a href="mailto:kristijan.bambir@gmail.com">Email</a>
        </li>
      </ul>
    </main>
  );
}
