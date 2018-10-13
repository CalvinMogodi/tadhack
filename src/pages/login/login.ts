import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public user = {
    emailAddress: "",
    password: ""
  };
  public loginForm: FormGroup;
  public showError: boolean = false;
  public submitAttempt: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      emailAddress: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    this.navCtrl.push(SignupPage);
  }
    
  login(user) {
    this.submitAttempt = true;
     this.showError = false;
    if (this.loginForm.valid) {
      
      this.navCtrl.setRoot(TabsPage);
    }
  }

}
