import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  stack = {
    frontend: ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'JavaScript', 'Angular', 'React', 'Vue.js'],
    backend: ['Node.js', 'Express'],
    databases: ['MongoDB', 'MySQL'],
    devops: ['GitHub', 'VSCode', 'Vercel', 'NPM'],
    cms: ['WordPress', 'SPA moderna', 'API serverless (Node.js + Firebase Functions)']
  };
}