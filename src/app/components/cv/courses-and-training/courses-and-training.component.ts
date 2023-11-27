import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses-and-training',
  templateUrl: './courses-and-training.component.html',
  styleUrls: ['./courses-and-training.component.css']
})
export class CoursesAndTrainingComponent {
  @Input()
  courses: any;
}
