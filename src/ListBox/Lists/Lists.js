import React, { Component } from 'react';
import Item from './Item/Item';

class Lists extends Component {
    
    render(){

      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = (
          <Item
            feature={feature}
            updateFeature={(feature, newValue) => this.props.updateFeature(feature, newValue)}
            features={this.props.features}
            selected={this.props.selected}
            USCurrencyFormat={this.props.USCurrencyFormat}
        />);
        
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });

      return (
        <>
        {features}
        </>
      );
    }
  }
  
  export default Lists;