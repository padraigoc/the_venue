import React from 'react';
import Carousel from './Carousel';
import TimeUntil from './TimeUntil';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const Featured = () => {
    return (
    <div style={{position:'relative'}}>
    
        <Carousel/>
            <div className="artist_name">
            <Fade>
                <div className="wrapper">
                  Lollapalooza  
                  2019
                </div>   
            </Fade>
            </div>    

            <TimeUntil/>       
    </div>

    );
};

export default Featured;