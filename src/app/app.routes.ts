import { Routes } from '@angular/router';
import { ProjectsLabPage } from './pages/projetos-lab/pages/projects-lab.page';

export const routes: Routes = [
  {
    path: 'lab',
    loadComponent: () => import('./pages/projetos-lab/pages/projects-lab.page').then(m => m.ProjectsLabPage)
  }
];