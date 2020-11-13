import React from 'react';

import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngredients';

import '../Burger/Burger.css';

const Burger = (props) => {

    return(
        <div className="Burger">
            <BurgerIngredients type="BreadTop" />
            <BurgerIngredients type="Cheese" />
            <BurgerIngredients type="Meat" />
            <BurgerIngredients type="BreadBottom" />
        </div>
    )

}

export default Burger;