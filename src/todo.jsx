import { useState } from "react"

export default function Todo(){
    let [todos,setTodos]=useState(["sample task"]);
    let [newtodo,setNewtodo]=useState("");

    let updatevalue=(event)=>{
        setNewtodo(event.target.value);
    };

    let addnewTask=()=>{
        setTodos([...todos,newtodo]);
        setNewtodo("");

    }

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
                    <li>{todos}</li>
                ))}
            </ul>
        </div>
    )
}