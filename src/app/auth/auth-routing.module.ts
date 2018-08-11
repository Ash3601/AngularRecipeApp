import { NgModule } from "../../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../../node_modules/@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

const authRoutes: Routes = [
    {path: 'signup', component:SignupComponent},
    {path:'signin', component:SigninComponent},
  {path: "**", redirectTo: "/recipes", pathMatch: "full"},

];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}