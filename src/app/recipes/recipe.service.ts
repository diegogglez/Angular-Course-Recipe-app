import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://runningonrealfood.com/wp-content/uploads/2021/02/Vegan-One-Pot-Pasta-Recipe.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://runningonrealfood.com/wp-content/uploads/2021/02/Vegan-One-Pot-Pasta-Recipe.jpg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
    //con .slice() retornamos una copia del arr original de recipes, no alteramos el original
  }
}
