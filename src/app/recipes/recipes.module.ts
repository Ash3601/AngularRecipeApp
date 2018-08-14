import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipesComponent } from "./recipes.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { DropdownDirective } from "../shared/dropdown/dropdown.directive";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesStartComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeListComponent,
        // DropdownDirective
    ],
    // providers:,
    imports: [
        // Add the common module since it is a feature module
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule 
    ],
    // bootstrap:
})  
export class RecipesModule {

}