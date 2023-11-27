import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements OnInit {
  @Input()
  skills: any = {};
  skillKeys: any;

  ngOnInit() {
    this.skillKeys = Object.keys(this.skills);
  }
}
