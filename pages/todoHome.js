import Head from "next/head";
import { useReducer, useState } from "react";

import Link from 'next/link'
import styles from "../styles/Home.module.css";

export default function Home() {
    const [todos, settodos] = useState([]);

    const [hello, setHello] = useState([]);
    const [blog, setBlog] = useState([]);

    const [newTodo, setnewTodo] = useState({
        todo: "",
        completed: false,
    });
    const [toggle, setToggle] = useState(true);
    const [color, setColor]= useState('red');

    const toggleTodo = (e) => {

        setToggle(!toggle)
        console.log(toggle)
        if (toggle) {
            setColor('green')
        } else {
            setColor('red')
        }
        // console.log(color)
    };

    const fetchTodos = async () => {
        const res = await fetch("/api/todos");
        const data = await res.json();
        settodos(data);
    };

    const saveTodo = async (e) => {
        const response = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(newTodo),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        settodos(data);
    };

    const handleChange = (e) => {
        setnewTodo({
            todo: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveTodo();
        setnewTodo({
            todo: '',
        });
    };

    return (
        <div>
            <main className={styles.main}>
                <div className={styles.navbarContainer}>
                    <Link href="/" className='navItem'>HOME</Link>
                </div>

                <div className="container">
                    <button onClick={fetchTodos}>Get todos</button>

                    <h4>Add Todo</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={handleChange} value={newTodo.todo} />
                    </form>
                </div>


                <ul>
                    list todo items
                    {todos.map((e) => {
                        return (
                            <li
                                //style={{ color: `${e.completed ? "green" : "red"}` }}
                                style={{ color: color }}
                                key={e.id}
                                onClick={toggleTodo}
                            >
                                {e.todo}:{e.completed}
                            </li>
                        );
                    })}
                </ul>

            </main>

            <div>

            </div>

        </div>
    );
}