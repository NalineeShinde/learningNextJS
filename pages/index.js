import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <Head>
<title>LearnNextJS | Home</title>
<meta name="keyword" content="Next JS Paractice Meta" />
    </Head>
   <div>
     <h1 className={styles.title}>Home Page</h1>
     <p className={styles.text}>Life is Beautiful
     Life is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is Beautiful
     </p>
     <p className={styles.text}>Life is Beautiful
     Life is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is BeautifulLife is Beautiful
     </p>
     <Link href="/test">
       <a className={styles.btn}>See List </a></Link>
   </div> 
   </>
  )
}
