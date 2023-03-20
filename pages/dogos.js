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

    // const fetchTodos = async () => {
    //     const res = await fetch("/api/todos");
    //     const data = await res.json();
    //     setPets(data);
    // };

    return (
        <div>
            <main className={styles.main}>
                <div className={styles.navbarContainer}>
                    <Link href="/" className='navItem'>Home</Link>
                </div>
                <div>
                    <h2>DOGOS</h2>

                    {/* <button onClick={fetchTodos}>Get todos</button> */}

                    <div className="container">
                        {/* <input
                            id="input"
                            type="text"
                            name={breed}
                            onChange={handleChange}
                            value={inputValue}
                        /> */}
                        {/* <button onClick={() => setBreed(inputValue)}>Submit</button>

                        <button onClick={() => setBreed("mastiff")}>Mastiff</button>
                        <button onClick={() => setBreed("labrador")}>Labrador</button>

                        <button onClick={() => setBreed("mix")}>mix</button> */}

                        <div className="entry">
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