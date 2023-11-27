import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  @Input()
  languages: any;

  getLanguageLevelClass(level: string): string {
    return `language-${level}`;
  }
}
