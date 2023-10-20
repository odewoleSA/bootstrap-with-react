import React from 'react';
import './Slider_Img.css';

import img1 from '.././Images/slider_img_1.jpg'
import img2 from '.././Images/slider_img_2.jpg'
import img3 from '.././Images/slider_img_3.jpg'
import img4 from '.././Images/slider_img_4.jpg'

function Slider_Img() {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={img1} alt="Los Angeles" className="d-block" id="slider-img" />
                <div className="carousel-caption">
                    {/* <h3>Los Angeles</h3>
                    <p>We had such a great time in LA!</p> */}
                </div>
            </div>
            <div className="carousel-item">
                <img src={img2} alt="Chicago" className="d-block" id="slider-img" />
                <div className="carousel-caption">
                    {/* <h3>Chicago</h3>
                    <p>Thank you, Chicago!</p> */}
                </div> 
            </div>
            <div className="carousel-item">
                <img src={img3} alt="New York" className="d-block" id="slider-img" />
                <div className="carousel-caption">
                    {/* <h3>New York</h3>
                    <p>We love the Big Apple!</p> */}
                </div>  
            </div>
            <div className="carousel-item">
                <img src={img4} alt="New York" className="d-block" id="slider-img" />
                <div className="carousel-caption">
                    {/* <h3>New York</h3>
                    <p>We love the Big Apple!</p> */}
                </div>  
            </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button>
    </div>
  )
}

export default Slider_Img
