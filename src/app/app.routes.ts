import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsPageComponent } from './pages/projects/projects-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projetos', component: ProjectsPageComponent },
  { path: 'sobre', component: AboutPageComponent },
  { path: 'contato', component: ContactPageComponent },
  { path: '**', redirectTo: '' },
];
