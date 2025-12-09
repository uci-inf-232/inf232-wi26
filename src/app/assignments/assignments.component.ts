import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import moment from 'moment';

@Component({
  selector: 'app-assignments',
  imports: [],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  assignments:any[] = [];

  constructor(private http:HttpClient) {
  	this.http.get('./assets/calendar.json').subscribe(calendar => {
  		this.parseCalendar(calendar as {});
  	});
  }

  parseCalendar(calendar:any) {
  	this.assignments = calendar['events'].filter((event:any) => {
		return event.type == 'assignments';
	}).sort((a:any, b:any) => { //Sort ascending
		return moment(a.date).diff(moment(b.date));
	}).map((event:any) => {
		let assignment:any = {
			//All assignments due 11:59pm the day they are listed on the calendar
			'dueShort': moment(event.date).subtract(1, 'minutes').add(1, "days").format("MMMM D"),
			'dueLong': moment(event.date).subtract(1, 'minutes').add(1, "days").format("dddd, MMMM Do, YYYY [at] hh:mma"),
			'title': event.title
		};
		if('anchor' in event) {
			assignment['anchor'] = event.anchor;
		}
		if('link' in event) {
			assignment['link'] = event.link;
		}
		return assignment;
	});
	console.log(this.assignments);
  }
}
