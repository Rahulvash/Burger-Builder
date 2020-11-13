import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './BurgerIngredients.css';

class BurgerIngredients extends Component {

    render() {
    let ingredients = null;

    switch( this.props.type) {
        case ('BreadBottom') :
            ingredients = <div className="BreadBottom"></div>
            break;
        case ('BreadTop') : 
            ingredients = ( 
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            );
            break;
        case ('Meat') :
            ingredients = <div className="Meat"></div>
            break;
        case ('Cheese') :
            ingredients = <div className="Cheese"></div>
            break;
        case ('Salad') :
            ingredients = <div className="Salad"></div>
            break;
        case ('Bacon'):
            ingredients = <div className="Bacon"></div>
            break;
        default : 
                ingredients = null
    }
        return ingredients;
    }
    
}

BurgerIngredients.prototypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngredients; 