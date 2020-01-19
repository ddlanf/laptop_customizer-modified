import React, { Component } from 'react';

import Lists from './Lists/Lists';


class Listbox extends Component {
    
    render(){
      return (
        <div className="ListBox">
          <form className="main__form">
              <h2>Customize your laptop</h2>
              <Lists
                updateFeature={(feature, newValue) => this.props.updateFeature(feature, newValue)}
                features={this.props.features}
                selected={this.props.selected}
                USCurrencyFormat={this.props.USCurrencyFormat}
              />
          </form>
        </div>
      );
    }
  }
  
  export default Listbox;