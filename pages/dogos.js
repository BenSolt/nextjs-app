import { useState, useEffect } from 'react';
import axios from 'axios'
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import PetCard from "./components/PetCard";

export default function Dogos() {

    const [pets, setPets] = useState([]);
    const [breed, setBreed] = useState("mix");

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
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
                    <Link href="/" className='navItem'>HOME</Link>
                </div>
                <div>

                    <div className="container">
                        <h2>DOGOS</h2>
                        <div>
                            <input
                                id="input"
                                type="text"
                                name={breed}
                                onChange={handleChange}
                                value={inputValue}
                            />
                            <button className='submitBtn' onClick={() => setBreed(inputValue)}>Submit</button>

                            <button onClick={() => setBreed("mastiff")}>Mastiff</button>
                            <button onClick={() => setBreed("labrador")}>Labrador</button>
                            <button onClick={() => setBreed("mix")}>mix</button>
                        </div>

                        <div className="dog-card-container">
                            {pets.map((petUrl) => {
                                return <PetCard key={petUrl} breed1={breed} imgUrl={petUrl} />;
                            })}

                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}