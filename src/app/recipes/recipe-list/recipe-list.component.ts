import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://runningonrealfood.com/wp-content/uploads/2021/02/Vegan-One-Pot-Pasta-Recipe.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://runningonrealfood.com/wp-content/uploads/2021/02/Vegan-One-Pot-Pasta-Recipe.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
