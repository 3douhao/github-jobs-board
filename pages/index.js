import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github Jobs Board</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h2>this is homepage</h2>
    </div>
  )
}
