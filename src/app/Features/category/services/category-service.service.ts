import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http : HttpClient) { }
  getCategory()
  {
    this.http.get("http://localhost:5080/api/v1/Categories")
  }
}
