import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel, just awesome!', 
      'https://thewoksoflife.com/wp-content/uploads/2021/04/schnitzel-recipe-14.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
      ),
    new Recipe(
      'Potatoes salad', 
      'healthy and tasty', 
      'https://i.blogs.es/4753ad/ensalada_campera-copia/1366_2000.jpg',
      [
        new Ingredient('Potatoes', 4),
        new Ingredient('Tomatos', 1),
        new Ingredient('lettuce', 1)
      ]
      )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
    //con .slice() retornamos una copia del arr original de recipes, no alteramos el original
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.shoppingListService.addIngridients(ingredients)
  }
}
