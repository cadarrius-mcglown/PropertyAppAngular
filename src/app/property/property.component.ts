import { Component, OnInit } from '@angular/core';
import { Property } from './property';
import { APIService } from  '../api.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  private  parcels:  Array<object> = [];

  constructor(private  apiService:  APIService) { }

  title ="property Price";
  price = 0;
  prop1 = new Property(3080,"Mcgee");

  addItem() { 
    this.price++;
 } 

  ngOnInit() {
    this.getParcels();
  }

  public  getParcels(){
    this.apiService.getParcels().subscribe((data:  Array<object>) => {
        this.parcels  =  data;
        console.log(data);
    });
}
}
