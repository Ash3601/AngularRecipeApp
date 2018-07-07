import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { } from '@angular/core/src/debug/debug_node';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //  @ViewChild('inputName') inputNameRef: ElementRef;
  // @ViewChild('inputAmount') inputAmountRef: ElementRef;
  
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }


  getIngredients() {

  }

  onAddItem(inputNameRef: string, inputAmountRef: number) {
    this.ingredientAdded.emit(new Ingredient(inputNameRef, inputAmountRef));
  }

}
