import React from 'react'

export default function Tarea({toDo,deleteToDo}) {

    function handleDelete(){
        deleteToDo(toDo.id);
    }

    return (
        <div>
            {toDo.tarea}
            <button onClick={handleDelete}>X</button>
        </div>
    )
}