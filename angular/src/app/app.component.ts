import { Component } from '@angular/core';
import Sawo from "sawotest"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular-sawo-chander';
  Sawo: any;
  isLoggedIn:any= false;
  userPayload:any = {};

  constructor() {}

  ngOnInit(){
    const sawoConfig = {
      // should be same as the id of the container
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "phone_number_sms",
      // Add the API key
      apiKey: "333a29a7-837c-4732-b2f4-ed4389c1ebd6",
      // Add a callback here to handle the payload sent by sdk
      onSuccess: (payload: any) => {
        this.userPayload = payload;
        this.isLoggedIn = true;
      }
    };
    // creating instance
    this.Sawo = new Sawo(sawoConfig)
  }

  ngAfterViewInit() {
    this.Sawo.showForm()
  }

}
