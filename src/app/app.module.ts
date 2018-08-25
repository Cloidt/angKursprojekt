import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IngredientComponent } from './Z_DELingredient/ingredient.component';
import { ShoppinglistComponent } from './shopping/shoppinglist/shoppinglist.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { ShoppinglisteditComponent } from './shopping/shoppinglistedit/shoppinglistedit.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientComponent,
    ShoppinglistComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    ShoppinglisteditComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
