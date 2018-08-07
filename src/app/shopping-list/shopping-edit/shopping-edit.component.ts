import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  OnDestroy
} from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import {} from "@angular/core/src/debug/debug_node";
import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from "../../../../node_modules/@angular/forms";
import { Subscription } from "../../../../node_modules/rxjs";
@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // For destroying our subject
  subscription: Subscription;

  // Creating edit mode property to check if we need to edit form or not
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  // Getting access to form element
  @ViewChild("f") slForm: NgForm;

  //  @ViewChild('inputName') inputNameRef: ElementRef;
  // @ViewChild('inputAmount') inputAmountRef: ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (id: number) => {
        this.editedItemIndex = id;
        this.editMode = true;
        this.editedItem = this.slService.getIndredient(id);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  getIngredients() {}

  onSubmitSl(form: NgForm) {
    // this.ingredientAdded.emit(new Ingredient(inputNameRef, inputAmountRef));
    // this.slService.addToIngList(new Ingredient(inputNameRef, inputAmountRef));
    const newIngridient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode === true) {
      this.slService.updateIngredient(this.editedItemIndex, newIngridient);
    } else this.slService.addIngriedient(newIngridient);
    console.log(form);
    this.slForm.reset();
    this.editMode = false; 
  }

  // Using clear button
  onClear () {
    this.slForm.reset();
    this.editMode = false; 
  }

  onDelete () {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
