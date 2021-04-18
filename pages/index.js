import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Link href='/'>
          <a >Devter</a>
        </Link>
        <Link href='/timeline'><a>Timeline</a></Link>
      </main>

      <style jsx>{`
        h1 {
          color: cyan;
        }
      `}</style>
    </div>
  );
}
