import React, { useState } from 'react'
import cx from 'classnames'
import todo from 'store/todo'

import td from './todo.module.scss'
import { observer } from 'mobx-react-lite';


export const ToDo: React.FC = observer(() => {
    return (
        <div className={cx(
            td['todo']
        )}>
            <button onClick={() => todo.fetchTodos()}>GET TODOS</button>
            <ul className="">
                {todo.todos.map((todoEl: any) => {
                    return (
                        <li key={todoEl.id}>
                            <p>{todoEl.id}</p>
                            <p>{todoEl.title}</p>
                            <input type='checkbox'
                                checked={todoEl.completed}
                                onChange={() => todo.completeToDo(todoEl.id)}
                            />
                            <button onClick={() => { todo.removeToDo(todoEl.id) }}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
})