import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('unitInput') unitInputRef: ElementRef;
  @Output() entryAdded = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  addEntry() {
    const entry: Ingredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value,this.unitInputRef.nativeElement.value);
    this.entryAdded.emit(entry);
  }


}
