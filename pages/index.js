import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Đinh Sĩ Duyệt</title>
        <meta name="description" content="Đinh Sĩ Duyệt đẹp trai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Đinh Sĩ Duyệt <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
        Welcome to Đinh Sĩ Duyệt{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Đinh Sĩ Duyệt &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Đinh Sĩ Duyệt</h2>
            <p>Đinh Sĩ Duyệt đẹp trai!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Đinh Sĩ Duyệt</h2>
            <p>Đinh Sĩ Duyệt</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Đinh Sĩ Duyệt</h2>
            <p>
            Đinh Sĩ Duyệt
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
      Đinh Sĩ Duyệt{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
