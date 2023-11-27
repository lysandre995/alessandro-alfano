import { Component, Input } from '@angular/core';
import { WorkExperienceInterface } from "../../../interfaces/workExperienceInterface";
import { EducationExperienceComponent } from "./education-experience/education-experience.component";
import { EducationExperienceInterface } from "../../../interfaces/educationExperienceInterface";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  @Input()
  experiences: any;
}
