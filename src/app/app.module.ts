import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputRangeComponent } from './input-range/input-range.component';
import { ResultSectionComponent } from './result-section/result-section.component';
import { StrengthComponent } from './strength/strength.component';
import { ErrorValidationComponent } from './error-validation/error-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    InputRangeComponent,
    ResultSectionComponent,
    StrengthComponent,
    ErrorValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
