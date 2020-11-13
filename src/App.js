import './App.css';

const task = (value) => <li key={value} >{value}</li>;

function App() {
  const tasksArr = ['lavar louça', 'comprar comida', 'fazer caminhada'];
  return tasksArr.map(eachTask => task(eachTask));
}

export default App;
