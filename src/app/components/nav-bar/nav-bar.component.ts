import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public toggleModal(): void {
    const modal = document.getElementById('nav-bar-modal-id');
    modal!.style.display === 'none' ? modal!.style.display = 'block' : modal!.style.display = 'none';
  }
}
