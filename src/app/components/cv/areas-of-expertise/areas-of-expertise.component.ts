import { Component } from '@angular/core';

@Component({
  selector: 'app-areas-of-expertise',
  templateUrl: './areas-of-expertise.component.html',
  styleUrls: ['./areas-of-expertise.component.css']
})
export class AreasOfExpertiseComponent {
  expertises = [
    "Full Stack Development",
    "Databases",
    "Oracle",
    "AWS Cloud Environment",
    "Agile Development",
    "Software Solution Architecture"
  ]
}
