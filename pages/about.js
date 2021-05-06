import Head from 'next/head'

import styles from '../styles/Home.module.css'
const About = () => {
    return ( 
        <>
        <Head>
    <title>LearnNextJS | About</title>
    <meta name="keyword" content="Next JS About Meta" />
        </Head>
        <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>.............Life is Beutiful................Life is Beutiful.................Life is Beutiful
        Life is Beutiful..............Life is Beutiful
        </p>
        </div>
        </>
     );
}
 
export default About;