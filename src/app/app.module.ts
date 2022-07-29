import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { AdminComponent } from './components/admin/admin.component';
import { FrontendSkillsComponent } from './components/frontend-skills/frontend-skills.component';
import { BackendSkillsComponent } from './components/backend-skills/backend-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    ContactComponent,
    FooterComponent,
    ProjectsComponent,
    ProjectItemComponent,
    AdminComponent,
    FrontendSkillsComponent,
    BackendSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
