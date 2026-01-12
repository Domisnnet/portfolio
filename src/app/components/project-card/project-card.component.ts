import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  host: {
    '[style.--rotation]': 'rotation()'
  }
})
export class ProjectCardComponent {
  project = input.required<any>();
  index = input.required<number>();

  // Gera uma rotação única para cada foto parecer "jogada" na mesa
  rotation = () => {
    const angles = [-4, 2, -2, 5, -3, 3];
    return angles[this.index() % angles.length] + 'deg';
  };

  openLink() {
    window.open(this.project().url, '_blank');
  }
}