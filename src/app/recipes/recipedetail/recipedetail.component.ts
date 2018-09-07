import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input() diesesRezept: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  toShoppingList(zutaten) {
    this.recipeService.AddToShoppingList(zutaten);
  }


}
