import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PbxService} from "../services/pbx.service";
import {FormContent} from "../models/FormContent";
import {Router} from "@angular/router";
import {Numbers} from "../models/Numbers";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-pbxform-component',
  templateUrl: './pbxform.component.html',
  styleUrls: ['./pbxform.component.css']
})
export class PbxformComponent implements OnInit {

  formContent: FormContent = new FormContent();
  userForm : FormGroup;

  main_numbers: Numbers[];
  sub_numbers: Numbers[];

  selected_main_number:string;
  selected_sub_numbers:string[];


  constructor(private _formBuilder: FormBuilder,
              private router : Router,
      private _pbxService : PbxService) { }

  ngOnInit() {
    this._pbxService.getNumbers().subscribe(
      main_numbers => this.main_numbers = main_numbers
        );

    this.userForm = this._formBuilder.group({
         firmname:['',[Validators.required]],
         firmaddress:['',[Validators.required]],
         firmsector:['',[Validators.required]],
         taxoffice:['',[Validators.required]],
         taxid:[, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
         representorname:['', [Validators.required]],
         representorsurname:['', [Validators.required]],
         representoremail:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
         representortel:[, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
         mainnumber:['', [Validators.required]],
         subnumbers:['', [Validators.required]],
         contracttime:[, ],
       });
  }

  mainNumberSelected(event:any) {
    this.selected_main_number = event.target.value;
    this.formContent.main_number = event.target.value;

    console.log("selected main number: " + this.selected_main_number);
    this._pbxService.getNumbers().subscribe(
      sub_numbers => this.sub_numbers = sub_numbers
    );
    this.removeMainNumberIfExists();
  }

  private removeMainNumberIfExists() {

  }

  addSelectedSubNumber(options) {
    console.log("selected numbers");

    this.selected_sub_numbers = Array.apply(null,options)  // convert to real Array
          .filter(option => option.selected)
          .map(option => option.value);

    // this.selected_sub_numbers.push(event.target.value);
    // this.formContent.sub_numbers.push(event.target.value);
    console.log(this.selected_sub_numbers);
  }

  onSubmit () {
    this.formContent.sub_numbers = this.selected_sub_numbers;
    this._pbxService.setSavedFormContent(this.formContent);
    this.router.navigate(['/completePBX']);
  }
}
