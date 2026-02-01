import { Anchor } from '../components/Anchor';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <span className={styles.line}>
        Hello, I&apos;m Kristijan, a web developer based in Croatia with fifteen
        years of experience.
      </span>

      <span className={styles.line}>
        I&apos;m a Frontend Engineer at{' '}
        <Anchor href="https://vumedi.com">Vumedi</Anchor>. Previously I was a
        Frontend Team Lead at{' '}
        <Anchor href="https://corporate.aboutyou.de/en/">ABOUT YOU</Anchor>, and
        JavaScript Team Lead at{' '}
        <Anchor href="https://infinum.com">Infinum</Anchor>.
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
