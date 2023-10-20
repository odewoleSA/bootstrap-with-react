import React from 'react';
import pizzas from '../../records.json';
import PizzaCard from '../PizzaCard';
import Slider_Img from '../Slider_Img'

function Home() {
  return (
    <>
      <div className="row" style={{marginTop:"10px"}}>
        <Slider_Img />
      </div>
      <div className="row" style={{marginTop:"30px"}}>
          {
              pizzas.map(pizza => (
              <PizzaCard 
                id= { pizza.id }
                name= { pizza.name }
                image= { `${process.env.PUBLIC_URL}/Images/${pizza.image}` }
                desc= { pizza.desc }
                price= { pizza.price }
              />
          ))
          }
      </div>
    </>
  )
}

export default Home
