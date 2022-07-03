import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import ImageCrush1 from "./images/anh-chup-vs-crush1.jpg";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Đinh Sĩ Duyệt - DuyetDS</title>
        <meta name="description" content="Đinh Sĩ Duyệt đẹp trai" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Đinh Sĩ Duyệt,Duyệt ,Đinh Sĩ Duyệt đẹp trai nhất"/>
        <meta name="author" content="Đinh Sĩ Duyệt"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Đinh Sĩ Duyệt <a href="https://nextjs.org">DuyetDS!</a>
        </h1>

        <p className={styles.description}>
        Welcome to Đinh Sĩ Duyệt{' '}
          <code className={styles.code}>Yêu em</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Đinh Sĩ Duyệt &rarr;</h2>
          </a>
            <h2>Đinh Sĩ Duyệt</h2>
            <p>Đinh Sĩ Duyệt đẹp trai!</p>
          <p>Đinh Sĩ Duyệt là một người  đẹp trai! . Thông minh . Biết nấu ăn chăm lo gia đình nè </p>
          <section>
            <p>Làm sao có được làn da đẹp như Duyệt nhỉ ? .Câu trả lời sẽ được bật mí sau ít phút nữa</p>
            <Image src={ImageCrush1} alt="ảnh duyệt với crush"
                width={500}
                height={500}
                layout="responsive"
            /> 
          </section>
          <p>Đinh Sĩ Duyệt là một người  đẹp trai! . Thông minh . Biết nấu ăn chăm lo gia đình nè </p>
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
