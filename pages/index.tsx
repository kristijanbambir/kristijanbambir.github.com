import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kristijan Bambir</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Kristijan Bambir personal pages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          I&apos;m a Senior Frontend Developer at ABOUT YOU. I spend my free
          time being a dad and husband.
        </p>

        <ul className={styles.links}>
          <li>
            <a href="https://github.com/kristijanbambir">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kristijanbambir">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/KristijanBambir">Twitter</a>
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
