import logo from './logo.svg';
import './App.css';

let counterValue = 0

function App() {
  return (
    <div className="App">
      <h1>Counter: {counterValue}</h1>
      <button id='increment'>+</button>
      <button id='decrement'>-</button>
    </div>
  );
}

export default App;
