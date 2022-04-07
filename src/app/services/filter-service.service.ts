import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilterService{
  apiUrl = 'http://apidemo.luceed.hr/datasnap/rest/artikli/'
  constructor(
    private http: HttpClient
  ) { }

  getAllArticles(){
    return this.http.get(this.apiUrl + 'naziv/');
  }
}
