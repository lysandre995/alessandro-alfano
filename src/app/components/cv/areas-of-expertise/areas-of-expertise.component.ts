import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-areas-of-expertise',
  templateUrl: './areas-of-expertise.component.html',
  styleUrls: ['./areas-of-expertise.component.css']
})
export class AreasOfExpertiseComponent {
  @Input()
  expertises: string[] = [];
}
