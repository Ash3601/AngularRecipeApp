import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Params,
  Router
} from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipe: Recipe[];
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = parseInt(params["id"]);
      this.editMode = params["id"] != null;
      // console.log(this.editMode);
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = "";
    let recipeImagePath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeIndex(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe["ingredients"]) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'imagePath': new FormControl(recipeImagePath, [Validators.required]),
      'description': new FormControl(recipeDescription, [Validators.required]),
      'ingredients': recipeIngredients
    });
  }

  onSubmit() {
    // console.log(this.recipeForm);
    const newRecipe = new Recipe(this.recipeForm.value['name'], this.recipeForm.value['description'], this.recipeForm.value['imagePath'], this.recipeForm.value['ingredients']); 
    if (this.editMode) {

    console.log(newRecipe);

      this.recipeService.updateRecipe(this.id, newRecipe);
    }else {
      this.recipeService.addRecipes(this.recipeForm.value);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  // On add ingredient for add button
  onAddIngredient () {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,  [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  // On cancel button
  onCancel () {
    this.router.navigate(['/recipes']);
  }

  // On delete ingredient
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    console.log(this.recipeForm.get('ingredients').value[index]);
  }
}
