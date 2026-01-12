import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  project = input.required<Project>();
  index = input.required<number>();
  isFlipped = signal(false);

  toggleFlip() {
    this.isFlipped.update(value => !value);
  }

  openLink(event: Event) {
    event.stopPropagation(); 
    const link = this.project()?.link;
    if (link) {
      window.open(link, '_blank');
    }
  }

  getIconName(tag: string): string {
    const name = tag.toLowerCase().trim();
    if (name === 'html') return 'html5';
    if (name === 'css') return 'css3';
    if (name === 'tailwind css') return 'tailwind.css';
    if (name === 'node.js') return 'node-js';
    if (name === 'vue.js') return 'vue-js';
    return name.replace(/\s+/g, '-').replace('.', '-');
  }
}