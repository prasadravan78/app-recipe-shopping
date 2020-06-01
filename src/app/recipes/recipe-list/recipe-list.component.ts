import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeToShow = new EventEmitter<Recipe>();

  recipes: Recipe[] = [new Recipe(
    "Test Recipe",
    "This is testing",
    "https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2560,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg"
  )];

  constructor() { }

  ngOnInit(): void {
  }
  
  onSelection(recipe: Recipe) {
    console.log(recipe);
    this.recipeToShow.emit(recipe);
  }
}
