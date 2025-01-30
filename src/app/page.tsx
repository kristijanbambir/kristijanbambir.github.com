import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <span className={styles.line}>
        Hello, I'm Kristijan. I'm a web developer based in Croatia with thirteen
        years of experience. I'm currently a Lead Frontend Developer at{' '}
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
