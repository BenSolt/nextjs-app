import Link from 'next/link'
import styles from "../styles/Home.module.css";

export default function About() {

    return (
        <main className={styles.main}>
        <div className={styles.container}>
            <h1>ABOUT</h1>
            <Link href="/" className='navItem'>Home</Link>
            <p>about paragraph</p>
        </div>
        </main>
    )
  }