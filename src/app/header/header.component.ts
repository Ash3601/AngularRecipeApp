import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { } from "events";
import { RecipeService } from "../recipes/recipe.service";
import { Response } from "@angular/http";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }

    constructor(private recipeService: RecipeService, private authService: AuthService) {

    }
    ngOnInit() {

    }
    onSaveData () {
        this.recipeService.saveToDataBase().subscribe(
            (response) => {
                console.log(response)
            },
            (error) => {
                console.log( error);
            }
        )
    }
    onFetchData() {
        this.recipeService.fetchData();
        
    }

}