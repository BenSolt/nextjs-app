import Link from 'next/link'
import styles from "../styles/Home.module.css";

export default function About() {

    return (
        <div>
            <main className={styles.main}>
                <div className="navbarContainer">
                    <Link href="/" className='navItem'>HOME</Link>
                </div>

                <div className="container">
                    <h2>ABOUT</h2>
                    <p>about paragraph</p>
                </div>
            </main>
        </div>
    )
}