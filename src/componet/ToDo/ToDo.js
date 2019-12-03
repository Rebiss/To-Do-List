import React, { Fragment,useState } from 'react';

const To = ({todo, index}) => {
  return  <div className='todo'> {todo.text} </div>
}

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className='input' value={value} placeholder='Add your Task' onChange={event => setValue(event.target.value)}/>
    </form>
  )
}

const ToDo = () => {
  const [todo, setTodo] = useState([
    {
      text: 'This tex is..',
      isCompletid: false
    },
    {
      text: 'This tex is  sdsds wdwf..',
      isCompletid: false
    },
    {
      text: 'This tex is wrewdd..',
      isCompletid: false
    }
  ]); 

  const addTodo = text => {
    const NewToDo = [...text, {text} ];
    setTodo(NewToDo)
  }

  return (
    <Fragment>
        <div>
          { todo.map((todo, index) => <To key={index} index={index} todo={todo} /> )}
          <TodoForm addTodo={addTodo}/>
        </div>
    </Fragment>
  )
}

export default ToDo;
