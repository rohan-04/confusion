import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes.js';
import DishDetail from './DishdetailComponent';

export default class MainComponent extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish: null
    };
  }

    onDishSelect(dishId) {
      this.setState({ selectedDish: dishId});
    }

  render() {
    return (
      <div>
      <Navbar dark color="primary">
              <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
              </div>
            </Navbar>
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <div>  
              <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>

      </div>
    );
  }
}

