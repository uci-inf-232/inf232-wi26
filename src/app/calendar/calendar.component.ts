import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaperComponent } from '../paper/paper.component';
import moment from 'moment';

@Component({
  selector: 'app-calendar',
  imports: [PaperComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  calendar:any[] = [];

  constructor(private http:HttpClient) {
  	this.http.get('calendar.json').subscribe(calendar => {
  		this.parseCalendar(calendar as {});
  	});
  }

  parseCalendar(calendar:any) {
  	const typeOrder = ["holiday", "absence", "project", "class", "officehours_daniel"]
	//Sort calendar events
	calendar['events'].sort((a:any, b:any) => {
		return moment(a.date).diff(moment(b.date));
	});
	this.calendar = [{'date_str': moment(calendar['events'][0].date).format("ddd MMM D"), "events":[]}];
	calendar['events'].forEach((event:any) => {
		var date_str = moment(event.date).format("ddd MMM D");
		if(date_str != this.calendar[this.calendar.length - 1].date_str) {
			this.calendar.push({'date_str': date_str, "events":[]});
		}
		this.calendar[this.calendar.length - 1].events.push(event)
	});
  }

  containsRequiredReadings(readings:any[]) {
  	return readings.some((reading) => !reading.optional);
  }

  containsOptionalReadings(readings:any[]) {
  	return readings.some((reading) => reading.optional);
  }
}
