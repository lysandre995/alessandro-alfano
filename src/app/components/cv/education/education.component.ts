import { Component } from '@angular/core';
import { WorkExperienceInterface } from "../../../interfaces/workExperienceInterface";
import { EducationExperienceComponent } from "./education-experience/education-experience.component";
import { EducationExperienceInterface } from "../../../interfaces/educationExperienceInterface";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  experiences: EducationExperienceInterface[] = [
    {
      degree: "Bachelor of Science in Computer Science Engineer",
      school: { name: "Politecnico di Milano", website: "https://www.polimit.it/" },
      startDate: "09/2020",
      finishDate: "Present",
      location: "Milan, IT"
    },
    {
      degree: "Master of Science in Medicine and Surgery",
      school: { name: "University of Milan", website: "https://www.unimi.it/" },
      startDate: "09/2014",
      finishDate: "07/2020 (Incomplete)",
      location: "Milan, IT"
    },
    {
      degree: "High School Degree in Classical Studies",
      school: { name: "Liceo Classico \"Alessandro Volta\"", website: "https://www.liceovoltacomo.edu.it/" },
      startDate: "09/2009",
      finishDate: "06/2014",
      location: "Como, IT"
    }
  ];
}
