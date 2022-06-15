
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  url : string = "http://localhost:3000/data"
  url1 : string = "http://localhost:3000/data/"

  getUser(){
    return this.http.get(this.url) 
  }
  getUser1(){
    return this.http.get("http://localhost:3000/comments")
  }


  update(emp:any,id:any){
    return this.http.put(this.url1+id,emp)
  }

  addnewdata(emp:any){
    return this.http.post("http://localhost:3000/data",emp)
  }
}
 