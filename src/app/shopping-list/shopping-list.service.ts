import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingredientsChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngridients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
      // this.addIngredient(ingredient);
    // } 
    //!Con este método generamos demasiados eventos

    //?El spread operator nos permite separar un array en una lista de elementos para poder pushearlos de una sola vez
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice())

  }

}
