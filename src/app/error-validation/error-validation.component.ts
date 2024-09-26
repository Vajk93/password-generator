import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-validation',
  templateUrl: './error-validation.component.html',
  styleUrls: ['./error-validation.component.css']
})
export class ErrorValidationComponent {
  @Output() close = new EventEmitter<boolean>()

  public closeModal(){
    this.close.emit(false);

  }
}
