import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function Todo(){
    let [todos,setTodos]=useState([{task:"sample task",id:uuidv4()}]);
    let [newtodo,setNewtodo]=useState("");

    let updatevalue=(event)=>{
        setNewtodo(event.target.value);
    };

    let addnewTask=()=>{
        setTodos((prevTodos)=>{
            return [...todos,{task:newtodo,id:uuidv4()}]});
        setNewtodo("");

    }
    let deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id!=id));
        
    }
    let uppercaseAll= ()=>{
        setTodos(
            todos.map((todo)=>{
                return{
                    ...Todo,
                    task:todo.task.toUpperCase(),
                };
            })
        )
    }
    // let uppercaseOne = (id)=>{
    //     setTodos((todos)=>{
    //         todos.map((todo)=>{
    //             if(todo.id == id){
    //                 return{
    //                     ...Todo,
    //                     task:todo.task.toUpperCase(),
    //                 };

    //             }else{
    //                 return todo;
    //             }
                
                
    //         })}
    //     )
        

    // }

    return(
        <div>
            <input placeholder="add task" onChange={updatevalue} value={newtodo}></input>
            <br></br>
            <br></br>
            <button onClick={addnewTask}>add</button>
            <br></br>
            <br></br>
            <hr></hr>
            <h3>Todo List</h3>
            <ul>
                {todos.map((todos)=>(
                    <li key={todos.id}>
                        <span>{todos.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todos.id)}>delete</button>
                        {/* <button onClick={uppercaseOne}>Uppercase</button> */}
                    </li>
                ))}
            </ul>
            <button onClick={uppercaseAll}>Uppercase All</button>
        </div>
    )
}