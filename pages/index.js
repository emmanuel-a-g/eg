import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emmanuel Garcia</title>
        <meta
          name="description"
          content="Hi, my name is Emmanuel Garcia I am a software developer and this is my personal website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
      <div>by Emmanuel Garcia</div>
      </footer>
    </div>
  );
}
