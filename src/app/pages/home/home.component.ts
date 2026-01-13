import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../../components/stack-pill/stack-pill.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, StackPillComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  stack = signal({
    frontend: [
      'HTML5',
      'CSS3',
      'Sass',
      'JavaScript',
      'Angular',
      'React',
      'Vue.js',
      'Bootstrap',
      'Tailwind.CSS',
    ],
    backend: ['Node.js', 'Express', 'Python'],
    databases: ['MongoDB', 'MySQL'],
    devops: ['GitHub', 'VSCode', 'Vercel', 'NPM'],
    cms: ['WordPress', 'SPA moderna', 'API serverless (Node.js + Firebase Functions)'],
  });

  getIcon(tech: string): string {
    const map: Record<string, string> = {
      'API serverless (Node.js + Firebase Functions)': 'assets/icons/firebase.svg',
      Angular: 'assets/icons/angular.svg',
      Bootstrap: 'assets/icons/bootstrap.svg',
      CSS3: 'assets/icons/css3.svg',
      Express: 'assets/icons/express.svg',
      GitHub: 'assets/icons/github.svg',
      HTML5: 'assets/icons/html5.svg',
      JavaScript: 'assets/icons/javascript.svg',
      MongoDB: 'assets/icons/mongodb.svg',
      MySQL: 'assets/icons/mysql.svg',
      'Node.js': 'assets/icons/node-js.svg',
      NPM: 'assets/icons/npm.svg',
      Python: 'assets/icons/python.svg',
      React: 'assets/icons/react.svg',
      Sass: 'assets/icons/sass.svg',
      'SPA moderna': 'assets/icons/spa.svg',
      'Tailwind.CSS': 'assets/icons/tailwind-css.svg',
      Vercel: 'assets/icons/vercel.svg',
      VSCode: 'assets/icons/vscode.svg',
      'Vue.js': 'assets/icons/vue-js.svg',
      WordPress: 'assets/icons/wordpress.svg',
    };
    return map[tech] || '';
  }
}
