import { Component, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('AmountInput') amountInputReference: ElementRef;
  @Output() ingredientAdded = new EventEmitter<ingredient>();

  onAddItem() {
    const newIngredient = new ingredient(
      this.nameInputReference.nativeElement.value,
      this.amountInputReference.nativeElement.value);
      this.ingredientAdded.emit(newIngredient);


  }
}
