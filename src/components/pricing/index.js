import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

    state = {

        prices: [100,150,250],
        positions: ['Balcony', 'Medium', 'Star'],
        description: ['Lorem ipsum dolor amet shoreditch poutine forage hot chicken plaid four dollar toast activated charcoal tilde helvetica blog skateboard umami trust fund thundercats banh mi. Pabst la croix mumblecore seitan gentrify organic. Shoreditch etsy cold-pressed swag ethical echo park messenger bag meh everyday carry subway tile. Enamel pin raclette cred, chia chicharrones squid palo santo.',
        'Lorem ipsum dolor amet shoreditch poutine forage hot chicken plaid four dollar toast activated charcoal tilde helvetica blog skateboard umami trust fund thundercats banh mi. Pabst la croix mumblecore seitan gentrify organic. Shoreditch etsy cold-pressed swag ethical echo park messenger bag meh everyday carry subway tile. Enamel pin raclette cred, chia chicharrones squid palo santo.'
        ,'Lorem ipsum dolor amet shoreditch poutine forage hot chicken plaid four dollar toast activated charcoal tilde helvetica blog skateboard umami trust fund thundercats banh mi. Pabst la croix mumblecore seitan gentrify organic. Shoreditch etsy cold-pressed swag ethical echo park messenger bag meh everyday carry subway tile. Enamel pin raclette cred, chia chicharrones squid palo santo.'],
        linkto: ['http://sales/a','http://sales/b','http://sales/c'],
        delay: [500,0,500]
    }

    showBoxes = () => (
         this.state.prices.map((box,i)=>(

            <Zoom delay={this.state.delay[i]} key={i}>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">

                    <div className="pricing_title">
                    <span>${this.state.prices[i]}</span>
                    <span>{this.state.positions[i]}</span>
                    </div>   

                    <div className="pricing_description">
                    <span>{this.state.description[i]}</span>
                    </div>  

                    <div className="pricing_buttons">
                        <MyButton
                        text="Purchase"
                        bck="#ffa800"
                        color="#ffffff"
                        link={this.state.linkto[i]}
                        />
                    </div>

                </div>
            </div>
            </Zoom>


         )
         )
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing </h2>

                    <div className="pricing_wrapper">
                    {this.showBoxes()}
                    </div>

                
                </div>              
            </div>
        );
    }
}

export default Pricing;