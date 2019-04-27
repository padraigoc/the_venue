import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        },20)
    }

    render() {
        return (
            <div className="center_wrapper">
             <div className="discount_wrapper">

                <Fade onReveal={()=> this.porcentage()}>
                <div className="discount_porcentage">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                </div>  
                </Fade>

                <Slide right>
                <div className="discount_description">
                    <h3>Purchase Tickets before 20th June</h3>
                    <p>Cronut helvetica air plant bicycle rights portland. Snackwave asymmetrical master cleanse, 3 wolf moon celiac next level keffiyeh pickled poutine af bicycle rights art party photo booth semiotics. Lomo kombucha enamel pin, succulents bushwick tbh chillwave photo booth organic. Meditation ramps occupy, activated charcoal taiyaki mustache craft beer chartreuse pinterest tote bag post-ironic organic umami.</p>  

                     <div>
                    button
                    </div>
                </div>  
                </Slide>   

             </div>            
            </div>
        );
    }
}

export default Discount;