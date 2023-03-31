import { Component } from '@angular/core';
import { WorkExperienceInterface } from "../../../interfaces/workExperienceInterface";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  experiences: WorkExperienceInterface[] = [
    {
      job: "Full Stack Developer",
      company: { name: "Forge Srl", website: "https://www.forge.srl/" },
      startDate: "02/2022",
      finishDate: "Present",
      location: "Varese, IT",
      duties: [
        "Created web applications with different technology stacks such as Typescript (frontend in Angular, backend in NestJS/Express), PHP",
        "Collaborated with major software companies (like beSharp, Entopan and others) to create solutions for large international clients using Typescript, NodeJS and AWS",
        "Contributed to the open-source project Leapp for cloud access security, and its commercial version, Leapp Team"
      ]
    },
    {
      job: "Full Stack Developer",
      company: { name: "Arsinform Srl", website: "https://www.arsinform.it/" },
      startDate: "05/2021",
      finishDate: "01/2022",
      location: "Milan, IT",
      duties: [
        "Developed custom software for industrial automation and warehouse management systems using Oracle DB and related technologies such as PL/SLQ, Forms & Reports, Apex and other",
      ]
    },
    {
      job: "Sales Representative",
      company: { name: "Kiron Spa", website: "https://www.kiron.it/" },
      startDate: "07/2019",
      finishDate: "05/2021",
      location: "Lomazzo, IT",
      duties: [
        "Sold finacial products to clients",
        "Managed a portfolio of customers ensuring customer satisfaction and retention",
        "Developed new business by generating leads and networking with potential customers"
      ]
    }
  ];
}
