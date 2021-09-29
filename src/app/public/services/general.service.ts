import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private api = `${environment.api}CouponBoxes`
  private apiCategories = `${environment.api}Categories`
  private apiBusiness = `${environment.api}Businesses`

  constructor(private http: HttpClient) { }

  getCategories(){
    const uri = `${this.apiCategories}`
    return this.http.get(uri);
  }
  getBusiness(){
    return this.http.get(this.apiBusiness);
  }
  getCoupons(id){
    const uri = `${this.api}/id/${id}/coupon/all`
    return this.http.get(uri);
  }
  getCouponGroups(){
    const uri = `${this.api}`
    return this.http.get(uri);
  }
}
