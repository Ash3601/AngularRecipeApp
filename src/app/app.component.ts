import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCCU6aP9-swe95La30Mkwn4-NjCSPTnxa8",
      authDomain: "angular-recipe-app-1c894.firebaseapp.com"
    });
  }

  toggleFeature(feature: string) {
    this.loadedFeature = feature;
  }

  title = "app";
  show_para = false;
  array = [];
  counter: number = 1;
  showPara() {
    this.show_para = true;
    this.array.push(new Date());
    this.counter++;
  }
  showBlue() {
    if (this.counter > 5) {
      return "blue";
    } else {
      return "transparent";
    }
  }
}
