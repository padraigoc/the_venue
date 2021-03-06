import React from 'react';
import Slider from "react-slick";

import four from '../../resources/images/4.jpg';
import two from '../../resources/images/2.jpg';
import three from '../../resources/images/3.jpg';

const Carousel = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
      }

    return (
    <div 
    className="carrousel_wrapper"
    style={{
        height: `${window.innerHeight}px`,
        overflow:'hidden',
        }}>
        
        <Slider {...settings}>
        <div>
            <div 
            className="carrousel_image"
            style={{
                background:`url(${four})`,
                height: `${window.innerHeight}px`
            }}>
            </div>
        </div>

        <div>
           <div className="carrousel_image"
            style={{
                background:`url(${two})`,
                height: `${window.innerHeight}px`
            }}></div>
        </div>

        <div>
            <div className="carrousel_image"
            style={{
                background:`url(${three})`,
                height: `${window.innerHeight}px`
            }}></div>
        </div>


        </Slider>

    </div>
    );
};

export default Carousel;