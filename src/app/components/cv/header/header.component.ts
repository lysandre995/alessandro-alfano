import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  name: string = "";

  @Input()
  title: string = "";

  @Input()
  description: string = "";

  @Input()
  profileImg: string = "";
}
