import React from 'react'

export const TodosItem = ({todo,onDelete}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <h6>{todo.desc}</h6>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}> Delete </button>
        </div>
    )
}
