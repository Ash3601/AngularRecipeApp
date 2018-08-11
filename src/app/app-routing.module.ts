import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "shopping-list", component: ShoppingListComponent },
  // {
  //   path: "recipes",
  //   component: RecipesComponent,
  //   children: [
  //     { path: "new", component: RecipeEditComponent, canActivate:[AuthGuard] },
  //     { path: "", component: RecipesStartComponent },
  //     { path: ":id", component: RecipeDetailComponent },
  //     { path: ":id/edit", component: RecipeEditComponent, canActivate:[AuthGuard] },

  //   ]
  // },
  // {path: 'signup', component:SignupComponent},
  // {path:'signin', component:SigninComponent},

  // {path: "**", redirectTo: "/recipes", pathMatch: "full"},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
