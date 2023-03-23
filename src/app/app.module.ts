import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './cv/header/header.component';
import { ContactsComponent } from './cv/contacts/contacts.component';
import { WorkComponent } from './cv/work/work.component';
import { EducationComponent } from './cv/education/education.component';
import { LanguagesComponent } from './cv/languages/languages.component';
import { PersonalProjectsComponent } from './cv/personal-projects/personal-projects.component';
import { CoursesAndTrainingComponent } from './cv/courses-and-training/courses-and-training.component';
import { CertificatesComponent } from './cv/certificates/certificates.component';
import { TechnicalSkillsComponent } from './cv/technical-skills/technical-skills.component';
import { AwardsComponent } from './cv/awards/awards.component';
import { AreasOfExpertiseComponent } from './cv/areas-of-expertise/areas-of-expertise.component';
import { InterestsAndHobbiesComponent } from './cv/interests-and-hobbies/interests-and-hobbies.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CvComponent } from './cv/cv.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    WorkComponent,
    EducationComponent,
    LanguagesComponent,
    PersonalProjectsComponent,
    CoursesAndTrainingComponent,
    CertificatesComponent,
    TechnicalSkillsComponent,
    AwardsComponent,
    AreasOfExpertiseComponent,
    InterestsAndHobbiesComponent,
    NavBarComponent,
    CvComponent,
    HomepageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
