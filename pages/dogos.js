import Link from 'next/link'
import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react';

export default function Dogos() {

    const [pets, setPets] = useState([]);
    const [breed, setBreed] = useState("mix");

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };


    const fetchHello = async () => {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/15`);
        const data = await res.json();
        setPets(data);
    };

    useEffect(() => {
        axios
          .get(`https://dog.ceo/api/breed/${breed}/images/random/15`)
          .then((response) => {
            const doggos = response.data.message;
            console.log(doggos);
            setPets(doggos);
          });
      }, [breed]);

    return (
        <div>
            <main className={styles.main}>
                <div className={styles.navbarContainer}>
                    <Link href="/" className='navItem'>Home</Link>
                </div>
                <div>
                    <h2>DOGOS</h2>
                    <p>about dogs</p>
                </div>
            </main>
        </div>
    )
}