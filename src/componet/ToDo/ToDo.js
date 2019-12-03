import React, {useState} from 'react';

const ToDo = () => {
  const [newTodo, setNewTodo] = useState();
  const [todos, setTodos] = useState([]);

  const handleNewTodoChange = (event) => {
    event.preventDefault();
    setNewTodo(event.target.value);
  }

  const handleNewTodo = (event) => {
    event.preventDefault();
    if(newTodo === '') return;
    setTodos([...todos, {id: Date.now(), text: newTodo }]);
    event.target.reset();
  }

  const removeTodo = (id) => {
    setTodos(todos.filter( todo => todo.id != id ))
  }

  return (
    <div className='demo-component'>
      <h1>To Do List</h1>
      <form onSubmit={handleNewTodo}>
        <input type="text" placeholder='Add your Task' onChange={handleNewTodoChange}/>
        <ul>
            {todos.map(todo => (
                 <li key={todo.id}>
                 {todo.text}
                 <a href='#' onClick={() => removeTodo(todo.id)}>X</a>
               </li>
            ))}
        </ul>
      </form>
    </div>
  )
}

export default ToDo;