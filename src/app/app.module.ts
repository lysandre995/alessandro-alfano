import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/cv/header/header.component';
import { ContactsComponent } from './components/cv/contacts/contacts.component';
import { WorkComponent } from './components/cv/work/work.component';
import { EducationComponent } from './components/cv/education/education.component';
import { LanguagesComponent } from './components/cv/languages/languages.component';
import { PersonalProjectsComponent } from './components/cv/personal-projects/personal-projects.component';
import { CoursesAndTrainingComponent } from './components/cv/courses-and-training/courses-and-training.component';
import { CertificatesComponent } from './components/cv/certificates/certificates.component';
import { TechnicalSkillsComponent } from './components/cv/technical-skills/technical-skills.component';
import { AwardsComponent } from './components/cv/awards/awards.component';
import { AreasOfExpertiseComponent } from './components/cv/areas-of-expertise/areas-of-expertise.component';
import { InterestsAndHobbiesComponent } from './components/cv/interests-and-hobbies/interests-and-hobbies.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CvComponent } from './components/cv/cv.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components//footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkExperienceComponent } from './components/cv/work/work-experience/work-experience.component';
import { CvHeaderDataService } from './services/cv-header-data.service';

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
    FooterComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [CvHeaderDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
