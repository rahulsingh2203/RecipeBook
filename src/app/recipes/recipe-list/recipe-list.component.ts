import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaG2cfLMIULCNfKLV82l_8K1f7iX_Go-85M_5eCTDxvExQpgNl4s7UWq4YMrsJmI3SURRuGhV7Luu9uHFB53QAu2WnW9E-FN0ollJHgNMMBEjJz2FGuzfFQfBKV5LFWzPztxjgSM9DtPpKrr-qrPlMQJrGwkvEcMxEXeUZSLMBW3_WIR73p-UO4gU30Q/s1280/cheese-garlic-bread-min.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaG2cfLMIULCNfKLV82l_8K1f7iX_Go-85M_5eCTDxvExQpgNl4s7UWq4YMrsJmI3SURRuGhV7Luu9uHFB53QAu2WnW9E-FN0ollJHgNMMBEjJz2FGuzfFQfBKV5LFWzPztxjgSM9DtPpKrr-qrPlMQJrGwkvEcMxEXeUZSLMBW3_WIR73p-UO4gU30Q/s1280/cheese-garlic-bread-min.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
