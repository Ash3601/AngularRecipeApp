import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from "@angular/core";
import { Recipe } from "../recipe.model";
import {} from "events";
import { RecipeService } from "../recipe.service";
import {
  Router,
  ActivatedRoute
} from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit, OnDestroy {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  @Input() recipes: Recipe[];
  // = [
  //   new Recipe('Test Recipe', 'This is a test recipe.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
  //   new Recipe('Test Recipe 2', 'This is another test recipe.', 'https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg')
  // ];
  // Old event emitter code to pass data across components
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  // Using recipe service to pass the data

  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  onNewRecipe() {
    this.router.navigate(["new"], {relativeTo: this.route});
  }

  ngOnInit() {
    
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );


    this.recipes = this.recipeService.getRecipe();
  }

  isAuthenticated () {
    return this.authService.isAuthenticated();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this,this.subscription.unsubscribe();
  }
}
