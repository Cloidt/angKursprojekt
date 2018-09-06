import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';


@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() singlerecipe: Recipe;

  constructor(private recipeService:RecipeService) {
  }

  onRecipeSelect() {
    this.recipeService.recipeSelected.emit(this.singlerecipe);
  }
  ngOnInit() {
  }

}
