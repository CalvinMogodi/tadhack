import { Component } from '@angular/core';

import { CurrentjobPage } from '../currentjob/currentjob';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CurrentjobPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
