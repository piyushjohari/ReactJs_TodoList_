import React from 'react'
import { TodosItem } from './TodosItem'

export const Todos = (props) => {
    let ts={
        minheight:"70vh"
    }
    return (
        <div className="container my-4" style={ts}>
            <h3 className="my-4">Todos List</h3>
            {props.todos.length === 0 ? "Hurray!! All Done Enjoy Time" :
                   props.todos.map((todo) => {
                        return (
                            <>
                            <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                            <hr />
                            </>
                        )
                    })
                }

        </div>
    )
}
