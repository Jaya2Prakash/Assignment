import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  val:string="";

  view(e:string){
    this.val= this.val+e
  }

  del(){
    this.val=""
  }

  operator(){
    var numberInput: HTMLInputElement = <HTMLInputElement>document.getElementById("numbers");
    let x=""
     x = numberInput.value
     console.log(x.length)
    let z = 0;
    if(x.includes("+")==true)
    {
        let y = x.split("+")
        let i=0;
        z = Number(y[i])+Number(y[i+1]);
    }
    

    if(x.includes("-")==true)
    {
        let y = x.split("-")
        let i=0;
        z = Number(y[i])-Number(y[i+1]);
    }

    if(x.includes("*")==true)
    {
        let y = x.split("*")
        let i=0;
        z = Number(y[i])*Number(y[i+1]);
    }

    if(x.includes("/")==true)
    {
        let y = x.split("/")
        let i=0;
        z = Number(y[i])/Number(y[i+1]);
    }
    this.val=z.toString()
  }
} 
