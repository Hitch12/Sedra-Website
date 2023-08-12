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
    return this._HttpClient.get(`assets/dataJson/DepartsOnly.json`)
  }
  getBranches():Observable<any>
  {
    return this._HttpClient.get(`assets/dataJson/Branshes.json`)
  }
  getProductsCategories():Observable<any>
  {
    return this._HttpClient.get(`assets/dataJson/Departs.json`)
  }
  getAllProducts():Observable<any>
  {
    return this._HttpClient.get(`assets/dataJson/Prodects.json`)
  }

  // PutAllProducts(data:Array<any>):Observable<any>
  // {
  //   return this._HttpClient.put(`http://ahmdhss-001-site1.dtempurl.com/api/Items/Prodects`,data,{
  //     params:{"Control_Code":"101010"}
  //   })
  // }



}
