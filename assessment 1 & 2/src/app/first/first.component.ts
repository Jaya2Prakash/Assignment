import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  value:any;
  value1:any
  details : any = [
    {type:"Technical" ,data:"Terminal Instructables"},
    {type:"Technical" ,data:"Installation Guides"},
    {type:"Human Resource" ,data:"Career opportunities "},
    {type:"Financial" ,data:"Customer Onboarding"},
    {type:"Marketing" ,data:"Outlet Branding"},
    {type:"Financial" ,data:"Accounting Procedures"},
    {type:"Human Resource" ,data:"Training"},
    {type:"Marketing" ,data:"Pinting Guidance"},
    {type:"Technical" ,data:"Technical support"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  all(){
    this.value1=""
  }
  financial(){
    this.value1="Financial"
    this.value=""
  }

  technical(){
    this.value1="Technical"
    this.value=""
  }

  marketing(){
    this.value1="Marketing"
    this.value=""
  }

  hr(){
    this.value1="Human Resource"
    this.value=""
  }

}
