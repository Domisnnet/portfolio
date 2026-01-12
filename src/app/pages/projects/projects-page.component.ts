import { Component, signal } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
  // Usando Signal para performance e modernidade
  projects = signal([
    {
      name: 'E-commerce App',
      description: 'Uma loja completa com carrinho e checkout.',
      image: 'assets/images/project1.png',
      url: 'https://github.com/Domisnnet/projeto1',
      tags: ['Angular', 'Node.js', 'MongoDB'] // Corrigido de techs para tags
    },
    // Adicione mais objetos aqui...
  ]);
}