import React from 'react'


const Todos = ({todos}) => {
const todolist = todos.length ? (

todos.map(todo => {
    return (
       < div className="collection.item" key={todo.id}>
<span>{todo.content}</span>
       </div>
    )
})

) : (
    <p className= "middle"> 
    No todo's left
    </p>
)
    return(
        <div className="todos collection">
            {todolist}
        </div>
    )
}
export default Todos