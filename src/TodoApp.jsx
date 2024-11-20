import React, { useState } from 'react';

function TodoApp() {
  const [todo,setTodo] = useState();
  const [todos,setTodos] = useState([]);

  const [editText , setEditText ] = useState("");
  const [editIndex,setIndex] = useState(-1) 

    const addTodo = (e)=>{
        e.preventDefault();
          setTodos([...todos,todo]);
          setTodo("")
    }

  const deleteTodo=(index)=>{
    const updateTodos = todos.filter((_,i)=> i !== index);
    setTodos(updateTodos)
  }
   const handleEdit =(index)=>{
    setIndex(index);
    setEditText(todos[index]);


   } 

  const handleSave = (index)=>{
    const updatedTodos = [...todos];
    updatedTodos[index] = editText;
    setTodos(updatedTodos);
    setEditText("");
    setIndex(-1);
    
  }
  const handleCancel = ()=>{
    setEditText("")
    setIndex(-1)

  }


  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <form className="flex mb-4">
        <input 
          type="text" 
          className="flex-1 px-3 py-2 border rounded-l-lg border-gray-300 focus:outline-none" 
          placeholder="Add a new task"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
          onClick={addTodo}
         
        >
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo,index) => (
                              editIndex === index ? (
                             
                                <li key={index} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg mb-2">
                                   <input 
                                type="text" 
                                className="flex-1 px-3 py-2 border rounded-l-lg border-gray-300 focus:outline-none" 
                              
                                value={editText}
                                onChange={(e)=>setEditText(e.target.value)}
                              />
                               <div className="">
                               <button 
                                  className="px-2 py-1 text-blue-500 hover:text-blue-600 focus:outline-none"
                                  onClick={()=>handleSave(index)}
                                >
                                  SAVE
                                </button>
                                <button 
                                  className="px-2 py-1 text-red-500 hover:text-red-600 focus:outline-none"
                                  onClick={()=>handleCancel()}
                                >
                                  CANCEL
                                </button>
                               </div>
                              </li>
                            ) : (
                                <li key={index} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg mb-2">
                                <span>{todo}</span>
                               <div className="">
                               <button 
                                  className="px-2 py-1 text-blue-500 hover:text-blue-600 focus:outline-none"
                                  onClick={()=>handleEdit(index)}
                                >
                                  Edit
                                </button>
                                <button 
                                  className="px-2 py-1 text-red-500 hover:text-red-600 focus:outline-none"
                                  onClick={()=>deleteTodo(index)}
                                >
                                  Delete
                                </button>
                               </div>
                              </li>
                            )

))}
      
        
        {/* Add more static tasks here */}
      </ul>
    </div>
  );
}

export default TodoApp;
