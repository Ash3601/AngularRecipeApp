import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
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