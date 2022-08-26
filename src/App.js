import logo from './logo.svg';
import './App.css';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import TaskListComponent from './components/container/task_list';
import Greetingstyle from './components/pure/greetingStyle';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* Ejemplos de uso de HOOKS */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* <Ejemplo4 nombre="Martín">
          <h3>
            Contenido del props.children
          </h3>
          <h2>Aguante Purple!</h2>
        </Ejemplo4> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <Greetingstyle name='Nacho'></Greetingstyle> */}
      {/* </header> */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
