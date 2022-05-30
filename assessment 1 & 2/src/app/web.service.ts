import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http:HttpClient) { }

  url : string = "http://localhost:3000/users"
  url1 : string = "http://localhost:3000/users/"

  getUser(){
    return this.http.get(this.url)
  }

  delUser(e:any){
    return this.http.delete(this.url1+e)
  }

  update(emp:any){
    return this.http.put(this.url1+emp.id,emp)
  }

  addnewdata(emp:any){
    return this.http.post(this.url1,emp)
  }
}
