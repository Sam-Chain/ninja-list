import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas, info"/>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vitae enim ipsum aperiam accusantium natus perferendis repellendus similique non aliquid!</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, hic maiores voluptatem labore natus explicabo non nam culpa iure esse?</p>
        <Link href='/ninjas'><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
