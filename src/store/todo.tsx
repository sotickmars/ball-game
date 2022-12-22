import { makeAutoObservable } from "mobx";

class ToDo {
    todos = [
        {
            id: 1112,
            title: 'test',
            completed: false,
        },
        {
            id: 2212,
            title: 'test 2',
            completed: true,
        },
        {
            id: 3313,
            title: 'test 3',
            completed: false,
        },
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addToDo(todo: any) {
        this.todos.push(todo)
    }

    removeToDo(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }

    completeToDo(id: any) {
        this.todos = this.todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })

    }
}

export default new ToDo()