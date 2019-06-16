import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../../shared/ingredient.model';
import {ShoppingListService} from '../shoppingList.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {


  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {

  }

  onAddItem(form: NgForm) {
    const value = form.value;
    console.log(value);
    const newIngredient: Ingredient = new Ingredient(value.name, value.amount, value.unit);
    this.shoppingListService.addIngredient(newIngredient);
  }

  //this.shoppingListService.ingredientsChanged.emit(entry);  }


}
