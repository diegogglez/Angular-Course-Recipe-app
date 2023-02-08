import { Output } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingamount);
    this.ingredientAdded.emit(newIngredient);
  }

}
