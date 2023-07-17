import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent {
  skills: any = {
    ["Programming/Query/Markup languages"]: [
      {name: "Typescript/Javascript", level: "4"},
      {name: "Lua", level: "5"},
      {name: "C/C++", level: "3.5"},
      {name: "Ruby", level: "3.5"},
      {name: "PHP", level: "3"},
      {name: "SQL", level: "4.5"},
      {name: "HTML", level: "5"},
      {name: "CSS", level: "4"},
      {name: "Rust", level: "3.5"},
      {name: "Java", level: "3.5"},
    ],
    ["Application frameworks"]: [
      {name: "Angular", level: "4"},
      {name: "NestJS", level: "4"},
      {name: "NodeJS", level: "4"},
      {name: "RxJS", level: "3"},
      {name: "Love2D", level: "5"},
      {name: "RPGMaker", level: "4"}
    ],
    ["Databases"]: [
      {name: "Oracle", level: "4.5"},
      {name: "Postgres", level: "4"},
      {name: "MySql", level: "4"},
      {name: "Sqlite", level: "4.5"},
      {name: "DynamoDB", level: "4"},
    ],
    ["Cloud providers"]: [
      {name: "AWS", level: "4"},
      {name: "Azure", level: "2"},
      {name: "Google Cloud", level: "2"}
    ],
    ["DevOps"]: [
      {name: "Docker", level: "4"},
      {name: "Git", level: "4.5"},
      {name: "Bash", level: "4"},
      {name: "Powershell", level: "3.5"},
      {name: "GitHub Actions", level: "4"}
    ],
    ["Operative systems"]: [
      {name: "Linux (Debian based)", level: "4.5"},
      {name: "Windows", level: "4.5"}
    ]
  }
  skillKeys = Object.keys(this.skills);
}
