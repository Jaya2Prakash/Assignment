import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FormBuilder,FormGroup } from '@angular/forms';
declare const L: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  formValue !:FormGroup
  
  title = 'assessment5';
  value:any
  show:boolean=true
  show1:boolean=false
  show2:boolean=false
  pg1:boolean=true
  ad:boolean=true
  mapv:boolean=false
  details:any
  location:any
  purchase:any
  arr:number=0
  id:any
  result:any | undefined
  toadd:any = {first:"",last:"",address:"",city:"",state:""}


  page:number=1
  count:number=0
  tablesize:number=12

  
  page1:number=1
  tablesize1:number=1
  
  constructor(private api:DataService,private formbuilder:FormBuilder){}

  ngOnInit(): void {
    this.getdata();
    this.formValue = this.formbuilder.group({
      first : [''],
      last : [''],
      address : [''],
      city : [''],
      state : ['']
    })
  }

  TableDataChange(e:any){
    this.page=e
    this.getdata();
  }
  TableDataChange1(e:any){
    this.page1=e
    this.getdata();
  }
  TableSizeChange(e:any){
    this.tablesize=e.target.value
    this.page=1
    this.getdata();
  }

  getdata(){
    this.api.getUser().subscribe((r:any)=>{
      this.details = r
    })
  }

  newcust(){
    this.formValue.reset();
    this.ad=true;
  }

  add(){
    this.toadd.first = this.formValue.value.first
    
    this.toadd.last = this.formValue.value.last
    this.toadd.address = this.formValue.value.address
    this.toadd.city = this.formValue.value.city
    this.toadd.state = this.formValue.value.state


    this.api.addnewdata(this.toadd).subscribe((r:any)=>{
       console.log(r)
      //  this.details = r
      alert("Added Successfully")
      let ref = document.getElementById('close')
      ref?.click();
      this.formValue.reset();
      this.getdata();
      
  });
 }


 edit(d:any){
   console.log("hi")
   this.ad=false;
  //  this.formValue=d
  this.id=d.id
  this.formValue.controls['first'].setValue(d.first)
  this.formValue.controls['last'].setValue(d.last)
  this.formValue.controls['address'].setValue(d.address)
  this.formValue.controls['city'].setValue(d.city)
  this.formValue.controls['state'].setValue(d.state)
   
 }


 update(){
  this.toadd.first = this.formValue.value.first
    
  this.toadd.last = this.formValue.value.last
  this.toadd.address = this.formValue.value.address
  this.toadd.city = this.formValue.value.city
  this.toadd.state = this.formValue.value.state

  this.api.update(this.toadd,this.id).subscribe((r:any)=>{
    this.getdata();
    alert("Update Successfully")
    let ref = document.getElementById('close')
    ref?.click();
    this.formValue.reset();
    // this.formValue.reset();
  });
}
 

  // details : any = [
  //   { first:"Ted",last:"James",address:"1234 Anywhere St",city:"Phoenix",state:"Arizano",total:"$207.98"},
  //   { first:"Michelle",last:"Thompson",address:"345 Cedar Point Ave",city:"Encinitas",state:"California",total:"$8.98"},
  //   { first:"zed",last:"Bishop",address:"1822 Long Bay Dr.",city:"Seattle",state:"washington",total:"$229.97"},
  //   { first:"Tina",last:"Adams",address:"79455 Pinetop Way",city:"Chandler",state:"Arizano",total:"$25.48"},
  //   { first:"Igor",last:"Minar",address:"576 Crescent Bvld",city:"Dallas",state:"Texas",total:"$469.98"}, 
  //   { first:"Brad",last:"Greem",address:"9874 Center St.",city:"Orlando",state:"Florida",total:"$469.98"},
  //   { first:"Misko",last:"Hevery",address:"9874 Center St.",city:"Carey",state:"North California",total:"$469.98"},
  //   { first:"Heedy",last:"Wahlin",address:"9874 Center St.",city:"Anaheim",state:"California",total:"$469.98"},
  //   { first:"John",last:"Papa",address:"9874 Center St.",city:"Orlando",state:"Florida",total:"$469.98"},
  //   { first:"Tonny",last:"Smith",address:"9874 Center St.",city:"Atlanta",state:"Georgia",total:"$469.98"},
  // ]



  product : any = [
    { _first:"Ted",name1:"basketball",price1:"$7.99",name2:"shoes",price2:"$199.99",},
    { _first:"Michelle",name1:"basketball",price1:"$7.99"},
    { _first:"zed",name1:"basketball",price1:"$7.99",name2:"shoes",price2:"$199.99",}
  ]

  view(){
    console.log("hi")
    this.show=true
    this.show1=false
    this.show2=false
  }
  view1(){
    console.log("hi")
    this.show=false
    this.show1=true
    this.show2=false
  }
  view2(){
    
    console.log("hi")
    this.show=false
    this.show1=false
    this.show2=true
    this.mapv=true

   

  }

  // viewmap(d:any){
  //   console.log(d)

    
    
  //   // document.getElementById("map").style.display = "block";
  //   var mymap = L.map('map').setView([51.505, -0.09], 13);
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 19,
  //     attribution: '© OpenStreetMap'
  // }).addTo(mymap);

  // let marker = L.marker([d.lat, d.lon]).addTo(mymap);
  // marker.bindPopup(d.first+" "+d.last).openPopup();
  // }
   

  // size:number
  viewmap1(){
    console.log("hi")
     
      var mymap = L.map('map').setView([51.505, -0.09], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
      }).addTo(mymap);
    this.api.getUser1().subscribe((r:any)=>{
      this.location = r
      // console.log(this.location.lat)
      // console.log(this.location.lon)
      // console.log(this.location)
      var size = Object.keys(this.location).length;
      console.log(size)
      

      for(let i=0;i<size;i++){
        let marker = L.marker([this.location[i].lat, this.location[i].lon]).addTo(mymap);
        marker.bindPopup(this.location[i].first+" "+this.location[i].last).openPopup();
      }
  //   let marker = L.marker([this.location.lat, this.location.lon]).addTo(mymap);
  // marker.bindPopup("hello").openPopup();
  
})

  
   

}
  
    
  person:any
  order(d:any){
  //   for(let i=0;i<this.product.length;i++)
  //   {
  //     if(this.product[i]._first==d.first)
  //     {
  //       this.result = Object.keys(this.product[i]).map((key) => [String(key),(this.product[i])[key]]);
  //       console.log(this.result)
      
  //     this.result = Object.keys(this.product[i]).map(index => {
  //        this.person = (this.product[i])[index];
  //       console.log(this.person)
  //   });
  
  //   var object = {1: 'hello', 2: 'world'};
  //    this.person = Object.values(object);
  //    console.log(this.person)
  // }
  //   }

    this.pg1=false

    // this.api.getUser1().subscribe((r:any)=>{
    //   this.purchase = r
    //   console.log(r)
    // })
  
  }







}


