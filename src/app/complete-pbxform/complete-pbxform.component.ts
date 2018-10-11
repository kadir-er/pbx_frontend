import { Component, OnInit } from '@angular/core';
import {FormContent} from "../models/FormContent";
import {PbxService} from "../services/pbx.service";

@Component({
  selector: 'app-complete-pbxform',
  templateUrl: './complete-pbxform.component.html',
  styleUrls: ['./complete-pbxform.component.css']
})
export class CompletePbxformComponent implements OnInit {

  formContent:FormContent;

  price :number;

  constructor(private _pbxService:PbxService) { }

  ngOnInit() {
    this._pbxService.calculatePrice().subscribe(price => this.price = price);
    this.formContent = this._pbxService.getSavedFormContent();
  }

  submitForm() {
    this._pbxService.sendForm(this.formContent)
  }

}
