import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {routing} from './routing';
import { PbxformComponent } from './pbxform/pbxform.component';
import { CompletePbxformComponent } from './complete-pbxform/complete-pbxform.component';
import {PbxService} from "./services/pbx.service";

@NgModule({
  declarations: [
    AppComponent,
    PbxformComponent,
    CompletePbxformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    PbxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
