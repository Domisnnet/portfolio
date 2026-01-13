import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  projects = signal([
    {
      title: 'Projeto Alura',
      description: 'Um App que verifica a idade super estiloso.',
      image: 'assets/images/projeto-alura.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
      link: 'https://github.com/Domisnnet/Projeto-Alura',
    },
    {
      title: 'Drakonik Nexus',
      description: 'Um jogo de cartas da memória inspirado em Yu-Gi-Oh!',
      image: 'assets/images/drakonik-nexus.png',
      tags: ['Vue.js', 'Tailwind.CSS', 'Firebase'],
      link: 'https://github.com/Domisnnet/Drakonik-Nexus-Vue.Js',
    },
    // Adicione mais aqui conforme precisar
  ]);
}
