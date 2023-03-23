import { Component } from '@angular/core';
import { faEnvelopeSquare, faMobilePhone, faMapPin, faCodeBranch, faLink, faGlobe } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  faEnvelopeSquare = faEnvelopeSquare;
  faMobilePhone = faMobilePhone;
  faMapPin = faMapPin;
  faCodeBranch = faCodeBranch;
  faLink = faLink;
  faGlobe = faGlobe;
}
