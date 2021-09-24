import React, { useState } from "react";

var  idToDo = 0

export default function Formulario({addToDo}) {
 
const  [toDo, setToDo] = useState({id:"",tarea:""});

function handleInput (e){
setToDo({...toDo,tarea:e.target.value})
}

function handleSubmit (evento){
evento.preventDefault();
if (toDo.tarea.trim()){
addToDo({...toDo,id:idToDo++})
}
evento.target.reset()
}

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput}/>
      <button type="submit">Enviar</button>
    </form>
  );
}
