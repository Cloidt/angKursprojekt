import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  // @Input() diesesRezept: Recipe;
  diesesRezept: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.diesesRezept = this.recipeService.getRecipe(this.id);
      //  this.diesesRezept = this.recipeService.getCurrentRecipe(params['id']);  // mein Ansatz

      });
  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})

  }

  toShoppingList(zutaten) {
    this.recipeService.AddToShoppingList(zutaten);
  }


}
