import {Ingredient} from '../../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Mehl', 500, 'g'),
    new Ingredient('Butter', 500, 'g'),
    new Ingredient('Zucker', 500, 'g')

  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }


  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index) {
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addMultipleIngredients(ingredients) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }  // kann man so machen, löst aber viele Events aus. Besser:
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index, newIngedrient: Ingredient) {
    this.ingredients[index] = newIngedrient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
