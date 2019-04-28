import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppinglistComponent} from './shopping/shoppinglist/shoppinglist.component';
import {RecipesStartComponent} from './recipes/recipes-start/recipes-start.component';
import {RecipedetailComponent} from './recipes/recipedetail/recipedetail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      {path: '', component: RecipesStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipedetailComponent},
      {path: ':id/edit', component: RecipeEditComponent},
    ]
  },
  {path: 'shopping-list', component: ShoppinglistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
