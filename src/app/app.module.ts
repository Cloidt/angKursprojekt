import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {IngredientComponent} from './Z_DELingredient/ingredient.component';
import {ShoppinglistComponent} from './shopping/shoppinglist/shoppinglist.component';
import {RecipelistComponent} from './recipes/recipelist/recipelist.component';
import {RecipeitemComponent} from './recipes/recipelist/recipeitem/recipeitem.component';
import {RecipedetailComponent} from './recipes/recipedetail/recipedetail.component';
import {ShoppinglisteditComponent} from './shopping/shoppinglist/shoppinglistedit/shoppinglistedit.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping/shoppinglist/shoppingList.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipesStartComponent} from './recipes/recipes-start/recipes-start.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {RecipeService} from './recipes/recipe.service';
import {DataStorageService} from './shared/data-storage.service';

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
    ShoppinglisteditComponent,
    RecipesStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
