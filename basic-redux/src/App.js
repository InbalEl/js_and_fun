import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App(props) {

  const reduxStoreCounter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  
  const incAction = {type: 'INCREMENT'}
  const decAction = {type: 'DECREMENT'}

  function onIncHandler() {
    dispatch(incAction)
  }
  
  function onDecHandler() {
    dispatch(decAction)
  }

  return (
    <div className="App">
      <h1>Counter: {reduxStoreCounter}</h1>
      <button onClick={onIncHandler}> Inc </button>
      <button onClick={onDecHandler}> Dec </button>
    </div>
  );
}

export default App;
