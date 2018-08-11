import { NgModule } from "../../../node_modules/@angular/core";
import { RecipesModule } from "../recipes/recipes.module";
import { DropdownDirective } from "./dropdown/dropdown.directive";


@NgModule({
    imports: [],
    declarations: [
        DropdownDirective
    ],
    // Make it available outside of the module
    exports: [
        DropdownDirective
    ]
})

export class SharedModule {

}