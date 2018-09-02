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
    new Recipe('Keks', 'viele Kekse', 'https://loremflickr.com/320/240/cookies'),
    new Recipe('Torte', 'mit Buttercreme', 'https://loremflickr.com/320/240/cake'),
  ];
  weiterreichen(rezept: Recipe) {
    this.rezeptgewaehltUp.emit(rezept);
  }
  constructor() { }

  ngOnInit() {
  }

}
