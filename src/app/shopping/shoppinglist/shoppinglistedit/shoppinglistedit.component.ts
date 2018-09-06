import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../../shared/ingredient.model';
import {ShoppingListService} from '../shoppingList.service';


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('unitInput') unitInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {

  }

   addEntry() {
     const entry: Ingredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value,this.unitInputRef.nativeElement.value);
     this.shoppingListService.addIngredient(entry);
   }

    //this.shoppingListService.ingredientsChanged.emit(entry);  }


}
