import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.35,
  meat: 1.5,
  bacon: 0.9
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     burgerIngredients: {
  //       meat: 1,
  //       salad: 2,
  //       bacon: 2,
  //       cheese: 3
  //     }
  //   };
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5
  };

  // Adds Additional Ingredient (Salad, Bacon, Meat, Cheese), updates ingredients and totalPrice property
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type]; // No multiply (*) sign needed since adding ONE at a time!
    const oldPrice = this.state.totalPrice; // totalPrice number
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type]; // returns a number of type of ingredients
    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceReduction = INGREDIENT_PRICES[type]; // No multiply (*) sign needed since adding ONE at a time!
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceReduction;

      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      });
    } else {
      return;
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; // checks key of each ingredient <= 0, return TRUE/FALSE
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
          />
        </div>
        <div>Modal</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
