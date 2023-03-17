// import { todos } from "../../todo";

const todos = [
    {
        id: 1,
        todo: "dishes",
        completed: false,
        userId: 1
    },
    {
        id: 2,
        todo: "mow lawn",
        completed: false,
        userId: 3
    }
];


export default function handler(req, res) {
    const { method } = req;
   
    switch (method) {
        case "GET":
            res.status(200).json(todos);
            break;
        case "POST":
            const { todo, completed } = req.body;
            todos.push({
                id: todos.length + 1,
                todo,
                completed,
            });
            res.status(200).json(todos);
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}