import React from 'react';
import classes from '../Burger/Burger.css';
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngredients';

const Burger = (props) => {

    return(
        <div className={classes.burger}>
            <BurgerIngredients type="BreadTop" />
            <BurgerIngredients type="Cheese" />
            <BurgerIngredients type="Meat" />
            <BurgerIngredients type="BreadBottom" />
        </div>
    )

}

export default Burger;