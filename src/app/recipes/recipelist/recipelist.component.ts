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
    new Recipe('Keks', 'viele Kekse', 'https://placekitten.com/78/90'),
    new Recipe('Torte', 'mit Buttercreme', 'https://placekitten.com/88/50'),
  ];
  weiterreichen(rezept: Recipe) {
    this.rezeptgewaehltUp.emit(rezept);
  }
  constructor() { }

  ngOnInit() {
  }

}
