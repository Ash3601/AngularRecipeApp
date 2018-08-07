import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";
@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  // @Output() recipeDetailSelection = new EventEmitter<void>();

  // selectedRecipe() {
  //   // this.recipeDetailSelection.emit();
  //   this.recipeServie.recipeSelected.emit(this.recipe);

  // }
  constructor(private recipeServie: RecipeService) {}

  @Input() id: number;

  ngOnInit() {}
}
