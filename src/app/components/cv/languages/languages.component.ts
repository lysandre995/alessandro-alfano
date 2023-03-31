import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  languages: any = [
    {name: "Italian", level: "C2"},
    {name: "English", level: "C1"},
    {name: "French", level: "A2"}
  ];

  getLanguageLevelClass(level: string): string {
    return `language-${level}`;
  }
}
