import React from 'react';
import './ToDos.css'

const ToDos = () => {

    return (
        <div className='list'>
            <h2>To Do List</h2>
            <i></i>
            <label>
                <input type="checkbox"/>
                <span>This text for To do List</span>
            </label>
        </div>
    )
}

export default ToDos;