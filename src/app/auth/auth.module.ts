import { NgModule } from "../../../node_modules/@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule } from "../../../node_modules/@angular/forms";
import { CommonModule } from "../../../node_modules/@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [SignupComponent, SigninComponent],

  imports: [
      CommonModule,
      FormsModule,
      AuthRoutingModule
    ],
//   exports: [FormsModule],
})
export class AuthModule {}
