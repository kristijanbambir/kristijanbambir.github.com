import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          className={styles.profile}
          src="/profile.jpg"
          alt="Kristijan Bambir profile image"
          width={180}
          height={180}
        />

        <p className={styles.description}>
          Hi 👋 I&apos;m Kristijan.
          <br />
          I&apos;m a Lead Developer at{' '}
          <a href="https://aboutyou.tech/">ABOUT YOU</a>.
          <br />I spend my free time being a dad and husband.
        </p>

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
    </div>
  );
}
