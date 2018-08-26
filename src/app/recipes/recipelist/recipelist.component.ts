import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
    @Output() rezeptgewaehltUp = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Keks', 'viele Kekse', 'http://lorempixel.com/80/90/food'),
    new Recipe('Torte', 'mit Buttercreme', 'http://lorempixel.com/100/70/food'),
  ];
  weiterreichen(rezept: Recipe) {
    this.rezeptgewaehltUp.emit(rezept);
  }
  constructor() { }

  ngOnInit() {
  }

}
