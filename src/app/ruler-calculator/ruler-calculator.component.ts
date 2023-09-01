import { Component } from '@angular/core';

@Component({
  selector: 'app-ruler-calculator',
  templateUrl: './ruler-calculator.component.html',
  styleUrls: ['./ruler-calculator.component.css']
})
export class RulerCalculatorComponent {
  
  constructor() {}

  ngOnInit(): void {

  }
  // Define Variables
  mapWidthPixels = 0;
  mapWidthDesired = 0;
  maxZoom = 0;
  distanceMeasurement = 0;

  // Correct maxZoom & Calculate distanceMeasurement
  calculateDistanceMeasurment(){
    var convertedMaxZoom
    if(this.maxZoom < 2){
      convertedMaxZoom = 2;
    } else{
      convertedMaxZoom = this.maxZoom;
    }
    this.distanceMeasurement = (this.mapWidthDesired * this.maxZoom) / (this.mapWidthPixels * Math.pow(2, this.maxZoom));
  }

  copyResult(){
    navigator.clipboard.writeText(this.distanceMeasurement.toString());
    console.log("Distance Measurement Copied To Clipboard");
    console.log("mapWidthPixels: "+this.mapWidthPixels)
    console.log("mapWidthDesired: "+this.mapWidthDesired)
    console.log("maxZoom: "+this.maxZoom)
    console.log("distanceMeasurment: "+this.distanceMeasurement)
  }
}