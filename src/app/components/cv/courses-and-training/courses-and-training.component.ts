import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-and-training',
  templateUrl: './courses-and-training.component.html',
  styleUrls: ['./courses-and-training.component.css']
})
export class CoursesAndTrainingComponent {
  courses: any = [
    {title: "AWS Software Solution Architect - Associate (11/2022)", academy: "beSharp Srl", academyWebsite: "https://www.besharp.it/"}
  ];
}
