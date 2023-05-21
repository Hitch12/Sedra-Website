import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }

  getCategories():Observable<any>
  {
    return this._HttpClient.get(`http://ahmdhss-001-site1.dtempurl.com/api/Departs/Departs_Only`)
  }
  getBranches():Observable<any>
  {
    return this._HttpClient.get(`http://ahmdhss-001-site1.dtempurl.com/api/Branches/Branches`)
  }
  getProductsCategories():Observable<any>
  {
    return this._HttpClient.get(`http://ahmdhss-001-site1.dtempurl.com/api/Departs/Departs`)
  }



}
