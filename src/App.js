import './App.css';
import JSX from './exercises';

const task = (value) => <li key={value} >{value}</li>;

function App() {
  const tasksArr = ['lavar louça', 'comprar comida', 'fazer caminhada'];
  return (
    <div>
      <div className="title">
        <h1>Exercícios de revisão - React</h1>
      </div>
      <div className="App-header">
        <div className="exercise">
          <h2>Exercício 1-2</h2>
          {tasksArr.map(eachTask => task(eachTask))}
        </div>

        <div className="exercise">
          <h2>Exercício 3</h2>
          {JSX}
        </div>
      </div>
    </div>
  );
}

export default App;
