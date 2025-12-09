import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year:number;

  constructor() {

  	this.year = moment().year();
  }

}
