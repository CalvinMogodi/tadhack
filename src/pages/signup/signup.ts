import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {
    public errorMessage = '';
    public email = "";
    public country = "";
    public showError: boolean = false;
    public user =
    {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        Country: ""
    };
    public confirmPassword = "";
    public countries: any = [];
    public signUpForm: FormGroup;
    public submitAttempt: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public formBuilder: FormBuilder) {
        //get countries
       
        this.signUpForm = formBuilder.group({
            emailAddress: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required])],
            firstName: ['', Validators.compose([Validators.required])],
            lastName: ['', Validators.compose([Validators.required])],
            country: ['', Validators.compose([Validators.required])],
            confirmPassword: ['', Validators.compose([Validators.required])],
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }

    signup(user) {
        this.showError = false;
        this.submitAttempt = true;
        this.errorMessage = '';
        if (this.user.password != this.confirmPassword) {
            return false;
        }
        if (this.signUpForm.valid) {
            var loader = this.loadingCtrl.create({
                content: "Please wait..."
            });

            this.navCtrl.setRoot(LoginPage);
        }

    }


}
