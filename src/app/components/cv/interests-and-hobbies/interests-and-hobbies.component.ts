import { Component } from '@angular/core';

@Component({
  selector: 'app-interests-and-hobbies',
  templateUrl: './interests-and-hobbies.component.html',
  styleUrls: ['./interests-and-hobbies.component.css']
})
export class InterestsAndHobbiesComponent {
  interests: any = [
    "Singing and playing in a rock band",
    "Acting and theater",
    "Sailing",
    "Cooking"
  ];
}
