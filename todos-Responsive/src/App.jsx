import './App.css';
import Header from './Component/Header';
import { Todos } from './Component/Todos';
import {AddTodo} from './Component/AddTodo';
import { Footer } from './Component/Footer';
import { About } from './Component/About';
import React, {useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    console.log('I am on delete',todo)
    // deleting this way not work in react
    // let index = todos.indexOf(todo)
    // todos.splice(index,1)

    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }))
    localStorage.setItem('todos',JSON.stringify(todos)) 
   }

  const addTodo =(title,desc)=>{
    console.log('I am adding this  Todo',title,desc)
    let id;
    if(todos.length==0){
      id=0;
    }
    else{
       id = todos[todos.length-1].id + 1;
    }
    
    const myTodo ={
      id: id,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]) 
    console.log(myTodo);   
    
  }

  const[todos,setTodos]=useState(initTodo)
   useEffect(() => {
   localStorage.setItem("todos",JSON.stringify(todos))
   }, [todos])

  return (

   
          <>
               <Router>
              <Header title={"Abid-ToDos-List"}/>
              <Switch>
              <Route exact path="/" render={()=>{
              return(
                      <>
                        <AddTodo addTodo={addTodo}/> 
                        <Todos todos={todos} onDelete={onDelete}/>
                      </>)
                      }}/>
          <Route exact path="/about"  >
            <About/>
            </Route>
          </Switch>
        <Footer/>
        </Router>
        </>

    );
  }

  export default App;