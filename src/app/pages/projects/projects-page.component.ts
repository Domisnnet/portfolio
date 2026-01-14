import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  readonly projects = signal<Project[]>([
    {
      title: 'Drakonik Nexus',
      description: 'Jogo de cartas inspirado em Yu-Gi-Oh! usando arquitetura moderna em Vue.Js',
      image: 'assets/images/drakonik-nexus.png',
      tags: ['Vue.js', 'Tailwind.CSS', 'Firebase'],
      link: 'https://github.com/Domisnnet/Drakonik-Nexus-Vue.Js',
    },
    {
      title: 'KingDomfy',
      description: 'Streaming musical com player funcional, inspirada no Spotify.',
      image: 'assets/images/kingdomfy.png',
      tags: ['Angular', 'Firebase', 'Architecture', 'UX'],
      link: 'https://github.com/Domisnnet/King-Domfy',
    },
    {
      title: 'GitHub Stats',
      description: 'Visualização dinâmica e automatizada de métricas reais do GitHub.',
      image: 'assets/images/github-stats.png',
      tags: ['SVG', 'API', 'Automation', 'GitHub'],
      link: 'https://github.com/Domisnnet/GitHub-Stats',
    },
    {
      title: 'Shadow Flip-Oh!',
      description: 'Jogo de memória com animações, lógica de estados e narrativa visual.',
      image: 'assets/images/shadow-flip-oh.png',
      tags: ['Game Logic', 'CSS Animations', 'JavaScript'],
      link: 'https://github.com/Domisnnet/Shadow-Flip-Oh',
    },
    {
      title: 'Kill Buzz',
      description: 'Aplicação focada em redução de distrações digitais.',
      image: 'assets/images/kill-buzz.png',
      tags: ['UX', 'Product', 'JavaScript'],
      link: 'https://github.com/Domisnnet/Kill-Buzz',
    },
    {
      title: 'Pokedevs',
      description: 'Projeto temático combinando design divertido com lógica estruturada.',
      image: 'assets/images/pokedevs.png',
      tags: ['JavaScript', 'CSS3', 'UI'],
      link: 'https://github.com/Domisnnet/Pokedevs',
    },
    {
      title: 'Projeto Alura',
      description: 'Aplicação estilizada com boas práticas de front-end.',
      image: 'assets/images/projeto-alura.png',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/Domisnnet/Projeto-Alura',
    },
    {
      title: 'Interactive Portfolio',
      description: 'Portfólio animado com narrativa visual e microinterações.',
      image: 'assets/images/portfolio.png',
      tags: ['Angular', 'SCSS', 'Animation', 'Design'],
      link: 'https://portfolio-56747762-94d87.web.app/',
    },
  ]);
}