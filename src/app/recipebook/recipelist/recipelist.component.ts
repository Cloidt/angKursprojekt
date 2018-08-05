import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipebook.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Keks', 'viele Kekse', 'https://placekitten.com/78/90'),
    new Recipe('Torte', 'mit Buttercreme', 'https://placekitten.com/88/50'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
