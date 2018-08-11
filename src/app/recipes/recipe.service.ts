import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Http, Response } from "@angular/http";
// Using service inside a service
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This is a test recipe.",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg",

      [new Ingredient("Cheese", 1), new Ingredient("Sauce", 2)]
    ),
    new Recipe(
      "Test Recipe 2",
      "This is another test recipe.",
      "https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg",
      [new Ingredient("Bread", 1), new Ingredient("Sausage", 2)]
    )
  ];
  getRecipe() {
    return this.recipes.slice();
    //   return this.recipes.slice();
  }
  constructor(
    private slService: ShoppingListService,
    private http: Http,
    private authService: AuthService
  ) {}
  // Add to shopping list
  addtoSL(ingredients: Ingredient[]) {
    this.slService.addIngredientsToSL(ingredients);
  }
  getRecipeIndex(index: number) {
    return this.recipes.slice()[index];
  }

  addRecipes(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteIngredient(indexIngredient: number, indexRecipe: number) {
    console.log(this.recipes[indexRecipe].ingredients[indexIngredient]);
    this.recipes[indexRecipe].ingredients.splice(indexIngredient, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
  saveToDataBase() {
    return this.http.put(
      "https://angular-recipe-app-1c894.firebaseio.com/recipes.json",
      this.recipes
    );
    // console.log(this.http.post('https://angular-recipe-app-1c894.firebaseio.com/', this.recipes));
  }
  fetchData() {
    const token = this.authService.getToken();
    this.http
      .get("https://angular-recipe-app-1c894.firebaseio.com/recipes.json?auth=" + token)
      .pipe(
        map((response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe["ingredients"]) {
              console.log(recipe);
              recipe["ingredients"] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        //  const recipes = response.json();
        this.setRecipes(recipes);
      });
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
