import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { DropdownDirective } from "./shared/dropdown/dropdown.directive";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from "./recipes/recipe.service";
import { HttpModule } from "@angular/http";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { RecipesModule } from "./recipes/recipes.module";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
// const appRoutes: Routes = [
//   {path: '', component: AppComponent}
//   { path: "shopping-list", component: ShoppingListComponent },
//   { path: "recipe", component: RecipesComponent },
  
// ];

@NgModule({
  declarations: [
    AppComponent,
    // ShoppingListComponent,
    // RecipeListComponent,
    HeaderComponent,
    // RecipesComponent,
    // // RecipeDetailComponent,
    // RecipeItemComponent,
    // ShoppingEditComponent,
    // DropdownDirective,
    // RecipesStartComponent,
    // RecipeEditComponent,
    // SignupComponent,
    // SigninComponent,
    
  ],
    
    imports: [
      BrowserModule, 
      // FormsModule, 
      HttpModule,
      RecipesModule,
      AppRoutingModule,
      SharedModule,
      ShoppingListModule,
      AuthModule
      // RouterModule.forRoot(appRoutes)
      // ReactiveFormsModule,

    ],
  providers: [ShoppingListService, RecipeService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
