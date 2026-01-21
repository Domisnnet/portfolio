import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectLabCardComponent } from '../components/project-lab-card/project-lab-card.component';

@Component({
  selector: 'app-projects-lab-page',
  templateUrl: './projects-lab.page.html',
  styleUrls: ['./projects-lab.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectLabCardComponent]
})
export class ProjectsLabPageComponent {
  projects = [
    { 
      image: 'https://placehold.co/600x400/000000/FFFFFF/png', 
      title: 'Projeto 1', 
      description: 'Descrição do primeiro projeto de laboratório.' 
    },
    { 
      image: 'https://placehold.co/600x400/000000/FFFFFF/png', 
      title: 'Projeto 2', 
      description: 'Descrição do segundo projeto de laboratório.' 
    },
    { 
      image: 'https://placehold.co/600x400/000000/FFFFFF/png', 
      title: 'Projeto 3', 
      description: 'Descrição do terceiro projeto de laboratório.' 
    },
    { 
      image: 'https://placehold.co/600x400/000000/FFFFFF/png', 
      title: 'Projeto 4', 
      description: 'Descrição do quarto projeto de laboratório.' 
    },
    { 
      image: 'https://placehold.co/600x400/000000/FFFFFF/png', 
      title: 'Projeto 5', 
      description: 'Descrição do quinto projeto de laboratório.' 
    },
    { 
      image: 'https://placehold.co/600x400/000000/FFFFFF/png', 
      title: 'Projeto 6', 
      description: 'Descrição do sexto projeto de laboratório.' 
    }
  ];
}
