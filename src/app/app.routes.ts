import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'projetos-lab',
        pathMatch: 'full'
    },
    {
        path: 'projetos-lab',
        loadComponent: () => import('./pages/projetos-lab/pages/projects-lab.page').then(c => c.ProjectsLabPageComponent)
    }
];
