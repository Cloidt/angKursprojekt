import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {IngredientComponent} from './Z_DELingredient/ingredient.component';
import {ShoppinglistComponent} from './shopping/shoppinglist/shoppinglist.component';
import {RecipelistComponent} from './recipes/recipelist/recipelist.component';
import {RecipeitemComponent} from './recipes/recipelist/recipeitem/recipeitem.component';
import {RecipedetailComponent} from './recipes/recipedetail/recipedetail.component';
import {ShoppinglisteditComponent} from './shopping/shoppinglistedit/shoppinglistedit.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {FormsModule} from '@angular/forms';
import {DropdownDirective} from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    IngredientComponent,
    RecipedetailComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipesComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}