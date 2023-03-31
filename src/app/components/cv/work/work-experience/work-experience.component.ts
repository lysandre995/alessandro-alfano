import { Component, Input } from '@angular/core';
import { WorkExperienceInterface } from "../../../../interfaces/workExperienceInterface";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  @Input()
  experience: WorkExperienceInterface = {
    job: "",
    company: {name: "", website: ""},
    startDate: "",
    finishDate: "",
    location: "",
    duties: [],
  };
}
