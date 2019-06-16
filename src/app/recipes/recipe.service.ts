import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping/shoppinglist/shoppingList.service';

@Injectable()
export class RecipeService {

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

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice(); // gibt eine exakte Kopie des arrays heraus, ohne slice wäre es die Referenz auf den originalen Array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  AddToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addMultipleIngredients(ingredients);

  }
}

