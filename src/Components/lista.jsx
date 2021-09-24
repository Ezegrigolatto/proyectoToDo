import React from 'react';
import Tarea from "./tarea"

export default function Lista({todasLasTareas, deleteToDo}){
    return(
        <ul>
            {todasLasTareas.map((tareita) => (
                <Tarea key= {tareita.id} toDo= {tareita}  deleteToDo= {deleteToDo}/>
            ))}
        </ul>
    )
}