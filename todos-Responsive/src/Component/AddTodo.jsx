import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");

const submit = (e)=>{
     e.preventDefault();
    if(!title  || !desc){
    alert('Title or decription cannot be blanked');
    }
   else{
    addTodo(title,desc);
    setTitle("");
    setDesc("");
   } 

} 

  return (
    <div className=" m-auto mt-16 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h3>Add To-Do List</h3>
    <form onSubmit={submit}>
      <div className=" mb-6">
        <label htmlFor='title' className="form-label">To-Do Title</label>
        <input className='form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'  
          value={title} id="title" onChange={(e)=>setTitle(e.target.value)} type="text" />
      </div>
      <div className="form-group mb-6">
        <label htmlFor='desc' className="form-label">To-Do description</label>
        <input  className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
           value={desc} id="desc" onChange={(e)=>setDesc(e.target.value)} type="text" />
      </div>
      <div className="flex justify-between items-center mb-6">
       
       
      </div>
      <button type="submit" className="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Add todo</button>
      
    </form>
  </div>

  )
}

export default AddTodo