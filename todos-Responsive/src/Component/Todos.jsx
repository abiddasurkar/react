import React from 'react'
import { TodoItem } from '../Component/TodoItem'

export const Todos = (props) => {
  return (
    
    <div className='container '>
      <h3 className='text-center my-3 text-3xl'>Todos List</h3>
      {props.todos.length===0? 'No to-dos here':
      props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.id}  onDelete={props.onDelete}/>

      })}     
    </div>
  )
}
