import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CallapiService } from "../callapi.service";

@Component({
  selector: 'app-weathercom',
  templateUrl: './weathercom.component.html',
  styleUrls: ['./weathercom.component.css']
})
export class WeathercomComponent implements OnInit {
  public SearchForm:any;
  public wData:any;
  constructor(private formBuilder: FormBuilder,private callapi:CallapiService) {
      this.SearchForm=FormGroup;
   }


  ngOnInit(): void {
    
    this.SearchForm = this.formBuilder.group({
      city: ['']
    });
  }
  getData(formValues:any) {
    if(formValues.city.length>0){
    this.callapi.getData(formValues.city).subscribe(data =>  {
      this.wData = data;
    });
  }else{
    alert("Enter city Name");
  }
  
  }
}
