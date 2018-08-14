import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import {
  ActivatedRoute,
  Params,
  Router
} from "@angular/router";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  // recipe = RecipeDetail
  recipeDetail: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private slService: ShoppingListService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  // Get list of Ingridients of the selected recipe in a list
  onAddToSL() {
    this.slService.addIngredientsToSL(this.recipeDetail.ingredients);
  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipeDetail = this.recipeService.getRecipeIndex(this.id);
    });
    // this.recipeService.recipesChanged.subscribe(
    //   (recipe: Recipe[]) => {
    //     this
    //   }
    // );
  }

  // delete recipe button
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  isAuthenticated () {
    return this.authService.isAuthenticated();
  }
}
