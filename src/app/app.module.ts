import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ContactComponent } from './home/contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
=======
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
>>>>>>> fbc143d2a32c23d79717db42ec31c4af450ea7d3

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
=======
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
>>>>>>> fbc143d2a32c23d79717db42ec31c4af450ea7d3
  bootstrap: [AppComponent]
})
export class AppModule { }
