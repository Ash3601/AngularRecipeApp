import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  // Subject for editing the shopping list
  startedEditing = new Subject<number>();


  ingredientsChanged = new Subject<Ingredient[]>();
  // ingredientsChanged2 = new EventEmitter<Ingredient>();

  // Its always better to create private properties and public getter setter method
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIndredient (index: number) {
    return this.ingredients[index];
  }

  // addToIngList(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  //   // this.ingredientsChanged2.emit(ingredient);

  // }

  addIngriedient (ingredient: Ingredient) {

    // Using spread operator

    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // Updating ingredient
  updateIngredient (index :number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  // Delete ingredient
  deleteIngredient (index: number ) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
