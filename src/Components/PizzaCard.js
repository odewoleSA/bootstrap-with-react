import React,{ useState } from 'react'; 
import Confirmation from './Confirmation';
import './Slider_Img.css';

function PizzaCard(pizza) {
  const [ordered, setOrdered] = useState(false);

  function displayConfirm(){
    setOrdered(true);

    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  };

  return (
    <div className="col-md-3 mb-5" key={`${pizza.id}`} >
      <div className="card" id="card-box">
          <img className="card-img-top" src={pizza.image} style={{width:"auto",height:"250px"}} alt="Card image" />
          <div className="card-body">
              <h4 className="card-title">
                {pizza.name} &nbsp;&nbsp;
                <span class="badge rounded-pill bg-warning mb-1 mt-5">{pizza.price}</span>
              </h4> 
              <p className="card-text">{pizza.desc}</p>
              <button className="btn btn-success mt-auto font-weight-bold" onClick={() => displayConfirm()}>
                Order Pizza
              </button>
          </div>
        </div>
        {ordered && <Confirmation toggle={setOrdered} /> }
    </div>
  )
}

export default PizzaCard;
