import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Recipe} from '../../recipe.model';


@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() singlerecipe: Recipe;
  @Output() rezeptgewaehlt = new EventEmitter<void>();

  onRecipeSelect(){
    this.rezeptgewaehlt.emit();
  }
  constructor() {
  }

  ngOnInit() {
  }

}
