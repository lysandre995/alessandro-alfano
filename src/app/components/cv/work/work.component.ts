import { Component, Input } from '@angular/core';
import { WorkExperienceInterface } from "../../../interfaces/workExperienceInterface";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  @Input()
  experiences: any = [];
}
