import { NgModule } from "../../../node_modules/@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { CommonModule } from "../../../node_modules/@angular/common";
import { FormsModule } from "../../../node_modules/@angular/forms";
import { Routes, RouterModule } from "../../../node_modules/@angular/router";
// const shoppingRoutes: Routes = [
//     { path: "shopping-list", component: ShoppingListComponent },
  
//   ]
@NgModule({
    declarations: [ShoppingEditComponent, ShoppingListComponent],
    imports: [
        CommonModule,
        FormsModule, 
        // RouterModule.forChild(shoppingRoutes)
    ],
    exports: [FormsModule]
})

export class ShoppingListModule {

}