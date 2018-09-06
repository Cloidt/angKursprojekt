import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Keks',
      'viele Kekse',
      '..\\assets\\1776_43267487844_1399f01620_320_240_nofilter.jpg',
      [
        new Ingredient('Butter', 200, 'g'),
        new Ingredient('Zucker', 200, 'g'),
        new Ingredient('Schokostreusel', 10, 'g'),
      ]
    ),
    new Recipe(
      'Torte',
      'mit Buttercreme',
      '..\\assets\\4688_39482175302_9a3d6f87bd_320_240_nofilter.jpg',
      [
        new Ingredient('Buttercreme', 200, 'g'),
        new Ingredient('Mandarinen', 200, 'g'),
        new Ingredient('Schokostreusel', 10, 'g'),
      ])
  ];

  getRecipes() {
    return this.recipes.slice(); // gibt eine exakte Kopie des arrays heraus, ohne slice wäre es die Referenz auf den originalen Array
  }
}
