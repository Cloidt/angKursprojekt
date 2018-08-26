import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})

export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Mehl', 500, 'g'),
    new Ingredient('Butter', 500, 'g'),
    new Ingredient('Zucker', 500, 'g')

  ];

  constructor() { }

  ngOnInit() {
  }
  onAdded(entry: Ingredient) {
    this.ingredients.push(entry);
  }

}
