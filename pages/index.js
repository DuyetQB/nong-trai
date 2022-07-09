import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import ImageCrush1 from "./images/anh-chup-vs-crush1.jpg";


export default function Home() {
  return (
    <article className={styles.container}>
      <Head>
        <script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <title>Đinh Sĩ Duyệt bất ngờ được vinh danh tại Gala trao giải vinh quang</title>
        <meta name="description" content="đinh sĩ duyệt đẹp trai đã được mời ăn tối cùng các ca sĩ nổi tiếng" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="đinh sĩ duyệt,duyệt ,đinh sĩ duyệt đẹp trai nhất"/>
        <meta id="newskeywords" name="news_keywords" content="đinh sĩ duyệt,duyệt ,đinh sĩ duyệt đẹp trai nhất" />
        <meta name="author" content="Đinh Sĩ Duyệt"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:image" content="https://nong-trai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanh-chup-vs-crush1.08df22f7.jpg&w=1920&q=75"/>
        <link rel="canonical" href="https://nong-trai.vercel.app/" />
        <link rel="alternate" media="only screen and (max-width: 640px)" href="https://nong-trai.vercel.app/"></link>
        <link rel="alternate" media="handheld" href="https://nong-trai.vercel.app/"/>
        <meta httpEquiv="content-language" content="vi"></meta>
        <meta name="resource-type" content="Document"></meta>
        <meta name="distribution" content="Global"></meta>
        <meta name="copyright" content="Đinh Sĩ Duyệt"></meta>
        <meta name="author" content="Đinh Sĩ Duyệt"></meta>
        <meta id="idRobots" name="robots" content="index,follow"></meta>
        <meta httpEquiv="audience" content="General"></meta>
        <meta name="google-site-verification" content="b7ZzRX_o6NPmJoqaV_YUFR-M_TGLak-_hel8qS91OXc" />
        <meta property="article:tag" content="đinh sĩ duyệt,duyệt ,đinh sĩ duyệt đẹp trai nhất"></meta>
        <meta itemProp="headline" property="og:title" content="đinh sĩ duyệt đẹp trai đã được mời ăn tối cùng các ca sĩ nổi tiếng"></meta>
        <meta itemProp="description" property="og:description" content="&quot;đinh sĩ duyệt đẹp trai đã được mời ăn tối cùng các ca sĩ nổi tiếng"></meta>
        <meta itemProp="keywords" content="đinh sĩ duyệt,duyệt ,đinh sĩ duyệt đẹp trai nhất" />
        <meta itemProp="image" content="https://nong-trai.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanh-chup-vs-crush1.08df22f7.jpg&w=1920&q=75" />
        <meta itemProp="url" property="og:url" content="https://nong-trai.vercel.app"></meta>
        <meta property="article:section" content="Sở thích cá nhân" />
        <meta property="og:type" content="article" />
        <meta property="article:author" content="DuyetDS" />
     
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
           Đinh Sĩ Duyệt <a href="https://nextjs.org">DuyetDS!</a>
        </h1>

        <p className={styles.description}>
        Welcome to Đinh Sĩ Duyệt{' '}
          <code className={styles.code}>Yêu em</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Đinh Sĩ Duyệt &rarr;</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Đinh Sĩ Duyệt</h2>
            <p>Đinh Sĩ Duyệt đẹp trai!</p>

          </a>
          <p>Đinh Sĩ Duyệt là một người  đẹp trai! . Thông minh . Biết nấu ăn chăm lo gia đình nè </p>
          <section>
            <p>Làm sao có được làn da đẹp như Duyệt nhỉ ? .Câu trả lời sẽ được bật mí sau ít phút nữa</p>
            <Image src={ImageCrush1} alt="ảnh duyệt với crush"
                width={500}
                height={500}
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
    </article>
  )
}
