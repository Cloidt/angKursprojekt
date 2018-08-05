import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ShoppinglistComponent } from './shopping/shoppinglist/shoppinglist.component';
import { RecipelistComponent } from './recipebook/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipebook/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipebook/recipedetail/recipedetail.component';
import { ShoppinglisteditComponent } from './shopping/shoppinglistedit/shoppinglistedit.component';
import { HeaderComponent } from "./header/header.component";
import { RecipebookComponent } from './recipebook/recipebook.component';

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
    RecipebookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
