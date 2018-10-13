import { Component } from '@angular/core';

/**
 * Generated class for the StartupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'startup',
  templateUrl: 'startup.html'
})
export class StartupComponent {

  text: string;

  constructor() {
    console.log('Hello StartupComponent Component');
    this.text = 'Hello World';
  }

}
