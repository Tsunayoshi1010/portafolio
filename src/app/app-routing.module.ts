import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { AboutMeComponent } from './home/about-me/about-me.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { SkillsComponent } from './home/skills/skills.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, // RUTA PRINCIPAL
    children: [
      { path: 'about-me', component: AboutMeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'skills', component: SkillsComponent },
      { path: '', redirectTo: 'about-me', pathMatch: 'full' }, // Si la URL está vacía, redirigir a "home"
      { path: '**', component: NotFoundComponent } // Ruta por defecto dentro de "home"
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
=======

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
>>>>>>> fbc143d2a32c23d79717db42ec31c4af450ea7d3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
