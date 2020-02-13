import React from 'react'


const Todos = ({todos}) => {
const todolist = todos.length ? (

todos.map(todo => {
    return (
       < div >
<span>{todo.content}</span>
       </div>
    )
})

) : (
    <p className= "middle"> 
    </p>
)
    return(
        <div className="todos collection">
            {todolist}
        </div>
    )
}
export default Todos