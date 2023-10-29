import './App.css';
import { useCounter } from './pages/useCounter';

function App() {

  const { count, increase, decrease, restart } = useCounter();
  return (
    <div className="App">
      {count}
      <button onClick={increase} >increase</button>
      <button onClick={decrease} >decrease</button>
      <button onClick={restart} >restart</button>
    </div >
  );
}

export default App;
