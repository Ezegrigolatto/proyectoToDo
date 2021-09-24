import './App.css';
import React, { useState } from "react";
import Formulario from './Components/formulario';
import Lista from './Components/lista';
function App() {

  const [todasLasTareas, setTodasLasTareas] = useState([])

  function addToDo (toDo){
    setTodasLasTareas([...todasLasTareas,toDo])
  }

  function deleteToDo(id) {
    setTodasLasTareas(todasLasTareas.filter((tarea) => tarea.id !== id))
  }

  return (
    <div className="App">
     <h1>toDo list</h1>
    <Formulario addToDo={addToDo}/>
    <Lista todasLasTareas={todasLasTareas} deleteToDo={deleteToDo}/>
    </div>
  );
}

export default App;
