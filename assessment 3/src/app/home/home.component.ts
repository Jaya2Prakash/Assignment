import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  private chart: am4maps.MapChart | undefined ;
  
  arr : any = []
  list : any = []
  selected=""
   
  ngAfterViewInit(){
    this.chart = am4core.create("chartdiv",am4maps.MapChart)
    this.chart.geodata = am4geodata_usaLow;
    
    this.arr = this.chart.geodata
    console.log(this.arr)
    
    
    console.log(this.arr.features[0].properties.name)

    for(let k=0;k<this.arr.features.length;k++){
      this.list[k]=this.arr.features[k].properties.name
    }

    this.chart.projection = new am4maps.projections.AlbersUsa ()

    let polygonseries = this.chart.series.push(new am4maps.MapPolygonSeries());
    // polygonseries.exclude = ["AQ"]
    polygonseries.useGeodata = true

    let polygontemplate = polygonseries.mapPolygons.template;
    polygontemplate.tooltipText = "{name}"
    polygontemplate.polygon.fillOpacity = 0.6;
    polygontemplate.fill = am4core.color("#748267")
    let hs = polygontemplate.states.create("hover")
    hs.properties.fill = am4core.color("#74X999")
  
  }

  ngOnDestroy(){
    if(this.chart){
      this.chart.dispose(); 
    }
  }

}
   