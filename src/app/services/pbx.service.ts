import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {FormContent} from "../models/FormContent";
import {Price} from "../models/Price";
import {Numbers} from "../models/Numbers";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

const HOST = 'localhost';
const API_URL = 'http://' + HOST + '/pbx_backend/api/';

export const FORM_PROC_URL = API_URL + "FormProcAPI.php";
export const NUMBER_POOL_URL = API_URL + "NumberPoolAPI.php";
export const PRICE_URL = API_URL + "PriceAPI.php";

@Injectable()
export class PbxService {

  formContent:FormContent;

  constructor(private _http: HttpClient) { }

  sendForm (formContent : FormContent): Observable<any> {
    this.formContent = formContent;
    return this._http.post<FormContent>(FORM_PROC_URL, formContent, httpOptions);
  }

  calculatePrice (): Observable<any> {
    return this._http.get<number>(PRICE_URL + "?contract_time="+this.formContent.contract_time+"&selected_sub_number_count="+this.formContent.sub_numbers.length);
  }

  getNumbers (): Observable<any> {
    return this._http.get<Numbers>(NUMBER_POOL_URL);
  }

  getSavedFormContent() {
    return this.formContent;
  }

  setSavedFormContent(formContent: FormContent) {
    console.log("saved form content: ");
    console.log(formContent);
    this.formContent = formContent;
  }
}
