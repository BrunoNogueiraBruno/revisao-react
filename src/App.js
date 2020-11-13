import './App.css';
import JSX from './Exercise-1';
import Card from './Exercise-2';

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
          <ol>
            {tasksArr.map(eachTask => task(eachTask))}
          </ol>
        </div>

        <div className="exercise">
          <h2>Exercício 3</h2>
          {JSX}
        </div>

        <div className="exercise">
          <h2>Exercício 4</h2>
          {Card}
        </div>

      </div>
    </div>
  );
}

export default App;
