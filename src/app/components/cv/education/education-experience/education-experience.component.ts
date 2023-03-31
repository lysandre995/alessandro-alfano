import { Component, Input } from '@angular/core';
import { EducationExperienceInterface } from "../../../../interfaces/educationExperienceInterface";

@Component({
  selector: 'app-education-experience',
  templateUrl: './education-experience.component.html',
  styleUrls: ['./education-experience.component.css']
})
export class EducationExperienceComponent {
  @Input()
  experience: EducationExperienceInterface = {
    degree: "",
    school: {name: "", website: ""},
    startDate: "",
    finishDate: "",
    location: ""
  }
}
