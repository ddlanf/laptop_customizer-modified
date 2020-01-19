import React, { Component } from 'react';
import PriceTotal from './PriceTotal/PriceTotal';
import PriceEach from './PriceEach/PriceEach';

class PriceBox extends Component {
    
    render(){

      return (
        <section className="main__summary">
            <h2>Your cart</h2>
                <PriceEach
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
                <PriceTotal
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
        </section>
      );
    }
}
  
  
  export default PriceBox;