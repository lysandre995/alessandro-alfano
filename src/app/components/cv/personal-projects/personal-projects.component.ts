import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent {
  projects: string[] = [
    "Developed several small video games in Ruby and Lua",
    "Creates websites for friends, personal use and didactic purpose"
  ];
}
