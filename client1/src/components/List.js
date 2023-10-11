import React from 'react';
import './List.css';

const List = ({handleDeleteRecord,handleEditRecord,records}) => {
  return (
    <div className="allTodos">
        <h2>Records</h2>
        {records.map((t, index) => (
          <li key={index} className="singleTodo">
            <div className="todoText">
              <span>{t.name}</span>
              <span>{t.email}</span>
            </div>

            <button onClick={() => handleEditRecord(index)}>Edit</button>
            <button onClick={() => handleDeleteRecord(index)}>Delete</button>
          </li>
        ))}
      </div>
  )
}

export default List