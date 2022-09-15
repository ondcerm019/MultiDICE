import './App.css';
import {useState, useEffect} from "react";
import DiceContainer from "./components/DiceContainer";
import DiceCount from "./components/DiceCount";

function App() {
  const [count, setCount] = useState(4);
  const [dices, setDices] = useState([]);
  useEffect(() => {
    let arr = [];
    for(let i = 0; i < count; i++) {
      arr.push(Math.floor(Math.random()*6)+1);
    }
    setDices(arr);
  },[count]);

  return (
    <div className="App">
      <DiceCount value={count} setValue={setCount} />
      <DiceContainer dices={dices} setDices={setDices}/>
    </div>
  );
}

export default App;
