import { NgModule } from "@angular/core";
import { RecipesModule } from "../recipes/recipes.module";
import { DropdownDirective } from "./dropdown/dropdown.directive";
import { CommonModule } from "../../../node_modules/@angular/common";


@NgModule({
    imports: [],
    declarations: [
        DropdownDirective
    ],
    // Make it available outside of the module
    exports: [
        DropdownDirective,
        CommonModule
    ]
})

export class SharedModule {

}