import React, { useState } from 'react'; 
import './App.css';
import pizzas from './data.json';

import PizzaCard   from './Components/PizzaCard';
import Confirmation   from './Components/Confirmation';

function App() {
  const [ordered, setOrdered] = useState(false);

  function displayConfirm(){
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  }

  return (
      <div className="container">
        {ordered && <Confirmation toggle={setOrdered} /> }
        <div className="row">
          {
            pizzas.map((data) => (
              <div className="col-md-3 mb-5" key={`${data.id}`}>
                <PizzaCard props={data}  setOrdered={displayConfirm} />
              </div>
            ))}
        </div>
      </div>
  );
}

export default App;
