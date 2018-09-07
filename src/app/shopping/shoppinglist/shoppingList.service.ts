import {Ingredient} from '../../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Mehl', 500, 'g'),
    new Ingredient('Butter', 500, 'g'),
    new Ingredient('Zucker', 500, 'g')

  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addMultipleIngredients(ingredients) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }  // kann man so machen, löst aber viele Events aus. Besser:
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
