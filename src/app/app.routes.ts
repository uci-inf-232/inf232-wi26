import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ReadingsComponent } from './readings/readings.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent},
	{ path: 'assignments', component: AssignmentsComponent},
	{ path: 'readings', component: ReadingsComponent},
	{ path: 'calendar', component: CalendarComponent}
];
