import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  AchaBar(){

    window.open('https://www.google.com/maps/search/bares+santa+f%C3%A9+do+sul/@-20.2055546,-50.9282894,14z/data=!3m1!4b1', '_blank').focus();
  }

}
