import { Anchor } from '../components/Anchor';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <span className={styles.line}>
        Hello, I&apos;m Kristijan, a web developer based in Croatia with almost
        fifteen years of experience. I&apos;m currently a Team Lead of the{' '}
        <Anchor href="https://corporate.aboutyou.de/en/">ABOUT YOU</Anchor> web
        frontend team.
      </span>

      <ul className={styles.links}>
        <li className={styles.link}>
          <Anchor href="https://github.com/kristijanbambir">GitHub</Anchor>
        </li>
        <li className={styles.link}>
          <Anchor href="https://www.linkedin.com/in/kristijanbambir">
            LinkedIn
          </Anchor>
        </li>
        <li className={styles.link}>
          <Anchor href="https://www.instagram.com/kristijanbambir/">
            Instagram
          </Anchor>
        </li>
        <li className={styles.link}>
          <Anchor href="mailto:kristijan.bambir@gmail.com">Email</Anchor>
        </li>
      </ul>
    </main>
  );
}
