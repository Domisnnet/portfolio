import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: any;

  isFlipped = signal(false);

  toggleFlip() {
    this.isFlipped.update(v => !v);
  }

  mapTag(tag: string) {
    const map: Record<string, string> = {
      'Angular': 'frontend',
      'Vue.js': 'frontend',
      'JavaScript': 'frontend',
      'Node.js': 'backend',
      'Firebase': 'backend'
    };
    return map[tag] ?? 'frontend';
  }
}