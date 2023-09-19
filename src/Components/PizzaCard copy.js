import React from 'react'; 

function PizzaCard(props) {
  return (

    <div className="card" style={{width:"300px"}}>
        <img className="card-img-top" src={props.image} alt="Card image" />
        <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text">{props.desc}</p>
            <a href="#" className="btn btn-primary">{props.price}</a>
        </div>
    </div>
    
  )
}

export default PizzaCard;
