import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';


@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() singlerecipe: Recipe;
  @Input() index: number;


  constructor() {
  }

  // onRecipeSelect() {
  //   this.recipeService.recipeSelected.emit(this.singlerecipe);
  // }
  ngOnInit() {

  }

}
