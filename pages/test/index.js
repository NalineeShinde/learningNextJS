import styles from '../../styles/practice.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await res.json();
    return{
        props: {
            nalinee : data
        }
    }
}

const Practice = ({nalinee}) => {
    return ( 
        <div>
            <h3>Practice Dynamic Page With Json Data</h3>
        {nalinee.map(nalinee => (
            <Link href={'/test/'+ nalinee.id} key={nalinee.id}>
                <a className={styles.single}><p>{nalinee.name}</p></a>

                </Link>
        ))}
        </div>
     );
}
 
export default Practice;