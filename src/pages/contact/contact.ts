import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public profile = 
  {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      country: "",
      dateOfBirth: null,
      gender: "",
      career: "",
      cellPhone: "",
      id: null
  };

  constructor(public navCtrl: NavController) {

  }

  checkout(){
    this.navCtrl.push(ConfirmPage);
  }

}
