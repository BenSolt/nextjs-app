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
    // ////////////////////////////////////////////////////
    const fetchHello = async () => {
        const res = await fetch("/api/hello");
        const data = await res.json();
        setHello(data);
    };
    const fetchBlog = async () => {
        const res = await fetch("/api/blog");
        const data = await res.json();
        setBlog(data);
    };
    //////////////////////////////////////////////////////////
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
                <Link href="/" className='navItem'>Home</Link>
                </div>
                
                <div>
                    <button onClick={fetchTodos}>Get todos</button>
                    <button onClick={fetchHello}>Get Hello</button>
                    <button onClick={fetchBlog}>Get Blog</button>
                </div>

                <h2>Add Todo</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} value={newTodo.todo} />
                </form>

                <ul>
                    list todo items
                    {todos.map((e) => {
                        return (
                            <li
                                style={{ color: `${e.completed ? "green" : "red"}` }}
                                key={e.id}
                            >
                                {e.todo}:{e.completed}.
                            </li>
                        );
                    })}

                    {hello.name}
                    {blog.name}
                    {blog.info}
                </ul>
                </main>
            </div>
    );
}