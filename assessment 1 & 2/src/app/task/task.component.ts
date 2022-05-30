import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  f1: number = -1;
  f2:number = 1;
  f3:number = 0;
  temp:number = 0;
  temp1:number = 0
  
  val:any 
  val1:any
  val2:any
  val3:any
  arr : any =[]
  arr1 : any =[]
  arr2 : any =[]
  arr3 : any =[]
  arr4 : any =[]
  arr5 : any =[]
  constructor() { }

  ngOnInit(): void {
  }

  fib(){
    this.arr=[]
    this.f1=-1
    this.f2=1
    this.f3=0
      for(let i=0;i<this.val;i++){
        this.f3=this.f1+this.f2
        this.arr.push(this.f3)
        this.f1=this.f2
        this.f2=this.f3
      }
      console.log(this.arr)        
    }

    num(){
      this.arr1=[]
      for(let i=0;i<=this.val1;i++){
        this.arr1.push(i)
      }
    }

    root(){
        this.temp=Math.sqrt(this.val2)
        this.temp1=Math.cbrt(this.val2)
    }

    Sort(){
        this.arr4=[]
        this.arr5=[]
      
        for(let i=1;i<=this.val3;i++){
        if(i%2==0)
        {
          this.arr4.push(i)
          
        }
        else{
          this.arr5.push(i)
        }
      }
      this.val3=""      
  }
}