import React, {useState} from 'react'
import './App.css';
import Order from './components/Order'
import ComposePizza from './components/ComposePizza'

function App() {

  const [pizza, setPizza] = useState(null);

  const getPizza = (pizza) => {
    setPizza(pizza);
  }

  return (
    <div className="App">
      <div className="content">
        <ComposePizza getPizza={getPizza} />
        <Order newPizza={pizza} />
      </div>
      
    </div>
  );
}

export default App;
