import { RecipeService } from './../recipe.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSendToSL(ingredients: Ingredient[]) {

    this.recipeService.addIngredientsToSL(this.recipe.ingredients);

  }

}
